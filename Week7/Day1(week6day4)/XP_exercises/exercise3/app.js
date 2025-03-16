const { readFile, writeFile } = require("../exercise3/fileManager.js");

readFile("../exercise3/HelloWorlsd.txt", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("File content:", data);
});

writeFile("../exercise3/HelloWorld.txt", "New Code, trying!! ", (err) => {
  if (err) {
    console.error("Error writing the file:", err);
    return;
  }
  console.log("the file is written properly.");
});
