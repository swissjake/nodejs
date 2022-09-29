const fs = require("fs");

//reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toLocaleString());
// });

//writing files
fs.writeFile("./docs/blog1.txt", "Hello my friend", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("file was written");
});

//what if the file doesn't exist, it will create a new file

fs.writeFile("./docs/blog2.txt", "Hello my friend", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("file was written");
});

//directories

//deleting files
