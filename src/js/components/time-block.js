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

export default function TimeBlock ({ hashCode, live = false, ts } /* : {
  hashCode?: string,
  live?: boolean,
  ts: Date
} */) {
  return <span className='block' data-color={hashCode}>
    <Vaire dateTime={ts} format={render.bind(this, live)} />
  </span>
}
