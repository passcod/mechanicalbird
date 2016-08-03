// @flow
import { connect } from 'react-redux'
import React from 'react'
import TimeRow from './time-row'

function Today ({ on, today }) {
  let i = 0
  // A bit obscure: i++ === 0 only once, i.e. on the first iteration,
  // and if i === 0 *after* the loop, then it hasn't run (empty array).

  return <section className='today'>
    {today.toSeq().reverse().map((entry, ts) =>
      <TimeRow
        entry={entry}
        key={ts}
        live={on && i++ === 0}
        ts={ts} />
    ).toArray()}
    {i === 0 ? <p className='empty'>Nothing there!</p> : null}
  </section>
}

export default connect(
  (state) => ({
    on: state.get('on'),
    today: state.get('today')
  })
)(Today)
