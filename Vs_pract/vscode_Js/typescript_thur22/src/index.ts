function tscall(name:string, num:number){

    console.log(`${name} is my${num}`)
}


tscall("kiran",1)



namespace PeopleManagemet{

class People{
    private _name :string;
    private _email :string;
    constructor(name:string,email:string){
 this._name =name;
 this._email=email


    }
}



}