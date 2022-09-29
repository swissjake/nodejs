const fs = require("fs");

//readstream
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt", {
  encoding: "utf8",
});

readStream.on("data", (chunk) => {
  console.log("--------NEW CHUNK---------");
  console.log(chunk);

  writeStream.write("\n NEW CHUNK \n");
  writeStream.write(chunk);
});
