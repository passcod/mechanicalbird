// @flow
import { createStore } from 'redux'
import { Map as IMap } from 'immutable'
import Time from './time'

const store = createStore((state/* : State */ = new IMap({
  on: false
}), action) => {
  switch (action.type.split('_')[0]) {
    case 'TIME':
      return Time(state, action)
    default:
      return state
  }
})

export default store
/* :: export type State = IMap<string, any> */
