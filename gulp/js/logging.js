// @flow
import { cyan, magenta, red } from 'chalk'
import { log as glog } from 'gulp-util'
import bytes from 'bytes'

export function error (err/* : Error */) {
  glog(
    `${red('Error')} in plugin '${cyan('browserify')}'`,
    '\nMessage:',
    `\n${err.toString()}`,
    err.codeFrame ? `\n${err.codeFrame}` : ''
  )
}

export function done (msg/* : string */) {
  const parsed = msg.match(/(\d+) bytes written \(([\d.]+) seconds\)/)
  if (!parsed) { return }

  const size = magenta(bytes.format(+parsed[1]))
  const time = magenta(`${parsed[2]}s`)
  glog(`Finished '${cyan('browserify')}' after ${time} (${size})`)
}
