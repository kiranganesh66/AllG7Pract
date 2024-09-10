var {LinkedList}= require('./list');

var list=new LinkedList();



// list.append(20)
// list.append(40)
list.append(40)
list.append(60)
list.append(70)
list.append(80)
list.remove(10)

var k = list.insert(1,10)
console.log("m",k)
// list.set(2 ,100)
list.getAll()
console.log(JSON.parse(list))


// console.log("list",list.first.next)
// console.log("list",list.first.next)

// let k = list.length()



// console.log("k",k)

// console.log(list)

// console.log('list',list); //object as JSON

// console.log(`list : ${list}`); //invokes list.toString();

// var testNumbers=[2,3,9,2,6];

// for(var number of testNumbers)
//     list.append(number);


// console.log('list',list);

// console.log(`list : ${list}`); //invokes list.toString();

// console.log('list.toString()',list.toString());

// console.log('list.length()',list.length());


// for(var i=0; i<list.length(); i++)
//     console.log(`list.get(${i})`,list.get(i));

// //console.log(list.get(100));

// for(var i=0;i<list.length();i++){
//     list.set(i, list.get(i)*10);
// }

// console.log('list.toString()',list.toString());

// list.remove(4); //last item 60
// list.remove(2); //90
// list.remove(0); //20

// console.log('list.toString()',list.toString());








// function createList(count){ 

//     var list=new LinkedList(); 
    
//     for(var i=1;i<=count;i++) 
    
//     list.append(i); 
    
     
    
//     return list; 
    
//     } 
    
     
    
//     function sumList(list){ 
    
//     var result=0; 
    
//     for(var i=0;i<list.length();i++)
//     result+=list.get(i); 
    
//     return result; 
    
     
    
//     } 
    
     
    
//     //find how much time will the below code take 
    
//     var count=100000; 
     
    
//     var start=performance.now(); 
//     var list = createList(count);
//     var end=performance.now();

//     console.log( end-start); 

//     var start=performance.now(); 
//     var result = sumList(list);
//     var end=performance.now(); 
    
//     console.log( end-start); 
    
     
    
     