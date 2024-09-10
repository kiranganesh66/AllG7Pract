class Node{
    constructor(value,next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor(...values) {
        this._first = null;
        this._last = null;
        this._size = 0;
        this.currentindex = 0;
        this.current = null;
        l
        
        // this.append(values)

        for (var value of values) {
            this._append(value);
        }
    }

    append(...values) {
        // console.log('append', values);

        for (var value of values) {
            this._append(value);
        }
    }

    isEmpty() {
        return this._size === 0;
    }

    _append(value) {
        // var newNode = {
        //     value: value,
        //     next: null
        // };

        var newNode = new Node(value);

        if (this.isEmpty())
            this._first = newNode;
        else
            this._last.next = newNode;


        this._last = newNode;
        this._size++;
    }

    _validateIndex(index) {

        if (typeof index !== 'number')
            throw new TypeError('Index must be a number');

        if (index < 0)
            index += this._size;

        if (index < 0 || index >= this._size)
            throw new Error(`Index out of range: ${index}. valid range=(0-${this._size - 1})`);

        return index;
    }

    _locate(index) {
        index = this._validateIndex(index);
       var lastindex = this.currentnode :  
        var current = this._first  
       var str= 0

        
        // if(currentindex >= lastindex){
        //    for(var i = n._first ; n ; n._last)

        } 
     



//       var k =null;
//         this.forEach((v,i)=>{
//             if (index === i){
                
//                 k = v
                
//             }
//    return k




        // })     

        // var current = this._first;
        // for (var i = 0; i < index; i++)
        //     current = current.next;

        // return current;
    }

    size() {
        return this._size;
    }

    get(index) {
        return this._locate(index);
    }

    set(index, value) {
        this._locate(index).value = value;
    }

    insert(index, value) {
        index= this._validateIndex(index);
        
        var newNode=new Node(value);
        
        
        if(index===0){
            newNode.next=this._first;
            this._first=newNode;
        }else{
            var n = this._locate(index - 1);
            newNode.next=n.next;
            n.next=newNode;
        }
        this._size++;
        
    }

    remove(index) {
        this._validateIndex(index);
        var p = this._locate(index - 1);
        console.log('p', p);

        //now remove p.next
        p.next = p.next.next;

        return p.value;

    }

    toString(){
        var str="LinkedList(\t";
        for(var n=this._first; n ;  n = n.next){
            str+=n.value+"\t";
        }

        return str+")";
    }

    forEach(execute){
        var i=0;
        for(var n=this._first; n ;  n = n.next){
            execute(n.value,i);
            i++;
        }
    }

    filter(matcher){
        var result=new LinkedList();

        this.forEach( v=>{
            if(matcher(v)){
                result.append(v);
            }
        });

        return result;
    }

    find(matcher) {
        let filterv = null;
        this.forEach((value, index) => {
            if (matcher(value,index)) {
                filterv = value;
            }
        }, (value) => matcher(value));
        return filterv;
    }

    map(mapper){
        var result=new LinkedList();

        this.forEach( (v,i)=>{
            result.append(mapper(v));
        });

        return result;
    }


}

try{
    module.exports.LinkedList=LinkedList;
    module.exports.Node=Node;
}catch(e){

}

// var k = new LinkedList()
// k.execute(append('The Accursed God','Vivek Dutta Mishra',299,4.6, 'cover.png'))



















// currentIndex 0
// currentPosition null


// _locate(index) {
//     index = this._validateIndex(index);

//     let current, previous = null;
//     if(index == this.currentIndex){
//         if(this.currentPosition!==null){
//             return this.currentPosition;
//         }else{
//             this.currentPosition = this._first;
//             return this._first;
//         }
//     }
//     if (index > this.currentIndex) {
//         current = this.currentPosition;
//         for (let i = this.currentIndex; i <= index; i++) {
//             previous = current;
//             current = current.next;
//         }
//     } else {
//         current = this._first;
//         for (let i = 0; i <= index; i++) {
//             previous = current;
//             current = current.next;
//         }
//     }

//     this.currentIndex = index;
//     this.currentPosition = previous;

//     return previous;
// }
