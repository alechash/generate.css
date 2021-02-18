/**
 * this generates the utility classes for Utilcss
 * 
 * you can validate it here: https://jigsaw.w3.org/css-validator/#validate_by_input
 * 
 * to generate this, you need to run it through node, `node generate/utilities.js`
 */

// margin,padding
var positions = ['relative', 'fixed', 'absolute', 'static', 'sticky']
var display = ['inline', 'block', 'contents', 'flex', 'grid', 'inline-block', 'inline-flex', 'inline-grid', 'inline-table', 'list-item', 'run-in', 'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group', 'table-row-group', 'table-cell', 'table-column', 'table-row', 'none', 'initial', 'inherit']

var outputCss = ''

const fs = require("fs");
const path = require("path");

function generate() {
    // generate poitions
    for (i = 0; i < positions.length; i++) {
        outputCss = outputCss + `.pos-${positions[i]}{position:${positions[i]}}`
    }

    // generate diplay properties
    for (i = 0; i < display.length; i++) {
        outputCss = outputCss + `.dis-${display[i]}{display:${display[i]}}`
    }

    fs.writeFile(path.join(__dirname, `../dist`, `other.css`), outputCss, function (err) {
        if (err) return console.log(err);
        console.log('Successfully generated other.css');
    });
}

generate()