// @flow
import AtTime from './at-time'
import React from 'react'
import TimeBlock from './time-block'

export default function TimeRow ({ job, live = false, ts } /* : {
  job: string,
  live?: boolean,
  ts: Date
} */) {
  return <article className='time-row'>
    <TimeBlock live={live} ts={ts} />
    <span className='description'>{job}</span>
    <AtTime ts={ts} />
  </article>
}
