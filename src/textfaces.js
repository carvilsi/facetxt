const textFaces = require('./textfaces.json');
const log = console.log;

function printIt(el, level) {
    log(`${"\t".repeat(level)}${el}`);
}

function printAllFaces(obj, stack) {
   const level = stack.split(',').length - 1;

   if (Array.isArray(obj)) printIt(obj.join(' '), level);

   for (var property in obj) {
       if(!Array.isArray(obj)) { 
           printIt(`${property}:`, level);
       } 

       if (obj.hasOwnProperty(property)) {
           if (typeof obj[property] === "object") {
               printAllFaces(obj[property], stack + ',' + property);
           }
       }
   }
}

function printRandomFace(obj) {
    if (!Array.isArray(obj)) {
        // count number of properties of object and get a random
        // send it again here
        printRandomFace(obj[Object.keys(obj)[rand(Object.keys(obj).length)]]);
    } else if (typeof obj === 'object') {
        if (obj.length === 1) {
            log(obj[0]);
        } else {
            // print a random face from faces array
            log(obj[rand(obj.length)]);
        }
    } else {
        throw new Error('something is wrong with the face\'s json file');
    }
}

// gives a "random" number between 0 and length (inclusive)
function rand(length) {
    return Math.floor(Math.random() *  length);
}

printAllFaces(textFaces, '');
printRandomFace(textFaces);
