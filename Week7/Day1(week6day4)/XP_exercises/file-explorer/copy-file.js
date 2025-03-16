const fs = require("fs");

// In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

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