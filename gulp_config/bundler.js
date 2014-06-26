var browserify = require('browserify');
var envify = require('envify/custom');
var source = require('vinyl-source-stream');
var uglify = require('uglifyify');

module.exports = bundler;

var b = browserify();

function bundler(file) {
  b.require(file);
  b.transform(envify({
    NODE_ENV: 'development'
  }));
  b.transform(uglify);
  var bundle = b.bundle();
  return bundle.pipe(source(file+'.js'));
}