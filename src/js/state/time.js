// @flow
import { List } from 'immutable'
/* :: import type { State } from '.' */

function doStart (state/* : State */, ts/* : Date */, data/* : ?EntryData */) {
  const ret = (
    // If we get a TIME_START while the timer is already running, we actually
    // want to stop it (so apply the effect of TIME_STOP before doing anything)
    // and then immediately start a new entry (so continue as normal).
    state.get('on') ? doStop(state, ts) : state

  // And in any case...
  ).set('on', true)

  return ret
}

function doStop (state/* : State */, ts/* : Date */) {
  const ret = state.set('on', false)
  const today = state.get('today', new List())
  const latest = today.last()

  // If there is no entry in the list, we can't do anything.
  if (!latest) { return ret }
  return ret
}

/* :: type TimeAction = {
  type: string,
  ts: Date,
  data: ?EntryData
} */

export default function Time (state/* : State */, action/* : TimeAction */) {
  switch (action.type) {
    case 'TIME_START':
      return doStart(state, action.ts, action.data)
    case 'TIME_STOP':
      return doStop(state, action.ts)
  }
}

/* :: type EntryData = {
  description: string
} */

export function start (data/* : ?EntryData */) {
  return { type: 'TIME_START', ts: new Date(), data }
}

export function stop () {
  return { type: 'TIME_STOP', ts: new Date() }
}
