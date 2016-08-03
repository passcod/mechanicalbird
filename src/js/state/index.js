// @flow
import { createStore } from 'redux'
import { OrderedMap, Map as IMap } from 'immutable'
import Time from './time'
import Entry from './entry'

/* :: export type State = IMap<string, any> */

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

const initialState = new IMap({
  on: storage.get('on', false),
  entries: new OrderedMap(storage.get('entries', []).map(([key, entry]) =>
    [new Date(key), new IMap(Object.assign(entry, {
      end: entry.end ? new Date(entry.end) : undefined
    }))]
  ))
})

function reducer (state/* : State */, action) {
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
})
