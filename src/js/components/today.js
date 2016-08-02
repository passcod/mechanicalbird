// @flow
import React from 'react'
import TimeRow from './time-row'

export default function Today () {
  return <section className='today'>
    <TimeRow ts={new Date()} job={'A random job'} />
    <TimeRow ts={new Date()} job={'A random job'} />
    <TimeRow ts={new Date()} job={'A random job'} />
  </section>
}
