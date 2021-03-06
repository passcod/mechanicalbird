// @flow
/* :: import type { State } from '.' */

/* :: type EntryAction = {
  type: string,
  ts: Date,
  description?: string
} */

function saveDescription (state, ts, description) {
  return state.setIn(['entries', ts, 'description'], description)
}

export default function (state/* : State */, action/* : EntryAction */) {
  switch (action.type) {
    case 'ENTRY_DESCRIPTION':
      return saveDescription(state, action.ts, action.description)
  }
}

export function description (ts/* : Date */, desc/* : string */) {
  return { type: 'ENTRY_DESCRIPTION', ts, description: desc }
}
