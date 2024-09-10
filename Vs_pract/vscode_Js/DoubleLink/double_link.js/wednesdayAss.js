let { LinkedList } = require("./list.js");

let testingList = new LinkedList(1, 1, 2, 3, 4, 5, 6);

function skip(n = 0, skipper) {
  var count = 0;
  var skiplimit = n;

  if (!skipper) skipper = () => true;

  return (v) => {
    var skipper_Val = skipper(v);
    if (skipper_Val) {
      count++;
      if (count > skiplimit) {
        return skipper_Val;
      } else {
        return;
      }
    }
  };
}



function filterByAuthorAndPrice(author, price) {
  return (b) => b.price >= price && b.author.toLowerCase().includes(author);
}
// function filterUnByAuthor(author) {
//   return (b) => !b.author.toLowerCase().includes("vivek");
// }
function filterByAuthor(author) {
  return (b) => b.author.toLowerCase().includes(author);
}



function filterNumbersByDivisibility(...divisors) {
  let current = this._first;
  let result = new LinkedList();
  while (current) {
    if (divisors.some((divisor) => current.value % divisor === 0)) {
      result.append(current.value);
    }
    current = current.next;
  }
  return result;
}

//--testing functions--
console.log("testingList.size()", testingList.size());
let filteredList = testingList.filter(skip(1, (v) => v === 1));
console.log("filteredList.size()", filteredList.size());
console.log("testingList.size()", testingList.size());
let filterWithoutMAtcher = testingList.filter(skip(2));
console.log("filterWithoutCallback.size()", filterWithoutMAtcher.size());
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

let filterByAuthorWithZeroSkip = BookList.filter(
  skip(0, filterByAuthor("vivek"))
);
let filterByAuthorWithOneSkip = BookList.filter(
  skip(1, filterByAuthor("vivek"))
);
console.log(
  "filterByAuthorWithZeroSkip.size()",
  filterByAuthorWithZeroSkip.size()
);
console.log(
  "filterByAuthorWithOneSkip.size()",
  filterByAuthorWithOneSkip.size()
);

let filteredByAuthorAndPrice = BookList.filter(
  filterByAuthorAndPrice("vivek", 300)
);
console.log("filteredByAuthorAndPrice.size()", filteredByAuthorAndPrice.size());
console.group("filteredByAuthorAndPrice", filteredByAuthorAndPrice);
let BooksFilterdByAuthor = BookList.filter(filterUnByAuthor("vivek"));
console.log("BooksFilterdByAuthor.size()", BooksFilterdByAuthor.size());
console.group("BooksFilterdByAuthor", BooksFilterdByAuthor);

let BooksSortedByAuthor = BookList.sort((b) => b.author);
console.group(BooksSortedByAuthor.forEach((b) => console.log(b.author)));
