// @flow
import { createStore } from 'redux'
import { OrderedMap, Map as IMap } from 'immutable'
import Time from './time'
import Entry from './entry'

/* :: export type State = IMap<string, any> */

const storage = {
  get (key, def) {
    const val = window.localStorage.getItem(key)
    if (val) { return JSON.parse(val) }
    return def
  },
  set (key, val) {
    try {
      return window.localStorage.setItem(key, JSON.stringify(val))
    } catch (err) {
      console.error('Storage error', err)
    }
  }
}

const initialState = new IMap({
  on: storage.get('on', false),
  today: new OrderedMap(storage.get('today', []).map(([key, entry]) =>
    [new Date(key), new IMap(entry)]
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
  const today = []
  state.get('today').forEach((entry, ts) => {
    today.push([ ts, entry.toJS() ])
  })

  storage.set('on', state.get('on'))
  storage.set('today', today)
})
