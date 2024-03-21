#! /usr/bin/env node

import facetxt from './../src/index.js';
import fs from 'node:fs';
import * as url from 'node:url';
import path from 'node:path';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const pckg = JSON.parse(
    fs.readFileSync(path.join(__dirname, './../package.json')));

const usage = `${pckg.name}@${pckg.version} with <3 by char@omg.lol\n` +
    `Commands:\n${
        '\tversion'.padEnd(12) }toutput the version number\n${
        '\thelp'.padEnd(12) }display this text\n\n${
        '\trand'.padEnd(12) }get a random face\n${
        '\trandDesc'.padEnd(12) }get a random face with description\n${
        '\tlist'.padEnd(12) }pretty prints all the faces\n${
        '\tall'.padEnd(12) }get an array with all faces\n${
        '\tlike'.padEnd(12) }get one face by name; if more than one, will` +
    ` be return randomly\n${
        '\tlikes'.padEnd(12) }get an array of faces by name\n`;
const UNKNOWN_COMMAND_FACE = 'shrug';
const NOT_FOUND_FACE = 'sad';
const unknownCommand = 'Unknown command: ' +
    `"${process.argv[2]}"\t${facetxt.like(UNKNOWN_COMMAND_FACE)}` +
    `\n\nUsage:\n${usage}`;
const faceNotFound = 'Could not find a face like: ' +
    `"${process.argv[3]}"\t${facetxt.like(NOT_FOUND_FACE)}`;

/* eslint no-console: "off" */
(() => {
    if (process.argv.length === 3) {
        switch (process.argv[2]) {
        case 'help':
            console.log(usage);
            break;
        case 'version':
            console.log(`${pckg.name}@${pckg.version}`);
            break;
        case 'list':
            console.log(facetxt.list);
            break;
        case 'all':
            console.log(facetxt.all);
            break;
        case 'rand':
            console.log(facetxt.rand);
            break;
        case 'randDesc': {
            const randFace = facetxt.randDesc;
            console.log(`${randFace.face} --${randFace.description}--`);
            break;
        }
        default:
            console.log(unknownCommand);
        }
    }
    if (process.argv.length === 4) {
        switch (process.argv[2]) {
        case 'like': {
            const faceLike = facetxt.like(process.argv[3]);
            if (typeof faceLike === 'undefined') {
                console.log(faceNotFound);
            } else {
                console.log(faceLike);
            }
            break;
        }
        case 'likes': {
            const facesLike = facetxt.likes(process.argv[3]);
            if (!facesLike.length) {
                console.log(faceNotFound);
            } else {
                console.log(facesLike);
            }
            break;
        }
        default:
            console.log(unknownCommand);
        }
    }
})();
