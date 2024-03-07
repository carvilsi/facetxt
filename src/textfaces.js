//import { canonical } from './faces.js';
import { lol } from './lol.js';

const log = console.log;

function printIt(element, level) {
	log(`${'\t'.repeat(level)}${element}`);
}

function printAllFaces(object, stack) {
	const level = stack.split(',').length - 1;

	if (Array.isArray(object)) {
		printIt(object.join(' '), level);
	}

	for (const property in object) {
		if (!Array.isArray(object)) {
			printIt(`${property}:`, level);
		}

		if (object.hasOwnProperty(property) && typeof object[property] === 'object') {
			printAllFaces(object[property], stack + ',' + property);
		}
	}
}

function printRandomFace(object) {
	if (!Array.isArray(object)) {
		// Count number of properties of object and get a random
		// send it again here
		printRandomFace(object[Object.keys(object)[random(Object.keys(object).length)]]);
	} else if (typeof object === 'object') {
		if (object.length === 1) {
			log(object[0]);
		} else {
			// Print a random face from faces array
			log(object[random(object.length)]);
		}
	} else {
		throw new TypeError('something is wrong with the face\'s json file');
	}
}

// Gives a "random" number between 0 and length (inclusive)
function random(length) {
	return Math.floor(Math.random() * length);
}

printAllFaces(lol, '');
//printRandomFace(canonical);
//
console.dir(lol);
