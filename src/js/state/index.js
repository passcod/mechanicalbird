// @flow
import { createStore } from 'redux'
import { OrderedMap, Map as IMap } from 'immutable'
import Time from './time'
import Entry from './entry'

/* :: export type State = IMap<string, any> */

const initialState = new IMap({
  on: false,
  today: new OrderedMap()
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

export default createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
)
