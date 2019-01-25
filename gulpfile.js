const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');

gulp.task('css', function (cb) {
  gulp.src('./build/scss/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('./build/css/'));
  cb();
});

gulp.task('build', gulp.series('css'));

gulp.watch('build/scss/**/*.{scss,sass}', gulp.series('build'));
