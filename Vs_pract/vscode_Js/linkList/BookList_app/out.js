

var app = (function () {
  class Book {
    constructor(title, author, price, rating, coverUrl) {
      this.title = title;
      this.author = author;
      this.price = price;
      this.rating = rating;
      this.coverUrl = coverUrl;
      this.id = BookManager.lastId++;
    }

    toString() {
      return `Book ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Rating: ${this.rating}`;
    }
  }

  class BookManager {
    constructor() {
      this._books = new LinkedList();
    }

    addBook(...books) {
      for (let book of books) {
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

      let bookList = this._books.find(matchByTitle);
      if (bookList.length() > 0) {
        let bookToRemove = bookList.get(0);
        let index = this._books.indexOf(bookToRemove);
        if (index >= 0) {
          this._books.remove(index);
          return true;
        }
      }
      return false;
    }

    getBookById(id) {
      for (let i = 0; i < this._books.length(); i++) {
        if (this._books.get(i).id === id) {
          return this._books.get(i);
        }
      }
    }

    // ui
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
      return this._books.find((book) => book.author === author);
    }

    getBooksInPriceRange(minPrice, maxPrice) {
      return this._books.find(
        (book) => book.price >= minPrice && book.price <= maxPrice
      );
    }

    getBooksInRatingRange(minRating, maxRating) {
      return this._books.find(
        (book) => book.rating >= minRating && book.rating <= maxRating
      );
    }
  }

  BookManager.lastId = 1;



  class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

  class LinkedList {
    constructor() {
      this._first = null;
      this._size = 0;
      this._last = null;
    }

    append(item) {
      let newNode = new Node(item);
      if (this._first === null) {
        this._first = newNode;
      } else {
        this._last.next = newNode;
      }
      this._last = newNode;
      this._size++;
    }

    length() {
      return this._size;
    }

    get(index) {
      let node = this._first;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node.data;
    }

    set(index, item) {
      let node = this._first;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      node.data = item;
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

    find(isMatch) {
      let result = new LinkedList();
      let node = this._first;
      for (let i = 0; i < this._size; i++) {
        if (isMatch(node.data)) {
          result.append(node.data);
        }
        node = node.next;
      }
      return result;
    }

    indexOf(item) {
      let index = 0;
      let node = this._first;
      while (node) {
        if (node.data === item) {
          return index;
        }
        node = node.next;
        index++;
      }
      return -1;
    }
  }

  const manager = new BookManager();

  function displayBookDetails(books) {
    const bookDetailsDiv = document.getElementById("bookDetails");
    bookDetailsDiv.innerHTML = "";

    if (books.length() === 0) {
      bookDetailsDiv.innerHTML = "<p>No books found.</p>";
      return;
    }

    let node = books._first;
    while (node !== null) {
      const book = node.data;
      const bookDiv = document.createElement("div");
      bookDiv.className = "book-item";
      bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Price:</strong> $${book.price}</p>
            <p><strong>Rating:</strong> ${book.rating}</p>
            <p><strong>Cover:</strong> <img src="${book.coverUrl}" alt="${book.title} cover" /></p>
            <button onclick="selectBook(${book.id})">Select</button>
        `;
      bookDetailsDiv.appendChild(bookDiv);

      node = node.next;
    }
  }

  searchBook = function () {
    const title = document.getElementById("searchTitle").value.trim();
    const books = manager.getAllBooks().find((book) => book.title === title);
    displayBookDetails(books);
  };

  addOrUpdateBook = function () {
    const id = parseInt(document.getElementById("bookId").value.trim());
    const title = document.getElementById("bookTitle").value.trim();
    const author = document.getElementById("bookAuthor").value.trim();
    const price = parseFloat(document.getElementById("bookPrice").value.trim());
    const rating = parseFloat(
      document.getElementById("bookRating").value.trim()
    );
    const coverUrl = document.getElementById("bookCoverUrl").value.trim();

    if (isNaN(id) || id <= 0) {
      const newBook = new Book(title, author, price, rating, coverUrl);
      manager.addBook(newBook);
    } else {
      const existingBook = manager.getBookById(id);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.rating = rating;
        existingBook.coverUrl = coverUrl;
        manager.updateBook(existingBook);
      } else {
        alert("Book with this ID does not exist.");
      }
    }
    displayBookDetails(manager.getAllBooks());
  };

  removeBook = function () {
    const title = document.getElementById("bookTitle").value.trim();
    if (manager.removeBook(title)) {
      alert("Book removed successfully.");
    } else {
      alert("Book not found.");
    }
    displayBookDetails(manager.getAllBooks());
  };

  
})();
