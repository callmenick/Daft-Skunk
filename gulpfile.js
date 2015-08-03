//////////////////////////////////////////////////
// load gulp
//////////////////////////////////////////////////

var gulp = require('gulp');

//////////////////////////////////////////////////
// load other gulp stuffs
//////////////////////////////////////////////////

var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');

//////////////////////////////////////////////////
// paths
//////////////////////////////////////////////////

var filePaths = {
  sass: ['client/sass/**/*.scss'],
  scripts: ['client/js/**/*.js']
};

var dirPaths = {
  css: 'client/dist/css/',
  scripts: 'client/dist/js/'
};

//////////////////////////////////////////////////
// tasks
//////////////////////////////////////////////////

gulp.task('default', ['watch']);

gulp.task('styles', function() {
  gulp.src(filePaths.sass)
    .pipe(sass({
      outputStyle: 'expanded'
    })
    .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(dirPaths.css))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(dirPaths.css));
});

gulp.task('scripts', function() {
  gulp.src(filePaths.scripts)
    .pipe(concat('daftskunk.js'))
    .pipe(gulp.dest(dirPaths.scripts))
    .pipe(uglify().on('error', gutil.log))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(dirPaths.scripts));
});

gulp.task('watch', function() {
  gulp.watch(filePaths.sass, ['styles']);
  gulp.watch(filePaths.scripts, ['scripts']);
});