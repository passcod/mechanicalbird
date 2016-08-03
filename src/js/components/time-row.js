// @flow
import AtTime from './at-time'
import pearson from 'pearson'
import React from 'react'
import TimeBlock from './time-block'

const seed = pearson.seed()

function hashCode (...data) {
  return pearson(`${data}`, 1, seed).toString('hex')[0]
}

export default function TimeRow ({ entry, live = false } /* : {
  entry: Object,
  live?: boolean
} */) {
  const { ts, description } = entry.toJS()
  return <article className='time-row'>
    <TimeBlock hashCode={hashCode(ts)} live={live} ts={ts} />
    <span className='description'>{description}</span>
    <AtTime ts={ts} />
  </article>
}
