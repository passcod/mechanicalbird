import { dev } from '../util'
import babelify from 'babelify'
import envify from 'envify'
import uglifyify from 'uglifyify'
import hyperxify from 'hyperxify'

const transforms = [
  babelify,
  hyperxify,
  envify,
  (!dev) && uglifyify
].filter((t) => !!t)
export default transforms
