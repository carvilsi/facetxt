/* eslint no-console: "off" */

import test from 'ava';
import txtface from '../src/index.js';

test('should retrieve an array of faces and a random face', (t) => {
    const arrayOfFaces = txtface.array; 

    t.true(arrayOfFaces.length > 0, 'the array of faces is empty');

    const face = txtface.rand;

    t.true(arrayOfFaces.indexOf(face) >= 0, 'face not found at faces array');
});

test('should retrieve string with all faces fo pretty print', (t) => {
    const prettyString = txtface.all;
    console.log(prettyString);

    t.assert(typeof prettyString === 'string');
});

test('should retrieve a random face by name', (t) => {
    const face = txtface.like('embarrassed');

    t.true([ ':$', '://)', '://3' ].indexOf(face) >= 0);
});

test('should not retrieve a random face by name because does not exists', (t) => {
    const face = txtface.like('foz');

    t.is(typeof face, 'undefined');
});
