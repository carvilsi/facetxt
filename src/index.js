import faces from './faces.js';

let arrayOfFaces = [];
let textFaces = '';
let faceWithName = undefined;

// Gives a "random" number between 0 and length (inclusive)
function random(length) {
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
        return getRandomFace(obj[Object.keys(obj)[random(Object.keys(obj).length)]]);
    } else if (typeof obj === 'object') {
        if (obj.length === 1) {
            return obj[0];
        }
        // a random face from faces array
        return obj[random(obj.length)];
    }
}

function collectFaceByName(obj, name) {
    for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            if (!Array.isArray(obj)) {
                const regexp = new RegExp(name, 'g');
                if (property.match(regexp)?.length) {
                    if (Array.isArray(obj[property])) {
                        faceWithName = obj[property].length === 1 ?
                            obj[property][0] :
                            obj[property][random(obj[property].length)];
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

const txtface = {
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
        faceWithName = undefined;
        collectFaceByName(faces, name);
        return faceWithName;
    }
};

export default txtface;