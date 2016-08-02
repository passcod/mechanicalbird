// @flow
import moment from 'moment'
import React from 'react'

export default function AtTime ({ ts } /* : { ts: Date } */) {
  const t = moment(ts)
  return <time
    dateTime={t.format()}
    title={t.format('dddd, MMMM Do YYYY, h:mm:ss a')}>
    (at {t.format('H:mm')})
  </time>
}
