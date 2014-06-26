var Observ = require('observ');
var ObservStruct = require('observ-struct');
//var cuid = require('cuid');

module.exports = cOption;

function cOption(title) {
  return ObservStruct({
    //id: cuid(),
    title: Observ(title || ""),
    selected: Observ(false)
  });
}