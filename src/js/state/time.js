// @flow
import { Map as IMap } from 'immutable'
import moment from 'moment'
/* :: import type { State } from '.' */

/* :: type TimeAction = {
  type: string,
  ts: Date
} */

function doStart (state/* : State */, ts/* : Date */) {
  return (
    // If we get a TIME_START while the timer is already running, we actually
    // want to stop it (so apply the effect of TIME_STOP before doing anything):
    state.get('on') ? doStop(state) : state

  // In either case, do what we need to:
  ).set('on', true).setIn(['today', ts], new IMap({
    description: `Entry started at ${moment(ts).format('H:mm:ss')}`
  }))
}

function doStop (state/* : State */, ts/* : Date */) {
  return state.set('on', false)
}

export default function (state/* : State */, action/* : TimeAction */) {
  switch (action.type) {
    case 'TIME_START':
      return doStart(state, action.ts)
    case 'TIME_STOP':
      return doStop(state)
  }
}

export function start () {
  return { type: 'TIME_START', ts: new Date() }
}

export function stop () {
  return { type: 'TIME_STOP', ts: new Date() }
}
