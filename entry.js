// require('!style!css!./style.css');
// require('!style!css!sass!./style.sass');

// es5
// require('./style.sass');
// var hello = require('./hello');
// var world = require('./world');
//
// document.write(hello + ' ' + world + '!' );


// es6
import './style.sass';
import hello from './hello';
import world from './world';

document.write( `${hello} ${world} !` );
