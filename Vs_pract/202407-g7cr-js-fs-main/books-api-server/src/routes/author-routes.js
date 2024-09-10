let express = require("express");
let authorController = require("../controllers/author-controller");

var authors = express.Router();

authors
  .route("/")
  .get(authorController.getAllAuthors)
  .post(authorController.addNewAuthor);

authors
  .route("/:authorId")
  .get(authorController.getAuthorById)
  .put(authorController.upateAuthorById)
  .delete(authorController.delteAuthor);

authors.route("/:authorId/books")
.get(authorController.getAllBooksbyauthor)


module.exports = authors;
