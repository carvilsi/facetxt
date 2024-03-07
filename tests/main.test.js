/* eslint no-console: "off" */

import test from 'ava';
import { getArrayOfFaces, getRandomFace, prettyPrintFaces } from '../src/textfaces.js';
import { canonical } from '../src/faces.js';

test('should retrieve array of faces and a random face', (t) => {
    const arrayOfFaces = getArrayOfFaces(canonical);

    t.true(arrayOfFaces.length > 0, 'the array of faces is empty');

    const face = getRandomFace(canonical);

    t.true(arrayOfFaces.indexOf(face) >= 0, 'face not found at faces array');
});

test('should retrieve string with all faces fo pretty print', (t) => {
    const prettyString = prettyPrintFaces(canonical);
    console.log(prettyString);

    t.assert(typeof prettyString === 'string');
});
