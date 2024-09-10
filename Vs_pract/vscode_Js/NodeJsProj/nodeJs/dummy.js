





// function plus(a, b) { return a + b; }
// function minus(a, b) { return a - b; }

// function multiply(a, b) { return a * b; }

// function divide(a, b) { return a / b; }

// function modulo(a, b) { return a % b; }



// operators = {
//     plus: plus, //Es5 syntax
//     minus ,
//     multiply, 
//     divide   ,
//     modulo//ES2015 syntax
// }


// var hello  = function (value1, oprName, value2) {

//     if (operators[oprName]) { //if this key is present
//         var opr = operators[oprName]; //take the function.
//         var result = opr(value1, value2);
//         //  result_d.innerText = `${value1} ${oprName} ${value2} = ${result}`;
//         testCalculator(result)
//     } else {
//         console.log(`Invalid operation ${opr}`);
//     }

// }
// hello(1,"multiply", 2)


// function testCalculator( message) {
//     console.log(message)
    
// }
// var res = 
// console.log(res)




class Calculator{
    constructor(presenter){
        this.operators={};
        this.addDefaultOperators();

        this.presenter=presenter || console.log;
    }

    addDefaultOperators(){
        this.addOperator((x,y)=>x+y, "plus","+");
        this.addOperator((x,y)=>x-y, "minus");
        this.addOperator((x,y)=>x*y, "multiply");
        this.addOperator((x,y)=>x/y, "divide");

    }


    
    addOperator(operator,...names){
        if(operator.name)
            this.operators[operator.name]=operator;
    
        for(let name of names){
            this.operators[name]=operator;
        }
    }

    setPresenter(presenter){
        this.presenter=presenter;
    }


    execute(value1,operatorName, value2){
        if(this.operators[operatorName]){
            //Step #1 Find operator
            var operator=this.operators[operatorName];

            //Step #2 Do Calculation
            var result=operator(value1,value2);

            //Step #3 Format the output
            var output=`${value1} ${operatorName} ${value2} = ${result}`;

            //Step #4 Present the result
            // hard coded dependency on console.
            //console.log(output);

            //dependency inversion... not knowing exact dependency.
            //I need to present but not sure where/how.
            this.presenter(output); 


        }else{
            //Present the Error Message
            //console.log(`Invalid operator: ${operatorName}`);
            this.presenter(`Invalid operator: ${operatorName}`); 
        }
    }
}

function testCalculator(){
    var calc=new Calculator();
    calc.execute(10,"plus",5);
    calc.execute(10,"minus",5);

    // calc.setPresenter( output=> console.log(`**$$ ${output} ***`) );

    calc.setPresenter( output=> alert(`**$$ ${output} ***`) );
}

testCalculator();