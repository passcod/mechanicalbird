import { done, error } from './logging'
import browserify from 'browserify'
import rememberify from 'rememberify'
import transform from './transforms'

const b = browserify({
  debug: true,
  entries: ['./src/js/index.js'],
  transform
}).plugin(rememberify)

b.on('log', done)

export default function bundler () {
  return b.bundle().on('error', error)
}
