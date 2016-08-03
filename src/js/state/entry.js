// @flow
import { OrderedMap } from 'immutable'
/* :: import type { State } from '.' */

/* :: type EntryAction = {
  type: string,
  ts: Date,
  description?: string
} */

function saveDescription (state, ts, description) {
  return state.setIn(['today', ts, 'description'], description)
}

function sweepEntries (state) {
  return state.set('on', false).set('today', new OrderedMap())
}

export default function (state/* : State */, action/* : EntryAction */) {
  switch (action.type) {
    case 'ENTRY_DESCRIPTION':
      return saveDescription(state, action.ts, action.description)
    case 'ENTRY_SWEEP':
      return sweepEntries(state)
  }
}

export function description (ts/* : Date */, desc/* : string */) {
  return { type: 'ENTRY_DESCRIPTION', ts, description: desc }
}

export function sweep () {
  return { type: 'ENTRY_SWEEP' }
}
