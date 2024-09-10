
// let {test} = require("node:test")
// let { divide, multiple, minus, plus } = require("./index");


// var x= 10 ;

// var y = 5 ;


// test("plus is here", function(){
//     var result = plus(x,y)
// console.log(result)
// })

// test("minus is here", function(){
//     var result = minus(x,y)
// console.log(result)
// })
// test("divide is here", function(){
//     var result = divide(x,y)
// console.log(result)
// })
// test("multiple is here", function(){
//     var result = multiple(x,y)
// console.log(result)
// })






function assertEqual(expreslt,actulResult){
 if(expreslt !== actulResult){
    throw new Error (`Experted  ${expreslt}, but got ${actulResult}`)
 }


}


module.exports={assertEqual}