import { blue } from 'chalk'
import gulp from 'gulp'
import gutil from 'gulp-util'
import livereload from 'gulp-livereload'
import { watch } from './gulp/util'

import './gulp/assets'
import './gulp/browserify'
import './gulp/css'
import './gulp/html'

gulp.task('default', [
  'assets',
  'browserify',
  'css',
  'html'
])

gulp.task('watch', ['default'], () => {
  livereload.listen()
  watch()
  gutil.log(blue('Starting file watcher... (Ctrl-C to stop)'))
})
