import gulp from 'gulp'
import { dev, watch } from '../util'
import buffer from 'vinyl-buffer'
import bundler from './bundler'
import livereload from 'gulp-livereload'
import source from 'vinyl-source-stream'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'

function bundle () {
  let b = bundler()
  .pipe(source('index.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))

  if (!dev) {
    b = b.pipe(uglify())
  }

  return b
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/'))
  .pipe(livereload())
}

watch(() => gulp.watch(['./src/js/**/*.js'], ['browserify']))

gulp.task('browserify', bundle)
