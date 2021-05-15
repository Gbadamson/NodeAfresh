// Express is a framework in node js that allows us to create our server, it allows us to perform the CRUD operationthorugh using routes
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello universe we are scaling up and higher");
});

app.listen(3200, () => {
  console.log("App is doing wellon on " + 3200);
});
