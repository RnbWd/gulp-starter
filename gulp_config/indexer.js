var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var fs = require('fs');
var _ = require('lodash');
_.str = require('underscore.string');

var indexer = $.tap(indexTap);

module.exports = indexer;

function indexTap(file) {
  if (_.include(file.path, '.')) return;

    var files = _(fs.readdirSync(file.path));
    var index = files.map(function(file) {
      return _.str.strLeft(file, '.');
    }).compact().pull('index').value();
    
    file.contents = gulp.src('../.index.js')
        .pipe($.template({components: index}))
        .pipe($.rename('index.js'))
        .pipe(gulp.dest(file.path));
}


