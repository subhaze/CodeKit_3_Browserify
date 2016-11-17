/*

# This should work even if users don't have
# node installed, or maybe older/newer versions
node=/Applications/CodeKit.app/Contents/Resources/engines/node/node
$node browserify.js > js/bundle.js
echo 'Built js/bundle.js'

*/

var browserify = require('browserify');
browserify('./js/main.js')
	.transform("babelify", {presets: ["es2015"]})
	.bundle()
	.pipe(process.stdout);