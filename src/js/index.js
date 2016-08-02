// @flow
import domready from 'domready'
import React from 'react'
import { render } from 'react-dom'
import Root from './components/root'

domready(() => {
  const target = document.createElement('div')
  target.id = 'target'
  document.body.appendChild(target)
  render(<Root />, target)
})
