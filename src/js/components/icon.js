// @flow
import React from 'react'

export default function Icon ({ name } /* : { name: string } */) {
  return <i className={`fa fa-${name}`} />
}
