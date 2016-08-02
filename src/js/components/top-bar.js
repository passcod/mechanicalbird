// @flow
import React from 'react'
import TheButton from './the-button'

export default function TopBar () {
  return <nav>
    <img className='logo' src='/assets/logo.svg' />
    <h1>Mechanical<br />Bird</h1>
    <TheButton />
  </nav>
}
