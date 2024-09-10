var { Book, BookManager } = require("./book");

var app = (function () {
  var manager = new BookManager();

  manager.addBook(
    new Book("The Accursed God", "Vivek Dutta Mishra", 299, 4.5, "conver1.jpg"),
    new Book("Manas", "Vivek Dutta Mishra", 199, 4.4, "cover2.jpg"),
    new Book("Rashmirathi", "Ramdhari Singh Dinkar", 99, 4.1, "conver1.jpg"),
    new Book("Kane and Abel", "Jeffrey Archer", 599, 4.6, "conver2.jpg"),
    new Book(
      "How I Taught My Grandmother to Read",
      "Sudha Murthy",
      400,
      4.5,
      "conver4.jpg"
    )
  );


  
  // for (var i = 0; i < manager._books.length(); i++) {
  //   var book = manager._books.get(i);
  //   console.log(book.toString());
  // }

  //  var rating=  manager.getBooksInRatingRange(2,6)
  // console.log(rating)

  //  var priceRage=  manager.getBooksInPriceRange(200,500)
  // console.log(priceRage)

  // var getbookbyAuthr=manager.getBooksByAuthor("Vivek Dutta Mishra")
  // console.log(  "getbookbyAuthr",getbookbyAuthr)

  // var Allbooks = manager.removeBook("The Accursed God");
  // console.log("Allbooks", Allbooks);

  // console.log(manager.getAllBooks());

})();
