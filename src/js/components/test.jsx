/**
 * @jsx React.DOM
 */

var React = require('react');
var socket = require('socket.io-client')('http://localhost');
var state = require('../state').state;
var cuid = require('cuid');

var Test = React.createClass({
    componentDidMount: function() {
      socket.on('load-btns', function(msg){
        //state.msg.set(msg);
        console.log(msg);
      });
    },
    render: function() {
      var state = this.props.state;
      console.log(state);
      var self = this;
      var btns = state.msg.map(function(btn) {
        return <div><button className="btn btn-primary" value={btn} onClick={self.gulpTask} >{btn}</button></div>;
      });
      return (
        <div className="container">
          <input type="text" className="form-control" value={state.value} onChange={this.handleInput} />
          <li> {state.msg}</li>
          {btns}
        </div>
      );
    },
    handleInput: function(e) {
      var val = e.target.value;
      socket.emit('chat-msg', val);
      state.value.set(val);
    },
    gulpTask: function(e) {
      var task = e.target.value;
      socket.emit('gulp-task', task);
    }
  });
//console.log('fuck');
module.exports = Test;