import domready from 'domready'
import React from 'react'
import { render } from 'react-dom'

function Time () {
  return <p>The time is now</p>
}

domready(() => {
  const target = document.createElement('div')
  target.id = 'target'
  document.body.appendChild(target)

  render(<div>
    <h1>Hello World</h1>
    <Time />
  </div>, target)
})

const horizon = Horizon()
horizon.onReady(() => {
  console.log('App works!')
})
horizon.connect()
