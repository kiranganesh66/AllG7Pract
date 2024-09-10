
const { LinkedList } = require('./list');
const { gt, lt, contains ,between} = require('./utils');

class Book {
    constructor(title, author, price, rating, cover) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.cover = cover;
    }

    toString() {
        return `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Rating: ${this.rating}, Cover: ${this.cover}`;
    }
}



const booklist = new LinkedList(
  new Book('The Accursed God', 'Vivek Dutta Mishra', 299, 4.6, 'https://m.media-amazon.com/images/I/41xektjU1NL._SY445_SX342_.jpg'),
  new Book('Manas', 'Vivek Dutta Mishra', 399, 4.2, 'https://m.media-amazon.com/images/I/71MvJTjRjPL._AC_UY545_FMwebp_QL65_.jpg'),
  new Book('Mahabharata', 'C Rajkopalachari', 349, 4.8, 'https://m.media-amazon.com/images/I/81rq4w91g0L._AC_UY545_FMwebp_QL65_.jpg'),
  new Book('The Alchemist', 'Paulo Coelho', 249, 4.5, 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UY545_FMwebp_QL65_.jpg'),
  new Book('The Great Gatsby', 'F. Scott Fitzgerald', 399, 4.7, 'https://m.media-amazon.com/images/I/71qovngeOcL._AC_UY545_FMwebp_QL65_.jpg'),
  new Book('The Catcher in the Rye', 'J.D. Salinger', 299, 4.3, 'https://m.media-amazon.com/images/I/618XWn5fD5L._AC_UY545_FMwebp_QL65_.jpg'),
  new Book('To Kill a Mockingbird', 'Harper Lee', 299, 4.5, 'https://m.media-amazon.com/images/I/916YjOp3uyL._AC_UY545_FMwebp_QL65_.jpg')
);


// const criteria = {
//     author: contains('Vivek'),
//     rating: lt(4.5)
//   };

// const criteria = {
//     author: contains('Vivek'), rating: lt(4.5) }
      
   
// const criteria = {
//         author: contains('Vivek'),
//         and: [
//           { rating: lt(5) }
//         ]
//       };
const criteria = {
    author: contains('Vivek'),
    and: [
      { rating: lt(5) }
    ]
  };

// const criteria2 = {
//     author: contains('Vivek'),
//     rating: lt(4.5)
//   };

// const criteria = {
//     or: [
//       { author: contains('Vivek') },
//       { price: between(200, 300) } // Using `between`
//     ],
//     and: [
//       { rating: gt(4.5) }
//     ]
//   };


// const criteria = {
 
//     author: contains('Vivek'),
//     price: between(200, 300)  
// };
// Get matching books
const matchingBooks = booklist.getMatchingitems(criteria);

// Print all matching books
matchingBooks.forEach(book => {
  console.log(book.toString());
});

 


//   
  
  
//   const criteria = {
//     or: [
//       { author: contains('Anna') },
//       { price: lt(200) }
//     ],
//     and: [
//       { rating: gt(4.5) }
//     ]
//   };

  
  
// function getMatchingitems(valu) {
//     var currentInput = valu;

//     if (typeof(currentInput) === "object") {
//         var objk = Object.keys(currentInput);
//         for (var i  in objk){
//             console.log(objk[i])
//         }
    
//     }

//     if (typeof(currentInput) === "string") {
//         return currentInput;
//     }
// }

// // console.log(getMatchingitems(300));
// console.log(getMatchingitems({ author:'Vivek' , price: "300"}))



















// Should work if imported correctly

// Print all books

// var result = list.filter(take(5, (n) => n % 2 === 0));

// var skipRs = list.filter(take(2, (n)=> n%2 == 0));
// var Distin = list.filter(distinct((b) => b));
// console.log(Distin);


// skipRs.forEach((v) => console.log(v));


//   var count = 50000

// var start=performance.now(); 
// var  result  = createList(count)
// var end=performance.now(); 

// console.log('total time taken', end-start); 

// var start=performance.now(); 
// var  resul2  = sumList(list)
// var end=performance.now(); 

// console.log('total time taken', end-start); 