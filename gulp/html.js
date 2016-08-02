import { watch } from './util'
import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import livereload from 'gulp-livereload'
import newer from 'gulp-newer'
import pug from 'gulp-pug'

function html (name, file) {
  gulp.task(`html:${name}`, () => gulp.src(file)
    .pipe(newer('./dist/'))
    .pipe(pug())
    .pipe(htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      maxLineLength: 120,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeCDATASectionsFromCDATA: true,
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload())
  )
}

html('index', './src/index.pug')
gulp.task('html', ['html:index'])

watch(() => gulp.watch(['./src/index.pug'], ['html:index']))
