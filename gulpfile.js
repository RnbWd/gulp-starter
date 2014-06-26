/* See Gulp_Config File for the Gulp Settings */
var gulp = require('gulp');
var config = require('./gulp_config');

//
//Assets - ./gulp_config/assets.js
//

var assets = config.assets;
gulp.task('img', assets.img);
gulp.task('font-awesome', assets.fontAwesome);
gulp.task('boostrap', assets.bootstrap);
gulp.task('react', assets.react);
gulp.task('assets', ['bootstrap', 'font-awesome', 'img', 'react']);

//
//Indexer - ./gulp_config/indexer.js
//

var indexer = config.indexer;

gulp.task('indexer', function() {
  gulp.src('./src/js/**')
      .pipe(indexer);
});

//
//Build - ./gulp_config/build.js
//

var build = config.build;
gulp.task('react-js', build.reactJs);
gulp.task('html', ['react-js'], build.html);
gulp.task('js', ['react-js'], build.js);
gulp.task('sass', build.sass);
gulp.task('build', ['html', 'sass', 'js', 'watch']);

//
//Watch
//

gulp.task('watch', function() {
  gulp.watch('./src/js/**', ['js', 'html']);
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/scss/style.scss', ['sass']);
});

//
//Server -./gulp_config/server.js
//

var server = config.server;
gulp.task('open', ['default'], server.open);
gulp.task('serve', server.serve);

//
//component -./gulp_config/component
//

var component = config.component;
gulp.task('rcc', component.rcc);

//
//Default
//

gulp.task('default', ['build', 'serve']);

var doge = config.doge;
gulp.task('doge', doge.doge);
