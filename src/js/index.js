import domready from 'domready'
import moment from 'moment'
import React from 'react'
import { render } from 'react-dom'

function Icon ({ name }) {
  return <i className={`fa fa-${name}`} />
}

function TheButton () {
  return <button className='the-button'><Icon name='play' /></button>
}

function TopBar () {
  return <nav>
    <img className='logo' src='/assets/logo.svg' />
    <h1>Mechanical<br />Bird</h1>
    <TheButton />
  </nav>
}

function TimeBlock ({ time }) {
  const d = moment.duration(time)
  const height = 1
  return <span className='block' data={{ height }}>
    {d.hours()}:{d.minutes()}
  </span>
}

function Description ({ job }) {
  return <span className='description'>{job}</span>
}

function Time ({ dateTime }) {
  const t = moment(dateTime)
  return <time
    dateTime={t.format()}
    title={t.format('dddd, MMMM Do YYYY, h:mm:ss a')}>
    (at {t.format('H:mm')})
  </time>
}

function TimeRow ({ dateTime, job, time }) {
  return <article className='time-row'>
    <TimeBlock time={time} />
    <Description job={job} />
    <Time dateTime={dateTime} />
  </article>
}

function Today () {
  return <section className='today'>
    <TimeRow
      dateTime={new Date()}
      job={'A random job'}
      time={Math.random() * 60 * 60 * 1000} />
    <TimeRow
      dateTime={new Date()}
      job={'A random job'}
      time={Math.random() * 60 * 60 * 1000} />
    <TimeRow
      dateTime={new Date()}
      job={'A random job'}
      time={Math.random() * 60 * 60 * 1000} />
  </section>
}

domready(() => {
  const target = document.createElement('div')
  target.id = 'target'
  document.body.appendChild(target)

  render(<div>
    <TopBar />
    <main>
      <Today />
    </main>
  </div>, target)
})

const horizon = Horizon()
horizon.onReady(() => {
  console.log('App works!')
})
horizon.connect()
