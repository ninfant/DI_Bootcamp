// File Management Using CommonJS Syntax
// Create a file named fileManager.js.
// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.
// Create a file “Hello World.txt” containing the sentence “Hello World !! “
// Create a file “Bye World.txt” containing the sentence “Bye World !! “

const fs = require("fs");

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file "${filePath}":`, err);
      callback(err);
      return;
    }
    callback(null, data);
  });
}

function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error(`Error writing file "${filePath}":`, err);
      callback(err);
      return;
    }
    console.log(`File "${filePath}" written successfully.`);
    callback(null);
  });
}

module.exports = { readFile, writeFile };
