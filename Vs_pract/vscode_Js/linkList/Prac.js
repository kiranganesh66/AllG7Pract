
class Node{
  constructor(data, next=null){
    this.data = data 
    this.next= next
    
  }
}

class LinkedList{
  constructor(){
   this.first= null
   this.last = null
  }



 append(value){
     var newnode= new Node(value)

      if (this.first == null){
        this.first=newnode
        return;
      }
      var n = this.first

      while(n.next){
        n = n.next;
      }
        
      n.next=  newnode; 
 }



getAll(){

 for (var n = this.first; n ;n=n.next)
   console.log(n.data)

}

//end Get all

length(){
      
 var  count = 0
  for(var n = this.first;n; n=n.next)
  count ++
return count
}



// length_pr(){
// var count=0
// for(var n = this.first;n;n=n.next)
//   count ++

// return count
// }


indexAvail(changing_ptv){

if (changing_ptv > this.length()){
      throw new Error("Index Exceeded");
  }
  
  {
      return changing_ptv
     }
}

check_NvOr_pv(val){

  if ( val < 0 ) {
    var vl = -val
    if ((vl  >= this.length()+2) && (val < 0)){
      throw new Error(`index Exceed use from 0-${this.length()-1}`);
      
    }
   var changing_ptv = (this.length() - (vl))+1
  //  var ValidVal = this.IndexAvaila(changing_ptv)
   return changing_ptv
   } 
  var valid= this.indexAvail(val)

     return valid
}


// start insert 

insert(index, value) {
  var newnode = new Node(value)
  var ValidIndex= this.check_NvOr_pv( index)

  //  if (index >= this.length_pr()){
  //   throw new Error("jk");
  //  }

if (ValidIndex == 0 ){
    
   newnode.next = this.first  
    this.first  = newnode
   return;
}

var n = this.first
for (var i = 0 ; i < ValidIndex-1; i ++)
       n = n.next

newnode.next  = n.next
 n.next = newnode 
 return;
}



remove(index){

  if (index <= this.length()){
    console.log(`index Exceed use from 0-${this.length()-1}`)
  }



  if (index == 0 ){
      var after = this.first.next
     this.first = after
     return;
  }


    var n= this.first
     for(var i = 0; i < index-1;i++)
         n = n.next;
      
        n.next = n.next.next

 return n


   }
  
   

get(index){

  if (index >= this.length()){
    console.log(`index Exceed use from 0-${this.length()-1}`)
  }
  if (index == 0 ){
    var  n = this.first
   return n  //remove data
}
 
var n=this.first
for(var i =0 ; i < index ;i++)
      n=n.next
   
var final = n    //remov dtata
return final
}


negativ(Index){

  var NI =  -Index
  
   var len = this.length()- (NI)

  if (NI  >= this.length() && len < 0 ){
    console.log(`index Exceed use from 0-${this.length()-1}`);
    
  }


   var count = 0
   var n = this.first
   while (count < len ){
      n = n.next
     count ++
   }
  
  console.log(n)
  return 
 }


}

let list = new LinkedList()

list.append(20)
list.append(30)
list.append(50)
list.append(60)



// list.length()
// list.remove(6)
// var k= list.remove(2)
// console.log(k)in

// let k =list.get(3)
// var km =list.negativ(-4) 
// console.log(km)

// var k = list.get(2)
// console.log(k)

var len =list.length()

var is = list.insert(2,100);
console.log("jl",is)

list.getAll()
console.log(list)

 

// function createList(count){ 
//   var list=new LinkedList(); 
//   for(var i=1;i<=count;i++) 
//   list.append(i); 
//   return list; 
  
//   } 
  
//   function sumList(list){ 
//   var result=0; 
//   for(var i=0;i<list.length();i++); 
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


