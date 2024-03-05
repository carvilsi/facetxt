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

printAllFaces(textFaces, '');
