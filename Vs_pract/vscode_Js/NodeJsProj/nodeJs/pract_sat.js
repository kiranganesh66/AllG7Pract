class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }   
}

class LinkedList{
    constructor(){
        this.first=null; //I have an empty list
    }
    
    append(item){
        //Step #1. we got a value; not a node.
        var newNode=new Node(item); //next is null.

        //Situation #1: Appending as the first item of an empty list.
        //Append as the first item.
        if(this.first===null){
            this.first=newNode;
            return ;
        }

        //else
        //Situation #2: Adding at the end of a non-empty list.
        //Append as the next of last item.
        var n=this.first;
        while(n.next){ //while it is not the last node.
            n=n.next; //move towards the last
        }

        //now n is the last node
        n.next=newNode;



    }
    
    toString(){
        var str="LinkedList(\t";
        for(var n=this.first; n ;  n=n.next){
            str+=`${n.data}\t`
        }
        return str+")";
    }

    insert(index, item){
        var newnode = new Node(item)
//    if (list.length()==0){
//     console.log(`wrong index ${list.length() -1}`)
//    }

         if (index == 0){
            newnode.next = this.head;
            this.head = newnode;
            return;
         }
        
        let CurrentNOde  = this.head
         let beforeNode = null
         let count = 0
         
         
         for (var i=0 ; i < index ;  ++i){
            beforeNode = CurrentNOde 
            next.node = CurrentNOde.next
         }


    }

    length(){
        var i=0;
        for(var n=this.first; n; n=n.next)
            i++;
        return i;
    }

    remove(index){
        //remove item at given index
        if(index>=this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

        //Case #1 removing item 0
        if(index==0){
            var value=this.first.data;
            this.first=this.first.next;
            return value;
        }

        //Case 2 removing non-0 item
        //reach the n-1 position
        var n=this.first;
        for(var i=0; i<index-1; i++)
            n=n.next; //reach to the (n-1)th node

        var value=n.next.data; //save the data to be removed
        n.next=n.next.next; //skip the node to be removed
        return value;

    }

    get(index){
        if(index>=this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

        var n=this.first;
        for(var i=0;i<index;i++)
            n=n.next; //reach to the right node

        return n.data;

    }

    set(index, item){
        if(index>=this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

        var n=this.first;
        for(var i=0;i<index;i++)
            n=n.next; //reach to the right node

        n.data=item;

    }

    
}



try{



    module.exports.Node=Node;
    module.exports.LinkedList=LinkedList;



}catch(e){

}

const list = new LinkedList();

// list.append(20)
// list.append(40)
// list.append(60)


// list.append(10)
// list.length()
// console.log(list)

function createList(count) { 
    var list = new LinkedList(); 
    for (var i = 1; i <= count; i++) {
        list.append(i); 
    }
    return list; 
} 

function sumList(list) { 
    var result = 0; 
    for (var i = 0; i < list.length(); i++) {
        result += list.get(i); 
    }
    return result; 
} 
 


var start1 = performance.now(); 
var list_k = createList(count); 
var end1 = performance.now(); 
console.log( end1 - start1);
console.log(list_k)


var start2 = performance.now(); 
var result = sumList(list); 
var end2 = performance.now(); 
console.log( end2 - start2 );
console.log(result)
