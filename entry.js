// require('!style!css!./style.css');
// require('!style!css!sass!./style.sass');
require('./style.sass');
var hello = require('./hello');
var world = require('./world');

document.write(hello + ' ' + world + '!' );
