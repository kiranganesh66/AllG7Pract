var result_d = document.getElementById("result_Id");
var InputV2 = document.getElementById("InputV2");
var InputV1 = document.getElementById("InputV1");
let forM = document.getElementById("formate_id")
var displ = document.getElementById("Disp_id")

function selectedValue() {
    const selectElement = document.getElementById('op_id');
    const selectedValue = selectElement.value;
    return selectedValue;
}

function selectedV_F(){
    const selectElement = document.getElementById('formate_id');
    const selectedValue = selectElement.value;
    return selectedValue;
}

function selectedV_D(){
    const selectElement = document.getElementById('Disp_id');
    const selectedValue = selectElement.value;
    return selectedValue;
}




function Cal_Sub() {
    var rs = selectedValue();
    const InputV2_V = parseInt(InputV2.value);
    const InputV1_V = parseInt(InputV1.value);
    const forM_v = selectedV_F();
    const displ_v = selectedV_D();
    var calc = new Calculator();
 var resul = document.getElementById("result_Id")

    
    if ( (forM_v === "larg" && displ_v === "UI" )|| (forM_v === "simple"  && displ_v === "UI")   || (forM_v === "simple" && displ_v === "console" ) || (forM_v === "simple" && displ_v === "console" )) {
        calc.setPresenter(output => {
           var km =  localStorage.setItem("k" ,output)
            resul.innerText = output;
            
        });
    }  else  {
        
        calc.setPresenter(output => console.log(output))
        resul.innerText = "";
    }

    calc.execute(InputV2_V, rs, InputV1_V);
}

class Calculator {
    constructor(presenter) {
        this.operators = {};
        this.addDefaultOperators();
        this.presenter = presenter || console.log;

        // console.log(this.operators)
    }



    addDefaultOperators() {
        this.addOperator((x, y) => x + y, "plus", "+");
        this.addOperator((x, y) => x - y, "minus");
        this.addOperator((x, y) => x * y, "multiply");
        this.addOperator((x, y) => x / y, "divide");
    }

    addOperator(operator, ...names) {
        for (let name of names) {
            this.operators[name] = operator;
        }
    
    }

    setPresenter(presenter) {
        this.presenter = presenter;
    }



    execute(value1, operatorName, value2) {
        if (this.operators[operatorName]) {
            var operator = this.operators[operatorName];
            var result = operator(value1, value2);
            var output = `${value1} ${operatorName} ${value2} = ${result}`;
            // Check the presenter to determine if only the result is needed
            this.presenter(output);
            
            
            
        } else {
            this.presenter(`Invalid operator: ${operatorName}`);
        }
    }

    addOpera() {
        const newfuc = document.getElementById('newOperation').value.trim();
        const newName = document.getElementById('newOperationName').value.trim();
        if (newfuc && newName) {
            this.addOperator(eval(newfuc), newName);
            console.log("Operator added successfully");
        } else {
            alert('Please enter a function and a name for the new operation.');
        }
    }
}

function addOperaButton() {
    var calc = new Calculator();
    calc.addOpera();



}


function presenter(output){

    
    

}


