#! /usr/bin/env node

import facetxt from './../src/index.js';

/* eslint no-console: "off" */
(() => {
    if (process.argv.length === 3) {
        switch (process.argv[2]) {
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
            console.log(`Unknown command: ${process.argv[2]}`);
        }
    }
    if (process.argv.length === 4) {
        const nameLike = process.argv[3];
        switch (process.argv[2]) {
        case 'like': {
            const faceLike = facetxt.like(nameLike);
            if (typeof faceLike === 'undefined') {
                console.log(`Could not find a face like: ${nameLike}`);
            } else {
                console.log(faceLike);
            }
            break;
        }
        case 'likes': {
            const facesLike = facetxt.likes(nameLike);
            if (!facesLike.length) {
                console.log(`Could not find faces like: ${nameLike}`);
            } else {
                console.log(facesLike);
            }
            break;
        }
        default:
            console.log(`Unknown command: ${process.argv[2]}`);
        }
    }
})();
