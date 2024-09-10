const { BookManager } = require("./book"); // Import BookManager from book.js
var {distinct,skip,take,filterbymutipleoption} =require("./utils")

const bookManager = new BookManager(); // Instantiate BookManager

// const allBooks = bookManager.getBooks(); // Get all books Vivek Dutta Mishra , Paulo Coelho

var k = bookManager.FindbyObjId({ "author": "Vivek Dutta Mishra" });

console.log(k)
// var filterbymutipleoption =function(obj){
//     var {author=null, price =nll , rating=null}= obj

//  function realCheck(v){

// var res =  (v.author.toLowerCase()).includes(author.toLowerCase())
// return res
//  }

// return realCheck
// }



// var fl = bookManager.filterbymutipleoption({ author:'Vivek' , price: "300",rating:"" })
// console.log(fl)

// Printing all books
// allBooks.forEach(book => console.log(book.toString()));
