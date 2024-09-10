var { LinkedList } = require("./list");

//it doesn't have any export
//it simply updates the existing List prototyp.
require("./list-extension");

var list = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

function testRemove(param) {
  console.log(`list.remove(${param})`);
  var removed = list.remove(param);
  console.log("list.toString()", list.toString());
  console.log(`removed : ${removed}`);
}


var limit = 3
var counr = 0 
testRemove(5); //removes index 5
testRemove(x => {
  
  if (x % 2 == 0){
    counr ++ 
    return true

  }else {
    return false
  }
  

});
