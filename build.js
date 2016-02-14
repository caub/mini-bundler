

var fs = require('fs');
var path = require('path');
var createBundle = require('requirify');

var dest = path.join(__dirname, 'dest', 'bundle.js');

var modules = fs.readdirSync('./src').map(x=>'./src/'+x);
console.log(modules);

var code = `(function () {
    var require = ${createBundle(modules, {
        entry: './src/index.js',
        map: {},
    })};
; })()`;

fs.writeFile(dest, code, function() {
    console.log('Build finished');
});