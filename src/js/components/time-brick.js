// @flow
import { code, diff, pebble } from './time-block'
import React from 'react'

export default function TimeBrick ({ entry, ts } /* : {
  entry: Object,
  ts: Date
} */) {
  const d = diff(ts, entry.get('end'))
  return <div
    className='time-block'
    data-color={code(ts)}
    style={{ flexGrow: d.asHours() }}
    title={entry.get('description')}>
    {pebble(d)}
  </div>
}
