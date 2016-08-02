// @flow
import React from 'react'
import { duration } from 'moment'

export default function TimeBlock ({ ts } /* : { ts: Date } */) {
  const d = duration(new Date() - ts)
  const height = 1
  return <span className='block' data={{ height }}>
    {d.hours()}:{d.minutes()}
  </span>
}
