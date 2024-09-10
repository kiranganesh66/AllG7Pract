
class Calcult{
    
    constructor(){
        this.exress ={
     "+": (x,y)=> x+y,
     "-":(x,y)=> x-y,
     "/":(x,y)=> x-y,
     "%":(x,y)=> x-y,
     "plus":(x,y)=> x-y  
        }

    this.execute = function(V_1,exress,v_2){
    if( this.exress[exress] ) {
        console.log(this.exress[exress](V_1,v_2))
    }

    // execute(V_1, express,V_2){
    //     if(express ==="+"){
    //         console.log(V_1+ V_2)
    //     } else if (express ==="-"){
    //         console.log(V_1 - V_2)
    //     }
    //     else if (express ==="/"){
    //         console.log(V_1 / V_2)
    //     }else if (express ==="%"){
    //         console.log(V_1 % V_2)
    //     }else if (express.toLowerCase() ===  "plus"){
    //         console.log(V_1 + V_2)
    //     }else if (express ===  "*"){
    //         console.log(V_1 * V_2)
    //     }else if (express.toLowerCase() ===  "minus"){
    //         console.log(V_1 * V_2)
    //     }
    // }
    

}
    }

}

var cal= new Calcult()



cal.execute(30,"-" ,20)




// function createEmployee(name,id, salary){

//     this.name=name;
//     this.id=id;
//     this.salary=salary;


//     this.work=function(){
//         
//         console.log(this.name)

//     }

    
// }


// var e = new Object();

// e.set=createEmployee;


// e.set('Sanjay',4,50000);



// e.work()

