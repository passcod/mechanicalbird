// @flow
import { blue } from 'chalk'
import gulp from 'gulp'
import gutil from 'gulp-util'
import livereload from 'gulp-livereload'
import { watch } from './gulp/util'

import './gulp/assets'
import './gulp/css'
import './gulp/html'
import './gulp/js'

gulp.task('default', [
  'assets',
  'css',
  'html',
  'js'
])

gulp.task('watch', ['default'], () => {
  livereload.listen()
  watch()
  gutil.log(blue('Starting file watcher... (Ctrl-C to stop)'))
})
