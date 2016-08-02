// @flow
import React from 'react'
import AtTime from './at-time'
import TimeBlock from './time-block'

export default function TimeRow ({ ts, job } /* : { ts: Date, job: string } */) {
  return <article className='time-row'>
    <TimeBlock ts={ts} />
    <span className='description'>{job}</span>
    <AtTime ts={ts} />
  </article>
}
