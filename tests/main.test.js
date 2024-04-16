/* eslint no-console: "off" */

import test from 'ava';
import facetxt from '../src/index.js';

const TOTAL_FACES = 544;
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

let arrayOfFaces = null;
let face = null;
let faceObj = null;
let prettyStringFaces = null;

test.before(() => {
    arrayOfFaces = facetxt.all;
    face = facetxt.rand;
    faceObj = facetxt.randDesc;
    prettyStringFaces = facetxt.list;
});

test('should retrieve an array of faces', (t) => {
    t.true(arrayOfFaces.length > 0, 'the array of faces is empty');
    t.is(arrayOfFaces.length, TOTAL_FACES);
});

test('should retrieve a random face', (t) => {
    console.log(face);

    t.true(arrayOfFaces.indexOf(face) >= 0, 'face not found at faces array');
});

test('should retrieve a random face with the name or descrition', (t) => {
    console.dir(faceObj);

    t.true(Object.prototype.hasOwnProperty.call(faceObj, 'face'));
    t.true(Object.prototype.hasOwnProperty.call(faceObj, 'description'));
    t.true(prettyStringFaces.indexOf(faceObj.description) >= 0);
    t.true(arrayOfFaces.indexOf(faceObj.face) >= 0, 'face not found at faces array');
});

test('should retrieve string with all faces fo pretty print', (t) => {
    console.log(prettyStringFaces);

    t.assert(typeof prettyStringFaces === 'string');
});

test('should retrieve a random face by name', (t) => {
    const faceLike = facetxt.like('embarrassed');

    t.true(WHOLE_EMBARRASSED_FACES.indexOf(faceLike) >= 0);
});

test('should not retrieve a random face by name because does not exists', (t) => {
    const faceLike = facetxt.like('foz');

    t.is(typeof faceLike, 'undefined');
});

test('should retrieve the array related with name', (t) => {
    const faces = facetxt.likes('embarrassed');

    t.like(faces, WHOLE_EMBARRASSED_FACES);
});

test('should not retrieve the array related with name, because does not exists', (t) => {
    const faces = facetxt.likes('foz');

    t.true(faces.length === 0);
});
