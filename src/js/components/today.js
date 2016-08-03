// @flow
import { connect } from 'react-redux'
import React from 'react'
import TimeRow from './time-row'

function Today ({ on, today }) {
  return <section className='today'>
    {today.map((entry, i) =>
      <TimeRow key={i} entry={entry} live={on && i === 0} />
    )}
  </section>
}

export default connect(
  (state) => ({
    on: state.get('on'),
    today: state.get('today')
  })
)(Today)
