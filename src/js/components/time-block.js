// @flow
import { duration } from 'moment'
import pearson from 'pearson'
import React from 'react'
import Vaire from 'vaire'

const seed = pearson.seed()

function code (ts/* : Date */) {
  return pearson(ts.toISOString(), 1, seed).toString('hex')[0]
}

function diff (date/* : Date */, end/* : ?Date */) {
  if (!end) { end = new Date() }
  return duration(end - date)
}

function render (end, date) {
  const d = diff(date, end)
  let m = d.minutes()
  if (m < 10) { m = '0' + m }
  return [d.hours(), m].join(
    (!end) && d.seconds() % 2 === 0 ? '\u202f' : ':'
  )
}

export default function TimeBlock ({ end, ts } /* : {
  end?: Date,
  ts: Date
} */) {
  return <span className='block' data-color={code(ts)}>
    <Vaire dateTime={ts} format={render.bind(this, end)} />
  </span>
}
