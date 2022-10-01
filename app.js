const express = require("express");

//express app

const app = express();
app.set("view engine", "ejs");

//listen for request
app.listen(3001);

app.get("/", (req, res) => {
  //   res.send("<p> home page</p>");
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //   res.send("<p> home page</p>");
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create a new blog" });
});

//404

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
