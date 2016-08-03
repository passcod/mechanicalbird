// @flow
import { connect } from 'react-redux'
import React from 'react'
import TimeRow from './time-row'

function Today ({ on, today }) {
  let i = 0 // A bit obscure, but i++ === 0 only once, i.e. 'first row'

  return <section className='today'>
    {today.toSeq().reverse().map((entry, ts) =>
      <TimeRow
        entry={entry}
        key={ts}
        live={on && i++ === 0}
        ts={ts} />
    ).toArray()}
  </section>
}

export default connect(
  (state) => ({
    on: state.get('on'),
    today: state.get('today')
  })
)(Today)
