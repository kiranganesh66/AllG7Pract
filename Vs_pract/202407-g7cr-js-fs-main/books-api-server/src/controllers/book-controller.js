var bookRepository = require("../repositories/in-memory/book-repository");
let BookService = require("../services/book-service");
var service = new BookService(bookRepository);

async function getAllBooks(req, res) {
  var books = await service.getAllBooks();
  res.send(books);
}

async function addNewBook(req, res) {
  var book = await service.addNewBook(req.body);
  try {
    res.send(book);
  } catch (e) {
    res.send("err", e);
  }
}

async function deleteBookById(req, res) {
  try {
    var book = await service.deleteBookById(req.params.id);
    res.send(book);
  } catch (err) {
    res.status(404).send(err.info);
  }
}

async function getBookById(req, res) {
  try {
    var book = await service.getBookById(req.params.id);
    res.send(book);
  } catch (e) {
    res.status(404).send(e.info);
  }
}

async function updateBookById(req, res) {
  try {
    var updatebook = await service.updateBookById(req.params.id, req.body);
    res.send(updatebook);
  } catch (e) {
    res.status(404).send(e.info);
  }
}

module.exports = {
  getAllBooks,
  addNewBook,
  deleteBookById,
  getBookById,
  updateBookById,
};
