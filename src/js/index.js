// @flow
import domready from 'domready'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import Root from './components/root'
import state from './state'
window.state = state

domready(() => {
  const target = document.createElement('div')
  target.id = 'target'
  document.body.appendChild(target)
  render(<Provider store={state}><Root /></Provider>, target)
})
