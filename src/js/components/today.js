// @flow
import classnames from 'classnames'
import { connect } from 'react-redux'
import React from 'react'
import TimeRow from './time-row'

function Today ({ on, today }) {
  return <section className={classnames('today', { live: on })}>
    {today.toSeq().reverse().map((entry, ts) =>
      <TimeRow
        entry={entry}
        key={ts}
        ts={ts} />
    ).toArray()}
    {today.size === 0 ? <p className='empty'>Nothing there!</p> : null}
  </section>
}

export default connect(
  (state) => ({
    on: state.get('on'),
    today: state.get('today')
  })
)(Today)
