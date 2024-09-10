let NotFoundException = require("../../utils/not-found");
let { dbconnection } = require("../../connectionMg/connection");

// var authors = [
//   {
//     id: "vivek-dutta-mishra",
//     name: "Vivek Dutta Mishra",
//     biography: "Author of the Lost Epic Series",
//   },
//   {
//     id: "dinkar",
//     name: "Ramdhari Singh Dinkar",
//     biography: "National Poet of India",
//   },
// ];

class InMemoryAuthorRepository {
  constructor() {
    this.dataBase = dbconnection("g7", "authors");
  }

  async getAllAuthors() {
    let collection = await this.dataBase;
    var authors = await collection.find({}).toArray();
    return authors;
  }

  async getAuthorById(id) {
    let collection = await this.dataBase;
    var author = await collection.findOne({ id });
    if (author) return author;
    else throw new NotFoundException("Author Not Found", { id });
  }

  async addNewAuthor(body) {
    let collection = await this.dataBase;
    var author = await collection.insertOne(body);
    if (author.acknowledged) {
      return "User Added Succesfully";
    } else throw new NotFoundException("Author Not Added", { id });
  }
  //working ****

  async upateAuthorById(id, body) {
    let collection = await this.dataBase;
    let author = await collection.updateOne({ id: id }, { $set: body });
    if (author.modifiedCount === 0) {
      throw new NotFoundException("Author Not Found", { id });
    } else return author;
  }

  async delteAuthor(id) {
    let collection = await this.dataBase;
    let deleteauthor = await collection.deleteOne({ id });
    if (deleteauthor.deletedCount === 0) {
      throw new NotFoundException("Author Not Found", { id });
    }
    return deleteauthor;
  }

  async getAllBooksbyauthor(auid) {
    let collection = await this.dataBase;
    var selectedBookFields = {
      _id: 0,
      id: 1,
      title: 1,
      cover: 1,
      price: 1,
    };
    let author = collection
      .aggregate([
        {
          $lookup: {
            from: "Books",
            localField: "id",
            foreignField: "authorId",
            as: "Books",
          },
        },
        {
          $match: {
            id: auid,
          },
        },
        { $project: { ...selectedBookFields, Books: 1 } },
      ])
      .toArray();
    return author;
  }
}

module.exports = new InMemoryAuthorRepository();
