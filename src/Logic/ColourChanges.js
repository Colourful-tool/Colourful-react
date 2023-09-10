import tinycolor from 'tinycolor2';

// Copy the hex code to the clipboard
export function copyHex(copyText) {
    // Get the text field
    // copy to clipboard
    navigator.clipboard.writeText(copyText).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

export function updateHex(red, green, blue, alpha) {
    let a = alpha / 100;
    let c = tinycolor(`rgba (${red}, ${green}, ${blue}, ${a})`);
    return "#" + c.toHex8();
}

// Update the sliders according to the hex code
export function convertHexToRGB(hex) {
    return tinycolor(hex).toRgb();
}