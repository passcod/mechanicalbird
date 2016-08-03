// @flow
import { connect } from 'react-redux'
import React from 'react'
import { sweep } from '../state/entry'

function Sweep ({ sweep }) {
  return <section className='sweep'>
    <button className='action' onClick={sweep}>Sweep</button>
  </section>
}

export default connect(null, { sweep })(Sweep)
