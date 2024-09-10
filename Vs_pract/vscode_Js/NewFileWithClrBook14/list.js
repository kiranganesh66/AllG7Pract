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
    this._current = null;

    for (const value of values) {
      this._append(value);
    }
  }

  _append(value) {
    const newNode = new Node(value);

    if (this._size === 0) {
      this._first = newNode;
    } else {
      this._last.next = newNode;
    }

    this._last = newNode;
    this._size++;
  }

  forEach(callback) {
    let current = this._first;
    let index = 0;

    while (current) {
      const result = callback(current.value, index);
      if (result === false) break;
      current = current.next;
      index++;
    }
  }

  append(...values) {
    for (const value of values) {
      this._append(value);
    }
  }

  isEmpty() {
    return this._size === 0;
  }

  toString() {
    let str = "LinkedList(\t";
    this.forEach((v) => {
      str += v + "\t";
    });
    return str + ")";
  }

  ///starta
  getMatchingitems(criteria) {
    const result = new LinkedList();
  
    // Helper function to check if a value meets a criterion
    const matchCondition = (value, criterion) => {
      if (typeof criterion === 'function') return criterion(value);
      if (typeof criterion === 'object') {
        if (criterion.contains) return contains(criterion.contains)(value);
        if (criterion.gt) return gt(criterion.gt)(value);
        if (criterion.lt) return lt(criterion.lt)(value);
        if (criterion.between) return between(...criterion.between)(value);
      }
      return value === criterion;
    };
  
    // Helper function to evaluate criteria with logical operators
    const evaluateCriteria = (item, criteria) => {
      for (const key in criteria) {
        const condition = criteria[key];
       
        if (key === 'or') {
          // Evaluate OR conditions
          if (condition.some(subCriteria => evaluateCriteria(item, subCriteria))) {
            return true;
          }
          return false;
        }
  
        if (key === 'and') {
          // Evaluate AND conditions
          return condition.every(subCriteria => evaluateCriteria(item, subCriteria));
        }
  
        const value = item[key];
     
        if (!matchCondition(value, condition)) {
          return false;
        }
      }
      return true;
    };
  
    this.forEach(item => {
      if (evaluateCriteria(item, criteria)) {
        result.append(item);
      }
    });
  
    return result;
  }
  
}

module.exports = { LinkedList, Node };





// function contains(substring) {
//   return (str) => str.includes(substring);
// }

// function lt(value) {
//   return (num) => num < value;
// }

// function between(min, max) {
//   return (num) => num >= min && num <= max;
// }

try {
  module.exports.LinkedList = LinkedList;
  module.exports.Node = Node;
} catch (e) {}

// getMatchingitems(valu){
//  var currentInput = valu;
//  var currentNode = this._first
// var list = new LinkedList()

// if(typeof(currentInput) === Object){
//   var obj = Object.keys(currentInput)

// }
// else if(typeof(currentInput) === "string"){
//  v = getdatau(currentInput)
//   var k = v.find(v=> v.v  === currentInput)
//   list.append(k)
//   console.log(k)

// }

// }

// filterbymutipleoption(obj) {
//   var { author = null, price = null, rating = null } = obj;
//   price = price === "" ? null : price;

//   var min = null;
//   var max = null;

//   if (rating) {
//     var km = rating.split(",");
//     min = km[0] ? parseFloat(km[0]) : null;
//     max = km[1] ? parseFloat(km[1]) : null;
//   }

//   var result = this._books.filter((v) => {
//     var res =
//       (author === null
//         ? true
//         : v.author.toLowerCase().includes(author.toLowerCase())) &&
//       (price === null ? true : v.price <= price) &&
//       (rating === null
//         ? true
//         : (min === null || v.rating >= min) &&
//           (max === null || v.rating <= max));

//     return res;
//   });

//   return result;
// }

//end tag

// var lis = new LinkedList()

// lis.append(20)
// lis.append(90)
// lis.append(30)
// lis.append(50)
// lis.append(80)
// lis.append(90)

// lis.sortThebook()
// console.log(lis)

// try {
//   module.exports.LinkedList = LinkedList;
//   module.exports.Node = Node;
// } catch (e) {}

// var count = 50000

// var start=performance.now();
// var  result  = sortbyitem(count)
// var end=performance.now();

// console.log('total time taken', end-start);

// var start=performance.now();
// var  resul2  = sumList(list)
// var end=performance.now();

// console.log('total time taken', end-start);

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

// getMatchingitems(criteria, operator = "AND") {
  //   const result = new LinkedList();
  
  //   const matchCondition = (value, criterion) => {
  //     if (typeof criterion === "function") return criterion(value);
  //     if (typeof criterion === "object") {
  //       if (criterion.contains) return contains(criterion.contains)(value);
  //       if (criterion.lt) return lt(criterion.lt)(value);
  //       if (criterion.between) return between(...criterion.between)(value);
  //     }
  //     return value === criterion;
  //   };
  
  //   this.forEach((book) => {
  //     let match = operator === "AND";
  //     for (let key in criteria) {
  //       const criterion = criteria[key];
  //       const value = book[key];
  //       const conditionMatch = matchCondition(value, criterion);
  
  //       match = operator === "AND" ? match && conditionMatch : match || conditionMatch;
  //     }
  //     if (match) result.append(book);
  //   });
  
  //   return result;
  // }
  
