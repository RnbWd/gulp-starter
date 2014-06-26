var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bundler = require('./bundler');

module.exports =  {
  bootstrap: function() {
    gulp.src('./node_modules/bootstrap-sass/vendor/assets/fonts/**')
        .pipe($.changed('./public/build/css'))
        .pipe(gulp.dest('./public/build/css'));
  },

  fontAwesome: function() {
      gulp.src('./node_modules/font-awesome/fonts/**')
          .pipe($.changed('./public/build/fonts'))
          .pipe(gulp.dest('./public/build/fonts'));
    },

  img: function() {
      gulp.src('./src/img/**')
        .pipe($.changed('./public/build/img'))
        .pipe($.imagemin())
        .pipe(gulp.dest('./public/build/img'));
    },

  react: function() {
      return bundler('react').pipe(gulp.dest('./public/build/js'));
    }
};

