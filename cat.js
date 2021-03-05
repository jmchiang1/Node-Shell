const fs = require('fs');
//import { readFile } from 'fs';

fs.readFile('./bash.js', (err, data) => {
    if (err) throw err;
    console.log(data);
  });



module.exports = function(fileName) {
    fs.readFile(fileName);
}