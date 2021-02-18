/**
 * this generates the utility classes for Utilcss
 * 
 * you can validate it here: https://jigsaw.w3.org/css-validator/#validate_by_input
 * 
 * to generate this, you need to run it through node, `node generate/utilities.js`
 */

// margin,padding
var marginSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60, 64, 70, 75, 80, 85, 90, 95, 100]
var paddingSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60, 64, 70, 75, 80, 85, 90, 95, 100]

// width,height
var widthSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60, 64, 70, 75, 80, 85, 90, 95, 100]
var heightSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60, 64, 70, 75, 80, 85, 90, 95, 100]

// right,left,bottom,top
var rightSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60, 64, 70, 75, 80, 85, 90, 95, 100]
var leftSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60, 64, 70, 75, 80, 85, 90, 95, 100]
var bottomSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60, 64, 70, 75, 80, 85, 90, 95, 100]
var topSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60, 64, 70, 75, 80, 85, 90, 95, 100]

// borders
var borderRadiusSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
var borderWidthSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 34, 36, 38, 40, 44, 48, 52, 56, 60]

var step = 0.25 // increment in rem
var pixelStep = 1 // increment in pixels

var outputCss = ''

const fs = require("fs");
const path = require("path");

function generate() {
    // generate margin steps
    for (i = 0; i < marginSteps.length; i++) {
        outputCss = outputCss + `.m-${marginSteps[i]}{margin:${marginSteps[i] * step}rem}`
        outputCss = outputCss + `.mx-${marginSteps[i]}{margin-left:${marginSteps[i] * step}rem;margin-right:${marginSteps[i] * step}rem}`
        outputCss = outputCss + `.my-${marginSteps[i]}{margin-top:${marginSteps[i] * step}rem;margin-bottom:${marginSteps[i] * step}rem}`

        outputCss = outputCss + `.mr-${paddingSteps[i]}{margin-right:${paddingSteps[i] * step}rem}`
        outputCss = outputCss + `.ml-${paddingSteps[i]}{margin-left:${paddingSteps[i] * step}rem}`
        outputCss = outputCss + `.mb-${paddingSteps[i]}{margin-bottom:${paddingSteps[i] * step}rem}`
        outputCss = outputCss + `.mt-${paddingSteps[i]}{margin-top:${paddingSteps[i] * step}rem}`
    }

    // generate padding steps
    for (i = 0; i < paddingSteps.length; i++) {
        outputCss = outputCss + `.p-${paddingSteps[i]}{padding:${paddingSteps[i] * step}rem}`
        outputCss = outputCss + `.px-${paddingSteps[i]}{padding-left:${paddingSteps[i] * step}rem;padding-right:${paddingSteps[i] * step}rem}`
        outputCss = outputCss + `.py-${paddingSteps[i]}{padding-top:${paddingSteps[i] * step}rem;padding-bottom:${paddingSteps[i] * step}rem}`

        outputCss = outputCss + `.pr-${paddingSteps[i]}{padding-right:${paddingSteps[i] * step}rem}`
        outputCss = outputCss + `.pl-${paddingSteps[i]}{padding-left:${paddingSteps[i] * step}rem}`
        outputCss = outputCss + `.pb-${paddingSteps[i]}{padding-bottom:${paddingSteps[i] * step}rem}`
        outputCss = outputCss + `.pt-${paddingSteps[i]}{padding-top:${paddingSteps[i] * step}rem}`
    }

    // generate width steps
    for (i = 0; i < widthSteps.length; i++) {
        outputCss = outputCss + `.width-${widthSteps[i]}{width:${widthSteps[i] * step}rem}`
    }

    // generate height steps
    for (i = 0; i < heightSteps.length; i++) {
        outputCss = outputCss + `.height-${heightSteps[i]}{height:${heightSteps[i] * step}rem}`
    }

    // generate right steps
    for (i = 0; i < rightSteps.length; i++) {
        outputCss = outputCss + `.right-${rightSteps[i]}{right:${rightSteps[i] * step}rem}`
    }

    // generate left steps
    for (i = 0; i < leftSteps.length; i++) {
        outputCss = outputCss + `.left-${leftSteps[i]}{left:${leftSteps[i] * step}rem}`
    }

    // generate bottom steps
    for (i = 0; i < bottomSteps.length; i++) {
        outputCss = outputCss + `.bottom-${bottomSteps[i]}{bottom:${bottomSteps[i] * step}rem}`
    }

    // generate top steps
    for (i = 0; i < topSteps.length; i++) {
        outputCss = outputCss + `.top-${topSteps[i]}{top:${topSteps[i] * step}rem}`
    }

    // generate border radius steps
    for (i = 0; i < borderRadiusSteps.length; i++) {
        outputCss = outputCss + `.border-${borderRadiusSteps[i]}px{border-radius:${borderRadiusSteps[i] * pixelStep}px}`

        outputCss = outputCss + `.btl-${borderRadiusSteps[i]}px{border-top-left-radius:${borderRadiusSteps[i] * pixelStep}px}`
        outputCss = outputCss + `.btr-${borderRadiusSteps[i]}px{border-top-right-radius:${borderRadiusSteps[i] * pixelStep}px}`
        outputCss = outputCss + `.bbl-${borderRadiusSteps[i]}px{border-bottom-left-radius:${borderRadiusSteps[i] * pixelStep}px}`
        outputCss = outputCss + `.bbr-${borderRadiusSteps[i]}px{border-bottom-right-radius:${borderRadiusSteps[i] * pixelStep}px}`

        outputCss = outputCss + `.bt-radius-${borderRadiusSteps[i]}px{border-top-left-radius:${borderRadiusSteps[i] * pixelStep}px;border-top-right-radius:${borderRadiusSteps[i] * pixelStep}px}`
        outputCss = outputCss + `.br-radius-${borderRadiusSteps[i]}px{border-top-right-radius:${borderRadiusSteps[i] * pixelStep}px;border-bottom-right-radius:${borderRadiusSteps[i] * pixelStep}px}`
        outputCss = outputCss + `.bl-radius-${borderRadiusSteps[i]}px{border-top-left-radius:${borderRadiusSteps[i] * pixelStep}px;border-bottom-left-radius:${borderRadiusSteps[i] * pixelStep}px}`
        outputCss = outputCss + `.bb-radius-${borderRadiusSteps[i]}px{border-bottom-left-radius:${borderRadiusSteps[i] * pixelStep}px;border-bottom-right-radius:${borderRadiusSteps[i] * pixelStep}px}`
    }

    // generate border width steps
    for (i = 0; i < borderWidthSteps.length; i++) {
        outputCss = outputCss + `.b-width-${borderWidthSteps[i]}px{border-width:${borderWidthSteps[i] * pixelStep}px}`
    }

    fs.writeFile(path.join(__dirname, `../dist`, `utilities.css`), outputCss, function (err) {
        if (err) return console.log(err);
        console.log('Successfully generated utilities.css');
    });
}

generate()