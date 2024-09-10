var { LinkedList } = require("./list");
var { take, skip, distinct } = require("./utils");

var list = new LinkedList(2, 3, 9, 4, 8, 7, 6, 5, 4, 3, 2, 8);

// var result = list.filter(take(5, (n) => n % 2 === 0));

var skipRs = list.filter(take(2, (n)=> n%2 == 0));
// var Distin = list.filter(distinct((b) => b));e
// console.log(Distin);


skipRs.forEach((v) => console.log(v));


//   var count = 50000

// var start=performance.now(); 
// var  result  = createList(count)
// var end=performance.now(); 

// console.log('total time taken', end-start); 

// var start=performance.now(); 
// var  resul2  = sumList(list)
// var end=performance.now(); 

// console.log('total time taken', end-start); 