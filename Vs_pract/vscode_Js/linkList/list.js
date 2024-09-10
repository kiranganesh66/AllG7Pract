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
    
    getAll(){
        var n = this.first
        while(n){
            console.log(n.data)
            n= n.next
          
        }
           

           
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
        
        if (index >= this.length()){
           
            return console.log(`Babbu Index Ekuava cheavu ra Chusuko. E 0 -${this.length()-1} number lopu evu `)
        }
        
        if (index == 0){

            newnode.next = this.first
            this.first =newnode
            return
        }

      var count=0
         var n= this.first

     while(count < index-1 ){
                n = n.next
                count++
     }
            newnode.next = n.next
               n.next = newnode
             
return n.next
     
        //  for(var i = 0; i < index-1;i++)
        //     n = n.next

     
    


    }


    length(){
        var i=0;
        // for(var n=this.first; n; n=n.next)
        var  n = this.first
        while( n  ){
            i++;
            n = n.next
            
        }
              
        return i;
    }


    remove(index){
        //remove item at given index
        if(index>=this.length())
            throw new Error(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);


        //Case #1 removing item 0
        if(index==0){
            // var value=this.first.data;
            this.first=this.first.next;
            
            return ;
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
            return console.log(`Invalid Index: ${index}. Valid indiced: [0-${this.length()-1}]`);

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

