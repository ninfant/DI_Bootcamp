const { readFile, writeFile } = require("../file-explorer/copy-file.js");
const fs = require("fs");
const path = require("path");

// In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

// readFile("../file-explorer/source.txt", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// writeFile(
//   "../file-explorer/destination.txt",
//   "Cool, I am learning !!! ",
//   (err) => {
//     if (err) {
//       console.error("Error writing the file:", err);
//       return;
//     }
//     console.log("the file is written properly.");
//   }
// );

// In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

// Specify the directory you want to read, we use the current directory
const directoryPath = path.join(__dirname, "../file-explorer");

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error("Unable to scan directory: " + err);
  }

  console.log("Files in directory:");
  files.forEach((file) => {
    console.log(file);
  });
});
