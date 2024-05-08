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

function cleanRepeatedFaces(obj) {
    for (const property in obj) {
        if (Object.hasOwn(reducedFaces, property)) {
            reducedFaces[property] = reducedFaces[property]
                .concat(obj[property]);
            delete obj[property];
        }
    }
    return obj;
}

function reduceFacesObject(obj) {
    for (const property in obj) {
        if (!Array.isArray(obj) && Array.isArray(obj[property])) {
            const cleanedObj = cleanRepeatedFaces(obj);
            reducedFaces = { ...reducedFaces, ...cleanedObj };
            break;
        }
        if (typeof obj[property] === 'object') {
            reduceFacesObject(obj[property]);
        }
    }
}

function collectFaceByName(name) {
    const arrayOfFacesName = [];
    for (const property in reducedFaces) {
        const regexp = new RegExp(name, 'g');
        if (property.match(regexp)?.length) {
            arrayOfFacesName.push(reducedFaces[property]);
        }
    }
    return arrayOfFacesName.flat(1);
}

function getRandomFace(description = false) {
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
        if (!textFaces.length) {
            prettyColletAllFaces(faces, '');
        }
        return textFaces;
    },
    get all() {
        if (!arrayOfFaces.length) {
            collectFacesToArray(faces);
        }
        return arrayOfFaces.flat(1);
    },
    get rand() {
        return getRandomFace();
    },
    get randDesc() {
        return getRandomFace(true);
    },
    like(name) {
        const arr = collectFaceByName(name);
        return arr[randomInt(arr.length)];
    },
    likes(name) {
        return collectFaceByName(name);
    }
};

// get the reduced object with faces for random and like functions
reduceFacesObject(faces);

export default facetxt;
