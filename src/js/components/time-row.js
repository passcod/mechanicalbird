// @flow
import AtTime from './at-time'
import { connect } from 'react-redux'
import { description as save } from '../state/entry'
import React from 'react'
import TimeBlock from './time-block'

function TimeRow ({ ts, entry, live = false, save } /* : {
  ts: Date,
  entry: Object,
  live?: boolean,
  save: Function
} */) {
  const { description, end } = entry.toJS()
  return <article className='time-row'>
    <TimeBlock end={end} ts={ts} />
    <input
      className='description'
      defaultValue={description}
      onChange={(e) => save(ts, e.target.value)} />
    <AtTime ts={ts} />
  </article>
}

export default connect(null, { save })(TimeRow)
