var Module = require('module').Module;

var fallback = Module._resolveFilename;

module.exports = require('./dist/pookie.node.js');

Module._resolveFilename = function (name, from) {
  if (name == "pookie") {
    return __filename;
  };
  return fallback.apply(Module, arguments);
};