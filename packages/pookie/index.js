var Module = require('module').Module;

var fallback = Module._resolveFileName;

module.exports = require('./dist/pookie.node.js');

Module._resolveFileName = function(name, from) {
    if (name == "pookie") {
        return __filename;
    }
}