// var { LinkedList } = require("./list");

class Book {
  constructor(title, author, price, rating, coverUrl) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.rating = rating;
    this.coverUrl = coverUrl;
  }

  toString() {
    return `Book ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Rating: ${this.rating}`;
  }
}

class BookManager {
  constructor() {
    this._books = new LinkedList();
    this._lastId = 0;
  }

  addBook(...books) {
    for (var book of books) {
      book.id = ++this._lastId;
      this._books.append(book);
    }
  }

  getAllBooks() {
    return this._books;
  }

  removeBook(title) {
    function matchByTitle(book) {
      return book.title === title;
    }

    var bookList = this._books.find(matchByTitle);
    if (bookList.length() > 0) {
      // Get the first matching book
      var bookToRemove = bookList.get(0);
      var index = this._books.indexOf(bookToRemove);
      if (index >= 0) {
        this._books.remove(index);
        return true;
      }
    }
    return false;
  }

  remove(index) {
    if (index === 0) {
      this._first = this._first.next;
    } else {
      let prev = this._first;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
    }
    this._size--;
  }

  getBookById(id) {
    for (var i = 0; i < this._books.length(); i++)
      if (this._books.get(i).id === id) return this._books.get(i);

    //return undefined.
  }

  updateBook(book) {
    const index = this._books.indexOf(book);
    if (index >= 0) {
      this._books.set(index, book);
      return true;
    } else {
      return false;
    }
  }

  getBooksByAuthor(author) {
    return this._books.find(function (book) {
      return book.author === author;
    });
  }

  getBooksInPriceRange(minPrice, maxPrice) {
    return this._books.find(function (book) {
      return book.price >= minPrice && book.price <= maxPrice;
    });
  }

  getBooksInRatingRange(minRating, maxRating) {
    return this._books.find(function (book) {
      return book.rating >= minRating && book.rating <= maxRating;
    });
  }
}




try {
  module.exports.Book = Book;
  module.exports.BookManager = BookManager;
} catch (e) {}
