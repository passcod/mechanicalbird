// @flow
import gulp from 'gulp'
import { done, error } from './logging'
import browserify from 'browserify'
import buffer from 'vinyl-buffer'
import livereload from 'gulp-livereload'
import rememberify from 'rememberify'
import source from 'vinyl-source-stream'
import sourcemaps from 'gulp-sourcemaps'
import transform from './transforms'
import { watch } from '../util'

function makeb (entry) {
  const b = browserify({
    debug: true,
    entries: [entry],
    transform
  }).plugin(rememberify)

  b.on('log', done)
  return b
}

const common = makeb('./src/js/common.js')
common.require('domready')
common.require('immutable')
common.require('moment')

const redux = makeb('./src/js/redux.js')
redux.require('react-redux')
redux.require('redux')

const index = makeb('./src/js/index.js')
index.external('domready')
index.external('immutable')
index.external('moment')
index.external('react')
index.external('react-dom')
index.external('react-redux')
index.external('redux')

const react = makeb('./src/js/react.js')
react.require('react')
react.require('react-dom')

function bundle (file, b) {
  return b.bundle().on('error', error)
  .pipe(source(file))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/'))
  .pipe(livereload())
}

gulp.task('js:common', () => bundle('common.js', common))
gulp.task('js:index', () => bundle('index.js', index))
gulp.task('js:react', () => bundle('react.js', react))
gulp.task('js:redux', () => bundle('redux.js', redux))

watch(() => gulp.watch(['./src/js/common.js'], ['js:common']))
watch(() => gulp.watch(['./src/js/**/*.js'], ['js:index']))
watch(() => gulp.watch(['./src/js/react.js'], ['js:react']))
watch(() => gulp.watch(['./src/js/redux.js'], ['js:redux']))
gulp.task('js', ['js:common', 'js:index', 'js:react', 'js:redux'])
