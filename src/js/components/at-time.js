// @flow
import moment, { duration } from 'moment'
import React from 'react'

function day (t) {
  const midnight = moment().startOf('day')
  if (!t.isBefore(midnight)) { return null }

  const n = duration(midnight - t).asDays()
  if (n < 1) { return ' (yesterday)' }
  return ` (${n} days ago)`
}

export default function AtTime ({ ts } /* : { ts: Date } */) {
  const t = moment(ts)
  return <time
    className='at-time'
    dateTime={t.format()}
    title={t.format('dddd, MMMM Do YYYY, h:mm:ss a')}>
    at {t.format('H:mm')}
    {day(t)}
  </time>
}
