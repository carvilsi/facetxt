/* eslint no-console: "off" */

import test from 'ava';
import facetxt from '../src/index.js';

const TOTAL_FACES = 553;
const WHOLE_EMBARRASSED_FACES = [
    ':$', '://)',
    '://3', '(^^ゞ',
    '(^_^;)', '(-_-;)',
    '(~_~;)', '(・.・;)',
    '(・_・;)', '(・・;)',
    '^^;', '^_^;',
    '(#^.^#)', '(^ ^;)',
    '(⁄⁄•⁄ω⁄•⁄⁄)'
];

test('should retrieve an array of faces and a random face', (t) => {
    const arrayOfFaces = facetxt.all;

    t.true(arrayOfFaces.length > 0, 'the array of faces is empty');
    t.is(arrayOfFaces.length, TOTAL_FACES);

    const face = facetxt.rand;

    t.true(arrayOfFaces.indexOf(face) >= 0, 'face not found at faces array');
});

test('should retrieve string with all faces fo pretty print', (t) => {
    const prettyString = facetxt.list;
    console.log(prettyString);

    t.assert(typeof prettyString === 'string');
});

test('should retrieve a random face by name', (t) => {
    const face = facetxt.like('embarrassed');

    t.true(WHOLE_EMBARRASSED_FACES.indexOf(face) >= 0);
});

test('should not retrieve a random face by name because does not exists', (t) => {
    const face = facetxt.like('foz');

    t.is(typeof face, 'undefined');
});

test('should retrieve the array related with name', (t) => {
    const faces = facetxt.likes('embarrassed');

    t.like(faces, WHOLE_EMBARRASSED_FACES);
});

test('should not retrieve the array related with name, because does not exists', (t) => {
    const faces = facetxt.likes('foz');

    t.true(faces.length === 0);
});
