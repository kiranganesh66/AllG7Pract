let NotFoundException = require("../../utils/not-found");
let { dbconnection } = require("../../connectionMg/connection");

class InMemoryBookRepository {
  constructor() {
    this.dataD = dbconnection("g7", "Books");
  }

  async getAllBooks() {
    let collection = await this.dataD;
    var bookR = await collection.find({}).toArray();
    return bookR;
  }

  async addNewBook(body) {
    let collection = await this.dataD;
    var addBook = await collection.insertOne(body);
    if (!addBook.acknowledged) {
      throw new NotFoundException("New Book Not added ");
    }
    return addBook;
  }

  async deleteBookById(id) {
    let collection = await this.dataD;
    var deleteBook = await collection.deleteOne({ id: id });
    if (deleteBook.deletedCount === 0) {
      throw new NotFoundException("No book is not on given Id");
    }
    return deleteBook;
  }

  async getBookById(id) {
    let collection = await this.dataD;
    var idBook = await collection.findOne({ id });
    if (idBook) {
      return idBook;
    } else {
      throw new NotFoundException("No book is not on there On Id");
    }
  }

  async updateBookById(id, body) {
    let collection = await this.dataD;
    var idBook = await collection.updateOne({ id }, { $set: body });
    if (idBook) {
      return idBook;
    } else {
      throw new NotFoundException("Book is not updated");
    }
  }
}

module.exports = new InMemoryBookRepository();
