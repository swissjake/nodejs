const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //SET HEADER CONTENT TYPE

  res.setHeader("Content-Type", "text/html");
  //   res.write("<p>hello sofiri</p>");
  //   res.write("<p>hello Amgbara</p>");
  //   res.end()

  let path = "./views/";

  //   if (req.url === "/") {
  //     path += "index.html";
  //   } else if (req.url === "/about") {
  //     path += "about.html";
  //   } else {
  //     path += "404.html";
  //   }

  // or

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //   sending html file to webpage
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});

server.listen(3001, "localhost", () => {
  console.log("listening for request on port 3000");
});
