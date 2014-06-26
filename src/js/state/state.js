var ObservStruct = require("observ-struct");
var Observ = require("observ");
var ObservArray = require('observ-array');
var cOption = require('./cOption');

var state = ObservStruct({
    value: Observ(''),
    msg: Observ(['hello']),
    options: ObservArray([
      cOption('hello'),
      cOption('world')
    ])
});

module.exports = state;