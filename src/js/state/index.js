// @flow
import { createStore } from 'redux'
import { List, Map as IMap } from 'immutable'
import Time from './time'

/* :: export type State = IMap<string, any> */

const initialState = new IMap({
  on: false,
  today: new List()
})

function reducer (state/* : State */, action) {
  switch (action.type.split('_')[0]) {
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
