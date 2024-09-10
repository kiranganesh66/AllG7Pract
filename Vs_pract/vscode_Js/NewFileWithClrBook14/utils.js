function take(n, matcher) {
  var count = 0;
  
  if (!matcher) matcher = (v) => true;

  return (v) => {
    if (n && count === n) return; //break the loop
    var matched = matcher(v);
    if (matched) count++;
    return matched;
  };
}


function skip(n=0, skipper) {
    var count = 0;
    var skiplimit = n;
    // var stoplimit = count - skiplimit
    if (!skipper) skipper = () => true;
  
    return (v) => {
        var skipper_Val = skipper(v);
        if (skipper_Val) {
          count++;
          if(count > skiplimit ){
            return skipper_Val;
          }else{

            return false;
            
          }
      }

    };
  }
  

function distinct(matcher){
    let items=[]
    
    return b=>{
       var item=matcher(b)
        if(items.includes(b)){
            return false
       }else{
           items.push(item)
            return true
       }
      
    }
    
}



 
function gt(value) {
  return (num) => num > value;
}

function lt(value) {
  return (num) => num < value;
}

function contains(substring) {
  return (str) => str.includes(substring);
}

function between(min, max) {
  return (num) => num >= min && num <= max;
}

module.exports = { gt, lt, contains, between };







// function filterbymutiplebyprice(300){




// }


// let Basicfilter = BookList.filter(b=>(b.price >= 300 && b.author.toLowerCase().includes("vivek")));
// console.log('Basicfilter.size()',Basicfilter.size());
 
// let BooksFilterd = BookList.filter(b=> (!b.author.toLowerCase().includes("vivek")));
// console.log('BooksFilterd.size()',BooksFilterd.size());


// filterNumbersByDivisibility(...divisors) {
//     let current = this._first;
//     let result = new LinkedList();

//     while (current) {
//         if (divisors.some(divisor => current.value % divisor === 0)) {
//             result.append(current.value);
//         }
//         current = current.next;
//     }

//     return result;
// }

try {
  module.exports = {
    take,
    skip,distinct,gt, lt, contains, between
  };
} catch (e) {}



// sort( returnValue, order = "asc",) {
//   if (!["asc", "desc"].includes(order)) {
//       throw new Error("Incorrect order, accepted order params are asc and desc");
//   }

//   let clonedList = this.clone();
//   if (this.size() <= 1) return this._first;
//   for (var n = this.size(); n >= 1; n--) {
//       let current = clonedList._first;
//       for (var i = 0; i < n - 1; i++) {

//           let ascCondition = ((returnValue ? returnValue(current.value) : current.value) > (returnValue ? returnValue(current.next.value) : current.next.value))
//           let descCondition = ((returnValue ? returnValue(current.value) : current.value) < (returnValue ? returnValue(current.next.value) : current.next.value))

//           let condition = (order === "asc") ? ascCondition : descCondition
//           if (condition) {
//               let temp = current.next.value;
//               current.next.value = current.value;
//               current.value = temp;
//           }
//           current = current.next;
//       }
//   }

//   return clonedList;
// }
