// @flow
import { duration } from 'moment'
import React from 'react'
import Vaire from 'vaire'

function diff (date, now = new Date()) {
  return duration(now - date)
}

function render (live, ...args) {
  const d = diff(...args)
  let m = d.minutes()
  if (m < 10) { m = '00' }
  return [d.hours(), m].join(
    live && d.seconds() % 2 === 0 ? '\u202f' : ':'
  )
}

export default function TimeBlock ({ live = false, ts } /* : {
  live?: boolean,
  ts: Date
} */) {
  const height = 1
  return <span className='block' data={{ height }}>
    <Vaire dateTime={ts} format={render.bind(this, live)} />
  </span>
}
