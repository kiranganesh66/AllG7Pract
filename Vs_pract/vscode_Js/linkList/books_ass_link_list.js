class Node {
  constructor(Title, Author, Price, Rating, next = null) {
    this.Book = { Title, Author, Price, Rating };
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.firstBook = null;
  }

  add(Title, Author, Price, Rating) {
    var newbook = new Node(Title, Author, Price, Rating);

    if (this.firstBook === null) {
      this.firstBook = newbook;
      return;
    }

    var n = this.firstBook;
    while (n.next) {
      n = n.next;
    }
    n.next = newbook;
    return;
  }

//   getAll() {
//     var n = this.firstBook;
//     while (n) {
//       console.log(n.Book);
//       n = n.next;
//     }
//     //  for (var n=this.firstBook; n  ; n=n.next)

//     //     console.log(n.Book);
//   }

  getMatchAuthor(Name) {
    var Match_book ={};
        var n = this.firstBook;
        while(n){
            if (n.Book.Author === Name) {
        Match_book["hl"]=n.Book;
      }
            n = n.next
        }


      
    return Match_book;
  }



  All_books() {
    var n = this.firstBook;
    while (n) {
      console.log(n.Book);

      n = n.next;
    }
    return n
  }

  priceAll_Asc() {
    // Step 1: Gather all books into an array
    var booksArray = [];
    var n = this.firstBook;
    while (n) {
      booksArray.push(n.Book);
      n = n.next;
    }

    // Step 2: Sort the array by the Price property in ascending order
    booksArray.sort((a, b) => a.Price - b.Price);

    // Step 3: Return or print the sorted array
    return booksArray;
  }
}

var booksList = new LinkedList();

booksList.add("Ramayan", "kiran", 300, 4);
booksList.add("Adhi_Rama", "jaiVeer", 400, 5);
booksList.add("Sudha", "KaiVeer", 200, 1);
booksList.add("Loards", "kiran", 300, 5);
booksList.add("Peace", "Kaveer", 200, 4);


console.log(booksList)
// var mk= booksList.getMatchAuthor("kiran")
//  console.log("mk", mk)
// var k = booksList.getMatchAuthor("kiran");

// console.log(k);


// var auth = booksList.getMatchAuthor("kiran")
// console.log(auth)
// booksList.getAll()
// console.log("book",booksList)

// function length(order) {
//     var count = 0
//     for (var i in order){
//         count =i
//     }
//     console.log(count)
// }

// var HieghPri ={}
// var low ={}




















class BookManager {
  constructor(books) {
      this._books = books; // Assuming _books is an array of book objects
  }

  // Method to filter and sort books by author
  getBooksByAuthor(author, sortOrder = 'asc') {
      let filteredBooks = this._books.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
      return this._sortBooks(filteredBooks, 'author', sortOrder);
  }

  // Method to filter and sort books by rating range
  getBooksByRatingRange(min, max, sortOrder = 'asc') {
      let filteredBooks = this._books.filter(b => b.rating >= min && b.rating <= max);
      return this._sortBooks(filteredBooks, 'rating', sortOrder);
  }

  // Method to filter and sort books by title
  getBooksByTitle(title, sortOrder = 'asc') {
      let filteredBooks = this._books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
      return this._sortBooks(filteredBooks, 'title', sortOrder);
  }

  // Method to filter and sort books by price range
  getBooksByPriceRange(min, max, sortOrder = 'asc') {
      let filteredBooks = this._books.filter(b => b.price >= min && b.price <= max);
      return this._sortBooks(filteredBooks, 'price', sortOrder);
  }

  // Helper method to sort books by a specific property
  _sortBooks(books, property, sortOrder) {
      return books.sort((a, b) => {
          if (sortOrder === 'asc') {
              return a[property] > b[property] ? 1 : -1;
          } else if (sortOrder === 'desc') {
              return a[property] < b[property] ? 1 : -1;
          }
      });
  }
}
