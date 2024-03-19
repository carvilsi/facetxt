import faces from './faces.js';

let arrayOfFaces = [];
let textFaces = '';
let reducedFaces = {};

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
        if (!Array.isArray(obj)) {
            formatIt(`${property.replaceAll('_', ' ')}:`, level);
        }
        if (typeof obj[property] === 'object') {
            prettyColletAllFaces(obj[property], `${stack},${property}`);
        }
    }
}

function collectFacesToArray(obj) {
    if (Array.isArray(obj)) {
        arrayOfFaces.push(obj);
    }
    for (const property in obj) {
        if (typeof obj[property] === 'object') {
            collectFacesToArray(obj[property]);
        }
    }
}

function collectFaceByName(obj, name) {
    for (const property in obj) {
        if (!Array.isArray(obj)) {
            const regexp = new RegExp(name, 'g');
            if (property.match(regexp)?.length) {
                if (Array.isArray(obj[property])) {
                    arrayOfFaces.push(obj[property]);
                }
            }
        }
        if (typeof obj[property] === 'object') {
            collectFaceByName(obj[property], name);
        }
    }
}

function reduceFacesObject(obj) {
    for (const property in obj) {
        if (!Array.isArray(obj) && Array.isArray(obj[property])) {
            reducedFaces = { ...reducedFaces, ...obj };
            break;
        }
        if (typeof obj[property] === 'object') {
            reduceFacesObject(obj[property]);
        }
    }
}

function getRandomFace(description) {
    reduceFacesObject(faces);
    const facesKey = Object.keys(reducedFaces);
    const faceKey = facesKey[randomInt(facesKey.length)];
    const face = randomInt(reducedFaces[faceKey].length);
    if (!description) {
        return reducedFaces[faceKey][face];
    }
    const faceObj = {
        face: reducedFaces[faceKey][face],
        description: faceKey.replaceAll('_', ' '),
    };
    return faceObj;
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
        return getRandomFace();
    },
    get randDesc() {
        return getRandomFace(true);
    },
    like(name) {
        arrayOfFaces = [];
        collectFaceByName(faces, name);
        const arr = arrayOfFaces.flat(1);
        return arr[randomInt(arr.length)];
    },
    likes(name) {
        arrayOfFaces = [];
        collectFaceByName(faces, name);
        return arrayOfFaces.flat(1);
    }
};

export default facetxt;
