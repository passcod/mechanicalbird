// @flow
import { connect } from 'react-redux'
import Day from './day'
import moment from 'moment'
import React from 'react'

function isBefore (entry, ts) {
  const midnight = moment().startOf('day')
  return moment(ts).isBefore(midnight) ||
    moment(entry.get('end') || null).isBefore(midnight)
}

export default function Before ({ before }) {
  return <section className='before'>
    {before.toSeq().groupBy(
      (_, ts) => moment(ts).startOf('day')
    ).sortBy((_, day) => day).map((entries, day) =>
      <Day key={day} ts={day} entries={entries} />
    ).toArray()}
  </section>
}

export default connect(
  (state) => ({
    before: state.get('entries').filter(isBefore)
  })
)(Before)
