// @flow
import Before from './before'
import Fonts from './fonts'
import React from 'react'
import Sweep from './sweep'
import Today from './today'
import TopBar from './top-bar'

export default function Root () {
  return <div>
    <TopBar />
    <main>
      <Today />
      <Before />
      <Sweep />
    </main>
    <Fonts />
  </div>
}
