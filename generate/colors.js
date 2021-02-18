/**
 * this generates the utility classes for Utilcss
 * 
 * you can validate it here: https://jigsaw.w3.org/css-validator/#validate_by_input
 * 
 * to generate this, you need to run it through node, `node generate/utilities.js`
 */

// margin,padding
var red = '255,0,0'
var redHex = 'ff0000'

var blue = '0,0,255'
var blueHex = '0000ff'

var green = '0,255,0'
var greenHex = '00ff00'

var gray = '255,255,255'
var grayHex = 'ffffff'

var yellow = '255,255,0'
var yellowHex = 'ffff00'

var purple = '255,0,255'
var purpleHex = 'ff00ff'

var orange = '255,165,0'
var orangeHex = 'ffa500'

var colorSteps = 50

var outputCss = '.white{color:#ffffff}.black{color:#000000}.bg-white{background-color:#ffffff}.bg-black{background-color:#000000}'

const fs = require("fs");
const path = require("path");
const tinycolor = require("tinycolor2");

function generate() {
    // generate margin steps
    for (i = 0; i < colorSteps; i++) {
        outputCss = outputCss + `.red-${i*25}{color:${tinycolor(redHex).darken(i)}}`
        outputCss = outputCss + `.blue-${i*25}{color:${tinycolor(blueHex).darken(i)}}`
        outputCss = outputCss + `.green-${i*25}{color:${tinycolor(greenHex).darken(i)}}`
        outputCss = outputCss + `.gray-${i*25}{color:${tinycolor(grayHex).darken(i*2)}}`
        outputCss = outputCss + `.yellow-${i*25}{color:${tinycolor(yellowHex).darken(i)}}`
        outputCss = outputCss + `.purple-${i*25}{color:${tinycolor(purpleHex).darken(i)}}`
        outputCss = outputCss + `.orange-${i * 25}{color:${tinycolor(orangeHex).darken(i)}}`

        outputCss = outputCss + `.b-red-${i*25}{border-color:${tinycolor(redHex).darken(i)}}`
        outputCss = outputCss + `.b-blue-${i*25}{border-color:${tinycolor(blueHex).darken(i)}}`
        outputCss = outputCss + `.b-green-${i*25}{border-color:${tinycolor(greenHex).darken(i)}}`
        outputCss = outputCss + `.b-gray-${i*25}{border-color:${tinycolor(grayHex).darken(i*2)}}`
        outputCss = outputCss + `.b-yellow-${i*25}{border-color:${tinycolor(yellowHex).darken(i)}}`
        outputCss = outputCss + `.b-purple-${i*25}{border-color:${tinycolor(purpleHex).darken(i)}}`
        outputCss = outputCss + `.b-orange-${i * 25}{border-color:${tinycolor(orangeHex).darken(i)}}`

        outputCss = outputCss + `.bg-red-${i*25}{background-color:${tinycolor(redHex).darken(i)}}`
        outputCss = outputCss + `.bg-blue-${i*25}{background-color:${tinycolor(blueHex).darken(i)}}`
        outputCss = outputCss + `.bg-green-${i*25}{background-color:${tinycolor(greenHex).darken(i)}}`
        outputCss = outputCss + `.bg-gray-${i*25}{background-color:${tinycolor(grayHex).darken(i*2)}}`
        outputCss = outputCss + `.bg-yellow-${i*25}{background-color:${tinycolor(yellowHex).darken(i)}}`
        outputCss = outputCss + `.bg-purple-${i*25}{background-color:${tinycolor(purpleHex).darken(i)}}`
        outputCss = outputCss + `.bg-orange-${i*25}{background-color:${tinycolor(orangeHex).darken(i)}}`
    }

    fs.writeFile(path.join(__dirname, `../dist`, `colors.css`), outputCss, function (err) {
        if (err) return console.log(err);
        console.log('Successfully generated colors.css');
    });
}

generate()