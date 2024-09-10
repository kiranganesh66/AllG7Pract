var numberTextBox = document.getElementById('numberTextBox');
var console = document.getElementById('console');
var numberList = document.getElementById('numberList');
var numbers = [];



let Index_count = 0;

function addToList() {
    var value = numberTextBox.value;
    var number = parseFloat(value);


    if (!isNaN(number)) {
        Index_count += 1;
        numbers.push([Index_count, number]);
        numberList.innerHTML += `<li id="item-${Index_count}">${number} <button onclick='
        
        (${Index_count})'>x</button></li>`;
         numberTextBox.value=""
    } else {
        console.innerHTML += `<p>Invalid Value :"${value}"</p>`;
    }
}

function deleteTheData(index) { 
    numbers = numbers.filter(item => item[0] !== index);
    var item = document.getElementById(`item-${index}`);
    if (item) {
        item.remove();
    }

    console.innerHTML += `<p>Deleted item with index: ${index}</p>`;
}



function clear() {
    console.innerHTML =""
    numberList.innerHTML  = ""
    console.innerHTML = `<p>Clearing</p>`;
    
}

function reset() {
    console.innerHTML = `<p>Resetting</p>`;
    numbers = [];
clear()
}

function refresh() {
    numberList.innerHTML = "";
    for (var number of numbers) {
        numberList.innerHTML += `<li>${number} <button>x</button></li>`;
    }
}

document.getElementById('addButton').addEventListener('click', addToList);
