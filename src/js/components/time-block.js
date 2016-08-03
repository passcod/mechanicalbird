// @flow
import { duration } from 'moment'
import pearson from 'pearson'
import React from 'react'
import Vaire from 'vaire'
/* :: import moment from 'moment' */

const seed = pearson.seed()

export function code (ts/* : Date */) {
  return pearson(ts.toISOString(), 1, seed).toString('hex')[0]
}

export function diff (date/* : Date */, end/* : ?Date */) {
  if (!end) { end = new Date() }
  return duration(end - date)
}

export function pebble (d/* : moment.Duration */) {
  let m = d.minutes()
  if (m < 10) { m = '0' + m }

  return <time dateTime={d.toJSON()} title={d.humanize()}>
    {d.hours()}<span className='separator'>:</span>{m}
  </time>
}

function render (end, date) {
  const d = diff(date, end)

  let height = d.asHours() * 4
  if (height < 2) { height = 2 }
  height += 'em'

  return <span
    className='time-block'
    data-color={code(date)}
    style={{ height }}>
    {pebble(d)}
  </span>
}

export default function TimeBlock ({ end, ts } /* : {
  end?: Date,
  ts: Date
} */) {
  return <Vaire
    dateTime={ts}
    format={render.bind(this, end)}
    interval={+duration(10, 'seconds')}
    raw />
}
