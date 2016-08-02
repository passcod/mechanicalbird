// @flow
import { watch } from './util'
import gulp from 'gulp'
import livereload from 'gulp-livereload'
import newer from 'gulp-newer'

const src = [
  './src/assets/*',
  './node_modules/font-awesome/fonts/*'
]

const dst = './dist/assets/'

gulp.task('assets', () => {
  return gulp.src(src)
  .pipe(newer(dst))
  .pipe(gulp.dest(dst))
  .pipe(livereload())
})

watch(() => gulp.watch(src, ['assets']))
