class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(...values) {
    this._first = null;
    this._last = null;
    this._size = 0;
    this._currentIndex = undefined;
    this._current = null; //nothing located yet.

    // console.log('constructor', values);

    for (var value of values) {
      this._append(value);
    }
  }

  append(...values) {
    // console.log('append', values);

    for (var value of values) {
      this._append(value);
    }
  }

  isEmpty() {
    return this._size === 0;
  }

  _append(value) {
    var newNode = new Node(value);

    if (this.isEmpty()) this._first = newNode;
    else this._last.next = newNode;

    this._last = newNode;
    this._size++;
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

  _locate(index) {
    index = this._validateIndex(index);

    //default case. start from begining
    var current = this._first;
    var startIndex = 0;
    var steps = index;

    if (this._current && this._currentIndex < index) {
      startIndex = this._currentIndex;
      current = this._current;
      steps = index - this._currentIndex;
    }

    console.log(`locating from start=${startIndex}\tsteps=${steps}`);

    for (var i = 0; i < steps; i++) {
      current = current.next;
    }

    this._current = current;
    this._currentIndex = index;
    return current;
  }

  size() {
    return this._size;
  }

  get(index) {
    return this._locate(index).value;
  }

  set(index, value) {
    this._locate(index).value = value;
  }

  insert(index, value) {
    index = this._validateIndex(index);

    var newNode = new Node(value);

    if (index === 0) {
      newNode.next = this._first;
      this._first = newNode;
    } else {
      var n = this._locate(index - 1);
      newNode.next = n.next;
      n.next = newNode;
    }
    this._size++;
  }

  remove(index) {
    this._validateIndex(index);
    var p = this._locate(index - 1);
    console.log("p", p);

    //now remove p.next
    p.next = p.next.next;

    return p.value;
  }

  forEach(execute) {
    var i = 0;
    for (var n = this._first; n; n = n.next) {
      var result = execute(n.value, i);
      if (result !== undefined) return result;
      i++;
    }
  }

  removeItem(removeBy, max = null) {
    var result = new LinkedList();
    this.forEach((v) => {
      if (removeBy(v, max) === true) {
        console.log(v);
        max--;
      }
    });
  }

  toString() {
    var str = "LinkedList(\t";
    for (var n = this._first; n; n = n.next) {
      str += n.value + "\t";
    }

    return str + ")";
  }

  filter(matcher) {
    var result = new LinkedList();

    this.forEach((v) => {
      if (matcher(v)) {
        result.append(v);
      }
    });

    return result;
  }

  find(matcher) {
    for (var n = this._first; n != null; n = n.next) {
      if (matcher(n.value)) {
        return n.value;
      }
    }
  }

  map(mapper) {
    var result = new LinkedList();

    this.forEach((v) => {
      result.append(mapper(v));
    });

    return result;
  }

  average(filterby) {
    let count = this._size;
    let total = 0;
    this.forEach((v) => {
      total += filterby(v);
    });
    return total / count;
  }



  sortTheitems(compareFunction) {
    
    for (let i = 0; i < this._size - 1; ++i) {
        let current = this._first;
        for (let j = 0; j < this._size - i - 1; ++j) {
            if (compareFunction(current.value, current.next.value) > 0) {
                
                let n_value = current.value;
                current.value = current.next.value;
                current.next.value = n_value;
            }
            current = current.next;
        }
    }
}


  //end tag
}


// var lis = new LinkedList()

// lis.append(20)
// lis.append(90)
// lis.append(30)
// lis.append(50)
// lis.append(80)
// lis.append(90)

// lis.sortThebook()
// console.log(lis)

try {
  module.exports.LinkedList = LinkedList;
  module.exports.Node = Node;
} catch (e) {}


var count = 50000

var start=performance.now(); 
var  result  = sortbyitem(count)
var end=performance.now(); 

console.log('total time taken', end-start); 

var start=performance.now(); 
var  resul2  = sumList(list)
var end=performance.now(); 

console.log('total time taken', end-start);


  // sortTheitems(getthesortone) {
  //   for (var i = 0; i < this._size; ++i) {
  //     let current = this._first;
  //     for (var j = 0; j < this._size - i; ++j) {
  //       if (getthesortone(current.value, current.next.value)) {
  //         let abc= current.value
  //         current.value = current.next.value;
  //         current.next.value = abc
  //       }
  //     }

  //   }
  // }