var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var inquirer = require("inquirer");
var _ = require('lodash');
_.str = require('underscore.string');

var questions = [
  {
    type: "input",
    name: "name",
    message: "Filename?"
  }
];

module.exports =  {
  rcc: function(done) {
    inquirer.prompt( questions, function( answers ) {
      var name = answers.name;
      done();
      gulp.src('../.reactComponent.js')
          .pipe($.template({name: _.str.capitalize(name)}))
          .pipe($.rename(name+'.jsx'))
          .pipe($.conflict('./src/js/components'))
          .pipe(gulp.dest('./src/js/components'));
      });

  }
};

