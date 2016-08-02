// @flow
import React from 'react'
import moment from 'moment'

export default function AtTime ({ ts } /* : { ts: Date } */) {
  const t = moment(ts)
  return <time
    dateTime={t.format()}
    title={t.format('dddd, MMMM Do YYYY, h:mm:ss a')}>
    (at {t.format('H:mm')})
  </time>
}
