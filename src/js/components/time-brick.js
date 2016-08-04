// @flow
import { code, diff, pebble } from './time-block'
import moment from 'moment'
import React from 'react'

export default function TimeBrick ({ entry, ts } /* : {
  entry: Object,
  ts: Date
} */) {
  const d = diff(ts, entry.get('end'))
  const title = `${entry.get('description')} (at ${moment(ts).format('H:mm')})`
  return <div
    className='time-block'
    data-color={code(ts)}
    style={{ flexGrow: d.asHours() }}
    title={title}>
    {pebble(d)}
  </div>
}
