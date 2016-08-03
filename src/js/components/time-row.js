// @flow
import AtTime from './at-time'
import { connect } from 'react-redux'
import { description as save } from '../state/entry'
import pearson from 'pearson'
import React from 'react'
import TimeBlock from './time-block'

const seed = pearson.seed()

function hashCode (...data) {
  return pearson(`${data}`, 1, seed).toString('hex')[0]
}

function TimeRow ({ ts, entry, live = false, save } /* : {
  ts: Date,
  entry: Object,
  live?: boolean,
  save: Function
} */) {
  const { description } = entry.toJS()
  return <article className='time-row'>
    <TimeBlock hashCode={hashCode(+ts)} live={live} ts={ts} />
    <input
      className='description'
      defaultValue={description}
      onChange={(e) => save(ts, e.target.value)} />
    <AtTime ts={ts} />
  </article>
}

export default connect(null, { save })(TimeRow)
