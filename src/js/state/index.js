// @flow
import { box, hash, randomBytes } from 'tweetnacl'
import { createStore } from 'redux'
import Entry from './entry'
import { OrderedMap, Map as IMap } from 'immutable'
import { strToU8 } from '../pearson'
import Time from './time'

/* :: export type State = IMap<string, any> */

window.Uint8Array.prototype.toJSON = function () {
  return Array.from(this)
}

const storage = {
  get (key/* : string */, def/* : any */) /* : any */ {
    const val = window.localStorage.getItem(key)
    if (val) { return JSON.parse(val) }
    return def
  },
  set (key/* : string */, val/* : any */) {
    try {
      return window.localStorage.setItem(key, JSON.stringify(val))
    } catch (err) {
      console.error('Storage error', err)
    }
  }
}

const today = storage.get('today')
if (today) {
  storage.set('entries', today)
  window.localStorage.removeItem('today')
}

function deckeys (keys) {
  if (!Array.isArray(keys.publicKey)) { return keys }
  return {
    publicKey: Uint8Array.from(keys.publicKey),
    secretKey: Uint8Array.from(keys.secretKey)
  }
}

const initialState = new IMap({
  on: storage.get('on', false),
  entries: new OrderedMap(storage.get('entries', []).map(([key, entry]) =>
    [new Date(key), new IMap(Object.assign(entry, {
      end: entry.end ? new Date(entry.end) : undefined
    }))]
  )),
  keys: new IMap({
    local: new IMap(deckeys(storage.get('lkey', box.keyPair()))),
    server: new IMap(deckeys(storage.get('skey', box.keyPair())))
  })
})

function reducer (state/* : State */, action) {
  syncAction(state, action)
  switch (action.type.split('_')[0]) {
    case 'ENTRY':
      return Entry(state, action)
    case 'TIME':
      return Time(state, action)
    default:
      return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
)

export default store

store.subscribe(() => {
  const state = store.getState()
  storage.set('on', state.get('on'))
  storage.set('entries', Array.from(state.get('entries').entries()))
  storage.set('lkey', state.getIn(['keys', 'local']))
  storage.set('skey', state.getIn(['keys', 'server']))
})

function syncAction (state, action) {
  const payload = strToU8(JSON.stringify(Object.assign({
    issued: (new Date()).toISOString()
  }, action)))
  console.debug('payload', payload)

  const sum = hash(payload)
  const nonce = randomBytes(box.nonceLength)
  const boxed = box(payload, nonce,
    state.getIn(['keys', 'local', 'publicKey']), // signing key
    state.getIn(['keys', 'server', 'secretKey']) // crypting key
  )

  const keyNonce = randomBytes(box.nonceLength)
  const keyBoxed = box(
    state.getIn(['keys', 'server', 'secretKey']), // payload
    keyNonce,
    state.getIn(['keys', 'local', 'publicKey']), // signing key
    state.getIn(['keys', 'local', 'secretKey']) // crypting key
  )

  const keyHash = hash(state.getIn(['keys', 'server', 'publicKey']))
  const ownHash = hash(state.getIn(['keys', 'local', 'publicKey']))

  console.table({
    keys: {
      owner: ownHash,
      fingerprint: keyHash,
      nonce: keyNonce,
      key: keyBoxed
    }
  })

  console.table({
    actions: {
      key: keyHash,
      nonce,
      hash: sum,
      payload: boxed
    }
  })
}
