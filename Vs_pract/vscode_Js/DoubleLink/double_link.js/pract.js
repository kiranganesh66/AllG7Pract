var { LinkedList, Node } = require("./list");

class Dubelist extends LinkedList {
  constructor(...values) {
    super(...values);
  }


_addingNode(value){
  
  var newNode = new Node(value) 
   newNode.prev = this._last

   if (this._first.isEmpty() === 0){
    
     this._first = newNode

   }else{
    this._last.next=newNode
   }
   this._last = newNode
   this._size++
}


locater(index){
 
    index = this._validateIndex(index)
 
    var currentNode = this.first
    var curindex = 0
    var steps = index
 
    if (this._current && this._currentIndex < index){  
        currentNode = this._current
        curindex =  this._currentIndex 
        steps = index - this._currentIndex

    }

     for ( var i= 0 ; i < steps ; ++i){
         current = currentNode.next
     }
     this._current= current
     this._currentIndex = index

     return current

}

insert(index, value){
var validIndex=  this._locate(index)
  var newnode = new Node(value)
  newnode.prev = validIndex

if ( index === 0){
    this.first.prev = newnode
    newnode.next = this.first
    this._size++

}
else{





}




}




}



