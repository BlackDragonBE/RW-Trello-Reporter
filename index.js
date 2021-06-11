const express = require("express");
const Trello = require("trello");

const app = express();
const port = process.env.PORT || 3000;


var trello = new Trello("", "");
var boardId = "gTwaCQGM";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  res.write('<!DOCTYPE html>');
  res.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
  res.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">');
  res.write('<p>Hi there <b>bold</b> one</p>');
  res.write('<div>Whoop</div>');
  res.write('<a class="button">Button</a>');
  res.write('<a class="button">Button</a>');
  res.end();
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}/`);
});

//Promise
var listPromise = trello.getListsOnBoard(boardId);
listPromise.then((lists) => {
  lists.forEach((list) => {
    console.log(list);
  });
});
