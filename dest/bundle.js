(function () {
    var require = /*! bundle compiled on Sun Feb 14 2016 23:46:48 GMT+0100 (Paris, Madrid) */
(function () {
	var require = window.require = (function () {
		var ROOT = '/';
		var REQUIRE_CACHE = Object.create(null);
		var REQUIRE_MAP = Object.create(null);
        var REQUIRE_SOURCE = Object.create(null);
		var hasOwn = Object.prototype.hasOwnProperty;
		var RE_URL = /^\w+:\/\/.+/;
		function require(url) {
			var abs = _GenerateFQN_(url, this.__dirname);
            var dir = abs.split(ROOT).slice(0, -1).join(ROOT) + ROOT;
			if (abs in REQUIRE_CACHE) {
				return REQUIRE_CACHE[abs].exports;
			}
			var MODULE_CODE = REQUIRE_SOURCE[abs];
			var MODULE_EXECUTABLE = REQUIRE_SOURCE[abs];
			var MODULE__module = {
				__dirname: dir,
				exports: {}
			};
			REQUIRE_CACHE[abs] = MODULE__module;
			MODULE_EXECUTABLE.call(MODULE__module.exports, MODULE__module, MODULE__module.exports, dir, 
require.bind(MODULE__module));
			return MODULE__module.exports;
		}
		function _GenerateFQN_(url, __dirname) {
		    if (url.match(RE_URL)) {
                return url;
            } else if (url.startsWith(ROOT)) {
                return jn(url);
            } else if (url.startsWith('./') || url.startsWith('../')) {
                return jn(__dirname, url);
            } else return _GenerateFQN_(REQUIRE_MAP[url], ROOT);
        }
        function jn() {
            return '.' + (new URL([].join.call(arguments, ROOT).replace(/\/+/g, ROOT), 'http://a.b/')).pathname;
        }
        var globalRequire = require.bind({__dirname: ROOT});
		globalRequire.register = function (module, compiled) {
			REQUIRE_SOURCE[module] = compiled;
		};
        globalRequire.map = function (a, b) {
            REQUIRE_MAP[a] = b;
        };
		return globalRequire;
	})();
	require.register("./src\bar.js", function (module, exports, __dirname, require) {
		var {random, floor} = Math;

console.log('bar');


module.exports = function randomWord(){
	return 'bar'+floor(50*random())
};
	});
	require.register("./src\foo.js", function (module, exports, __dirname, require) {
		var randBar = require('./bar.js');


module.exports = function(a){
	return a + ' ___ ' + randBar();
}
	});
	require.register("./src\index.js", function (module, exports, __dirname, require) {
		var foo = require('./foo.js');

console.log(foo());
	});
    
	require('./src/index.js');

})();
;
; })()