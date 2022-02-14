const { parallel } = require('gulp');
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));



function compilePug(){
  return gulp.src('./src/*.pug')
    .pipe(
      pug({})
    )
    .pipe(gulp.dest('./build'));
}

function compileSass(){
  return gulp.src('./src/sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build'));
}

function moveImages(){
  return gulp.src('./src/images/*')
    .pipe(gulp.dest('./build/images'))
}

function moveScript(){
  return gulp.src('./src/*.js')
    .pipe(gulp.dest('./build/js'))
}

exports.default = parallel(compilePug , compileSass , moveImages , moveScript)
