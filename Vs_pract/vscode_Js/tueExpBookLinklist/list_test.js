var { LinkedList } = require("./list");

var list = new LinkedList();
list.append(2);
list.append(100);
list.append(4);
list.append(5);
list.append(6);

var k =list.get(2)

console.log(k)


// function createList(count){ 
//   var list=new LinkedList(); 
//   for(var i=1;i<=count;i++) 
//   list.append(i); 
//   return list; 
  
//   } 
  
//   function sumList(list){ 
//   var result=0; 
//   for(var i=0;i< list.size();i++); 
//   result+=list.get(i); 
//   return result; 
//   } 


//   var count = 50000

// var start=performance.now(); 
// var  result  = createList(count)
// var end=performance.now(); 

// console.log('total time taken', end-start); 

// var start=performance.now(); 
// var  resul2  = sumList(list)
// var end=performance.now(); 

// console.log('total time taken', end-start); 


