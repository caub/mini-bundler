

var fs = require('fs');
var createBundle = require('requirify');

var dest = __dirname+'/dest/bundle.js';

var modules = fs.readdirSync('./src').map(x=>'./src/'+x);
console.log(modules); // [ './src/bar.js', './src/foo.js', './src/index.js' ]

var code = `(function () {
    var require = ${createBundle(modules, {
        entry: './src/index.js',
        map: {},
    })};
; })()`;

fs.writeFile(dest, code, function() {
    console.log('Build finished');
});