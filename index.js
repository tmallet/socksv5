var fs = require('fs'),
    path = require('path');

['server', 'client', 'Agents'].forEach(function(f) {
  var exp = require('./lib/' + f),
      keys = Object.keys(exp);
  for (var i = 0, len = keys.length; i < len; ++i)
    exports[keys[i]] = exp[keys[i]];
});

exports.auth = {};

['None', 'UserPassword'].forEach(function(f) {
  exports.auth[f] = require('./lib/auth/' + f);
});
