var { LinkedList } = require("./list.js");

class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoubleLink extends LinkedList{
  constructor() {
    this.first = null;
    // this.last = 0
  }

  add(data) {
    var newnode = new Node(data);
    if (this.first === null) {
      this.first = newnode;
    } else {
      var n = this.first;
      while (n.next) {
        n = n.next;
      }
      newnode.prev = n;
      n.next = newnode;
    }
  }

  _validateIndex(index) {
    if (typeof index !== "number")
      throw new TypeError("Index must be a number");

    if (index < 0) index += this._size;

    if (index < 0 || index >= this._size)
      throw new RangeError(
        `Index out of range: ${index}. valid range=(0-${this._size - 1})`
      );

    return index;
  }

  // _locate(index) {
  //   index = this._validateIndex(index);

  //   var current = this._first;
  //   var startIndex = 0;
  //   var steps = index;

  //   if (this._current && this._currentIndex < index) {
  //     startIndex = this._currentIndex;
  //     current = this._current;
  //     steps = index - this._currentIndex;
  //   }

  //   console.log(`locating from start=${startIndex}\tsteps=${steps}`);

  //   for (var i = 0; i < steps; i++) {
  //     current = current.next;
  //   }

  //   this._current = current;
  //   this._currentIndex = index;
  //   return current;
  // }

  insert(index, value) {
    index = this._validateIndex(index);
    var newNode = new Node(value);

    if (index == 0) {
      this.first.prev = newNode;
      newNode.next = this.first;

      this.first = newNode;
    }
    var n = this.first;
    for (var i = 0; i < index - 1; ++i) {
      n = n.next;
    }

    newNode.next = n.next;
    newNode.prev = n;

    if (n.next) {
      n.next.prev = newNode;
    }
    n.next = newNode;
  }

  forEach(action) {
    var i=0;
    for (var n = this.first; n; n = n.next) {
      var result=action( n.data,i);
      i++;
      if(result!==undefined)
        return result;
    }

    // var n = this.first;
    // let k = this.forEach((n) => n.data);

    // console.log(k);
  }

  remove(index) {
    if (this.first === null) {
      return;
    }

    index = this._validateIndex(index);

    var n = this.first;
    for (var i = 0; i < index - 1; ++i) {
      n = n.next;
    }

    if (n.next) {
      n.next = n.next.next;
      if (n.next) {
        n.next.prev = n;
      }
    }

    //     var n = this.first
    //     for(var i = 0 ; i < index -1 ; ++i){
    //      n = n.next
    //  }
  }

  //end tag
}

var li = new DoubleLink();

li.add(10);
li.add(20);

li.insert(1, 30);
// li.remove(1);
li.forEach();
