// @flow
import { connect } from 'react-redux'
import Icon from './icon'
import React from 'react'
import { start, stop } from '../state/time'

function TheButton ({ on, start, stop }) {
  return <button className='the-button' onClick={on ? stop : start}>
    {on ? <Icon name='stop' /> : <Icon name='play' />}
  </button>
}

export default connect(
  (state) => ({ on: state.get('on') }),
  { start, stop }
)(TheButton)
