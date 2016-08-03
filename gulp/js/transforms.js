// @flow
import babelify from 'babelify'
import envify from 'envify'

const transforms = [
  babelify,
  envify
].filter((t) => !!t)
export default transforms
