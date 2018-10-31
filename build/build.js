'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('build', function () {
  return gulp.src('./bootstrap-extra-utilities.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(gulp.dest('../dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});