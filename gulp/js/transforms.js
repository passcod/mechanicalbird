import { dev } from '../util'
import babelify from 'babelify'
import envify from 'envify'
import uglifyify from 'uglifyify'

const transforms = [
  babelify,
  envify,
  (!dev) && uglifyify
].filter((t) => !!t)
export default transforms
