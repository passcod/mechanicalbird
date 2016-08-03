// @flow
import moment from 'moment'
import React from 'react'
import TimeBrick from './time-brick'

export default function Day ({ ts, entries } /* : {
  ts: Class<moment()>,
  entries: Object[]
} */) {
  return <article className='day'>
    <h1>{moment(ts).calendar(null, {
      sameDay: '[Today]',
      lastDay: '[Yesterday]',
      lastWeek: 'dddd',
      sameElse: 'ddd D MMM YYYY'
    })}</h1>
    {entries.toSeq().map((entry, ts) =>
      <TimeBrick key={ts} ts={ts} entry={entry} />
    ).toArray()}
  </article>
}
