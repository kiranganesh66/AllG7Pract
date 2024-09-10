let input_value = document.getElementById("input_value") 

let text_A = document.getElementById("text_A")

let avgButton = document.getElementById("avgButton")
let maxButton = document.getElementById("maxButton")


let numbers = []


document.getElementById("add_btn").addEventListener('click',function(){
   
    let value = input_value.value
 
    if (value !== ""){
        
        text_A.innerHTML=""
        let Id=numbers.length + 1
        numbers.push([Id,value])

        numbers.map(function(number){
          
            text_A.innerHTML += `<li id="Tu_${number[0]}"> ${number[1]} <button class="exBtn" onclick="del_list(${number[0]})" >X</button>  </li>`
            
        })
        input_value.value=""
    }

    localStorage.setItem("list", numbers)
})


function del_list(ID_P){

let item = document.getElementById(`Tu_${ID_P}`)
if (item){
    item.remove()
}


}



document.getElementById('sumButton').addEventListener("click", function(){

let  total = 0
    numbers.map(function(each){
         total =  total + parseInt(each[1])
    })
    document.getElementById("console_A").textContent= total

})




document.getElementById('avgButton').addEventListener("click", function(){
 let lengt = numbers.length

    let  total = 0
        numbers.map(function(each){
          
             total =  total + parseInt(each[1])
    
        })

        let avg = total / lengt
        document.getElementById("console_A").textContent=avg
    
        })


    document.getElementById('maxButton').addEventListener("click", function(){
        // let lengt = numbers.length
     let hk = []

      for (i of numbers){
        hk.push(i[1])
      }
        let maxVau= Math.max(...hk)

               document.getElementById("console_A").textContent= `max Value ${maxVau}`
           
           
           })




// clear the details


           document.getElementById('Cl_btn').addEventListener("click", function(){
            // let lengt = numbers.length
            
            text_A.textContent=""
            console_A.textContent=""
               
               })

             
    
// function totalValue {
// }

// sumButton.addEventListener("click", totalValue)

document.getElementById("ref_btn").addEventListener("click",function(){

    

let  data = localStorage.getItem("list") 
// let numArray = data.split(",").map(Number);
let hk = []

    for (i of data){
      hk.push( parseInt(i[1]))
    }
console.log(hk)
hk.map(function(number){
          
    text_A.innerHTML += `<li id="Tu_${number[0]}"> ${number[1]} <button class="exBtn" onclick="del_list(${number[0]})" >X</button>  </li>`
    
})

// numArray.map(function(number){
//         let listItem=document.createElement('li')
//         listItem.textContent=number[]
//         text_A.appendChild(listItem)
//     })
   
})


document.getElementById('Rs_btn').addEventListener("click", function(){
    // let lengt = numbers.length
    
    text_A.textContent=""
    numbers.length=0

        console_A.textContent=""
        localStorage.clear();
       })







// function calculateSum() {
//     var numbers = getNumbers();
//     var sum = numbers.reduce((acc, val) => acc + val, 0);
//     document.getElementById('result').textContent = 'Sum: ' + sum;
// }

// // Function to calculate and display the average
// function calculateAverage() {
//     var numbers = getNumbers();
//     var sum = numbers.reduce((acc, val) => acc + val, 0);
//     var avg = sum / numbers.length;
//     document.getElementById('result').textContent = 'Average: ' + avg;
// }


// function findMaximum() {
//     var numbers = getNumbers();
//     var max = Math.max(...numbers);
//     document.getElementById('result').textContent = 'Maximum: ' + max;
// }

// // Add event listeners to buttons
// document.getElementById('sumButton').addEventListener('click', calculateSum);
// document.getElementById('avgButton').addEventListener('click', calculateAverage);
// document.getElementById('maxButton').addEventListener('click', findMaximum);
















// function logInputValue() {

//     let input_v = input_value_U.value;
//     let prInt = input_v
//     list_P.push(prInt)
//     input_value_U.value=""
// }




// document.getElementById("add_btn").addEventListener('click',function(){
//     const input_v=  input_value
//     let value = input_v.value
 
//     if (value !==""){
        
//         text_A.innerHTML=""
//         numbers.map(function(number){
//             let listItem=document.createElement('li')
      
//             Index_count += 1
//             listItem.textContent=number

//             var tag_ =  text_A.innerHTML += `<li id="item-${Index_count}">${number} <button onclick='deleteTheData(${Index_count})'>x</button></li>`;

//             text_A.appendChild(listItem)
//             numbers.push([Index_count,value])
//         })
//         input_v.value=""
//     }

//     localStorage.setItem("list", numbers)
// })
