 /**
   * @jsx React.DOM
   */

var $script = require('scriptjs');
var window = require('global/window');
var document = require('global/document');

$script('build/js/react.js', function() {
  var React = require('react');
  var state = require('./state').state;
  state(function(current) {
    View.setProps({state: current});
  });
  var components = require('./components');
  var Test = components.test;
  var View = React.renderComponent(
    <Test state={state()} />,
    document.getElementById('view')
  );
  
  window.React = React;
});
