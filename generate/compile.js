/**
 * this compiles the Util.css framework
 */
const fs = require("fs");
const path = require("path");

// all css files in dist folder except the import file. dont put .css either
var cssFiles = ['utilities', 'colors', 'other', 'flexbox', 'standard']

var outputCss = ''

function generate() {
    // generate compiled css
    for (i = 0; i < cssFiles.length; i++) {
        outputCss = outputCss + fs.readFileSync(path.join(__dirname, `..`, `dist/${cssFiles[i]}.css`));
    }

    fs.writeFile(path.join(__dirname, `..`, `util.css`), outputCss, function (err) {
        if (err) return console.log(err);
        console.log('Successfully compiled util.css');
    });
}

generate()