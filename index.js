const express = require("express");
const Trello = require("trello");

const app = express();
const port = process.env.PORT || 3000;


var trello = new Trello("fad26c70532bb6c7507c1f9f4a428705", "b2d4b656c85a1bd2c8fff4179bd49a83c5333a8962f03eebd996368f6453d4df");
var boardId = "gTwaCQGM";

app.get("/", (req, res) => {
  res.send("Hello World!");
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
