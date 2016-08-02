import { dev, watch } from './util'
import cssimport from 'postcss-sassy-import'
import cssnano from 'cssnano'
import cssnext from 'postcss-cssnext'
import gulp from 'gulp'
import livereload from 'gulp-livereload'
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'

function processors () {
  return [
    cssimport({
      formats: ['%', '%.css', '_%.css', '%/index.css']
    }),
    cssnext({
      browsers: [
        'last 2 versions',
        'not safari < 10',
        'not ie < 12'
      ]
    }),
    (!dev) && cssnano
  ].filter((p) => !!p)
}

const src = [
  './src/css/!(_*).css',
  './node_modules/normalize.css/normalize.css'
]

gulp.task('css', () => {
  return gulp.src(src)
  .pipe(sourcemaps.init())
  .pipe(postcss(processors()))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/'))
  .pipe(livereload())
})

watch(() => gulp.watch(src, ['css']))
