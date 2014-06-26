var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bourbon = require('node-bourbon').includePaths;
var browserify = require('browserify');
var reactify = require('reactify');
var transform = require('vinyl-transform');
var indexTap = require('./indexer').indexTap;

module.exports  = {
  html:  function() {
    var React = require('react');
    var Test = require('../react_js/cortex').test;
    var state = require('../react_js/state').state;
    var template = React.renderComponentToString(Test({state:state()})); 
    return gulp.src("./src/index.html")
            .pipe($.template({template: template}))
            .pipe(gulp.dest('./public'))
            .pipe($.livereload());
  },
  sass: function() {
    gulp.src('./src/scss/*.scss')
        .pipe($.sass({
          includePaths: [bourbon, ['./node_modules/bootstrap-sass/vendor/assets/stylesheets'], ['./node_modules/font-awesome/scss/']]
        }))
        .on('error', $.util.log)
        .pipe(gulp.dest('./public/build/css'))
        .pipe($.livereload());
  },
  js: function() {
    return gulp.src('./react_js/app.js', {read: false})
        .pipe($.tap(function(file) {
          var b = browserify(file.path).external('react');
          file.contents = b.bundle();
        }))
        .pipe(gulp.dest('./public/build/js'))
        .pipe($.livereload());
  },
  reactJs: function() {
    return gulp.src('./src/js/**')
        .pipe(transform(reactify))
        .pipe($.ext.replace('js'))
        .pipe(gulp.dest('./react_js'));
  }
};


