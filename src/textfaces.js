const arrayOfFaces = [];
let textFaces = '';

// Gives a "random" number between 0 and length (inclusive)
function random(length) {
    return Math.floor(Math.random() * length);
}

function printIt(element, level) {
    textFaces = `${textFaces}${'\t'.repeat(level)}${element}\n`;
}

function prettyColletAllFaces(obj, stack) {
    const level = stack.split(',').length - 1;

    if (Array.isArray(obj)) {
        printIt(obj.join(' '), level);
    }

    for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            if (!Array.isArray(obj)) {
                printIt(`${property}:`, level);
            }

            if (typeof obj[property] === 'object') {
                prettyColletAllFaces(obj[property], `${stack },${ property}`);
            }
        }
    }
}

export function prettyPrintFaces(obj) {
    prettyColletAllFaces(obj, '');
    return textFaces;
}

function collectFacesToArray(obj) {
    if (Array.isArray(obj)) {
        arrayOfFaces.push(obj);
    }

    for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            if (typeof obj[property] === 'object') {
                collectFacesToArray(obj[property]);
            }
        }
    }
}

export function getArrayOfFaces(facesSource) {
    collectFacesToArray(facesSource, arrayOfFaces);
    return arrayOfFaces.flat(1);
}

export function getRandomFace(object) {
    if (!Array.isArray(object)) {
        // Count number of properties of object and get a random
        // send it again here
        return getRandomFace(object[Object.keys(object)[random(Object.keys(object).length)]]);
    } else if (typeof object === 'object') {
        if (object.length === 1) {
            return object[0];
        }
        // a random face from faces array
        return object[random(object.length)];
    }
}

