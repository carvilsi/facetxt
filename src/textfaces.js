const textFaces = require('./textfaces.json');

for (let area in textFaces) {
    console.log(`${area}:`);
    for (let type in textFaces[area]) {
        console.log(`\t${type} (${textFaces[area][type].length})`);
        for (let i = 0; i < textFaces[area][type].length; i++) {
            console.log(`\t\t${textFaces[area][type][i]}`);
        }
    }
}
