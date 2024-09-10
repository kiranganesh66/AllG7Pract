let express = require("express");

let bookController = require("../controllers/book-controller");
let bookRt = express.Router();

bookRt
  .route("/")
  .get(bookController.getAllBooks)
  .post(bookController.addNewBook);

bookRt
  .route("/:id")
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

module.exports = bookRt;
