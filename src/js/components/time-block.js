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
  return <span>
    {d.hours()}
    <span className='separator'>:</span>
    {m}
  </span>
}

export default function TimeBlock ({ end, ts } /* : {
  end?: Date,
  ts: Date
} */) {
  let height = diff(ts, end).asHours() * 4
  if (height < 2) { height = 2 }
  height += 'em'

  return <span className='block' data-color={code(ts)} style={{ height }}>
    <Vaire dateTime={ts} format={render.bind(this, end)} />
  </span>
}
