import faces from './faces.js';

let arrayOfFaces = [];
let textFaces = '';

// Gives a "random" number between 0 and length (inclusive)
function randomInt(length) {
    return Math.floor(Math.random() * length);
}

function formatIt(element, level) {
    textFaces = `${textFaces}${'\t'.repeat(level)}${element}\n`;
}

function prettyColletAllFaces(obj, stack) {
    const level = stack.split(',').length - 1;

    if (Array.isArray(obj)) {
        formatIt(obj.join(' '), level);
    }

    for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            if (!Array.isArray(obj)) {
                formatIt(`${property.replaceAll('_', ' ')}:`, level);
            }

            if (typeof obj[property] === 'object') {
                prettyColletAllFaces(obj[property], `${stack},${property}`);
            }
        }
    }
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

function getRandomFace(obj) {
    if (!Array.isArray(obj)) {
        // Count number of properties of obj and get a random
        // send it again here
        return getRandomFace(
            obj[Object.keys(obj)[randomInt(Object.keys(obj).length)]]);
    } else if (typeof obj === 'object') {
        if (obj.length === 1) {
            return obj[0];
        }
        // a random face from faces array
        return obj[randomInt(obj.length)];
    }
}

function collectFaceByName(obj, name) {
    for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            if (!Array.isArray(obj)) {
                const regexp = new RegExp(name, 'g');
                if (property.match(regexp)?.length) {
                    if (Array.isArray(obj[property])) {
                        arrayOfFaces.push(obj[property]);
                    } else {
                        collectFaceByName(obj[property], name);
                    }
                }
            }
            if (typeof obj[property] === 'object') {
                collectFaceByName(obj[property], name);
            }
        }
    }
}

const facetxt = {
    get list() {
        textFaces = '';
        prettyColletAllFaces(faces, '');
        return textFaces;
    },
    get all() {
        arrayOfFaces = [];
        collectFacesToArray(faces);
        return arrayOfFaces.flat(1);
    },
    get rand() {
        return getRandomFace(faces);
    },
    like(name) {
        arrayOfFaces = [];
        collectFaceByName(faces, name);
        const arr = arrayOfFaces.flat(1);
        return arr.length === 1 ? arr[0] : arr[randomInt(arr.length)];
    },
    likes(name) {
        arrayOfFaces = [];
        collectFaceByName(faces, name);
        return arrayOfFaces.flat(1);
    }
};

export default facetxt;
