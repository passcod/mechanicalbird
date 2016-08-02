// @flow
import React from 'react'
import Fonts from './fonts'
import Today from './today'
import TopBar from './top-bar'

export default function Root () {
  return <div>
    <TopBar />
    <main>
      <Today />
    </main>
    <Fonts />
  </div>
}
