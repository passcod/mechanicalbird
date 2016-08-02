// @flow
import React from 'react'
import { test } from 'tap'
import { testRender } from './utils'

function Foo () {
  return <div>Foo</div>
}

test('Placeholder', (t) => {
  t.plan(2)
  t.ok(true, 'world still exists')
  testRender(<Foo />, (output) => {
    t.equal(output.type, 'div', 'Foo is a <div>')
  })
})
