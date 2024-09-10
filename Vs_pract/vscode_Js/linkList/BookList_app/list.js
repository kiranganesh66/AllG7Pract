

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(...items) {
        this._first = null; 
        this._size = 0;
        this._last = null;
        this.append(...items);
    }

    append(...items) {
        for (var item of items) {
            this._append(item);
        }
    }

    _append(item) {
       
        var newNode = new Node(item); 

       
        if (this._first === null) {
            this._first = newNode;
        } else {
           
            this._last.next = newNode;
        }

        this._last = newNode;
        this._size++;
    }

    toString() {
        var str = "LinkedList(\t";
        for (var n = this._first; n; n = n.next) {
            str += `${n.data}\t`;
        }
        return str + ")";
    }

    insert(index, item) {
        index = this._validateIndex(index);
        var newNode = new Node(item);

        if (index == 0) {
            newNode.next = this._first;
            this._first = newNode;
        } else {
            var n = this._locate(index - 1);
            newNode.next = n.next;
            n.next = newNode;
        }

        this._size++;
    }

    length() {
        return this._size;
    }

    remove(index) {
        index = this._validateIndex(index);
        
        if (index == 0) {
            var value = this._first.data;
            this._first = this._first.next;
            return value;
        }

       
        var n = this._locate(index - 1);
        var value = n.next.data; 
        n.next = n.next.next;
        return value;
    }

    get(index) {
        return this._locate(index).data;
    }

    set(index, item) {
        var n = this._locate(index); 
        n.data = item;
    }

    _locate(index) {
        index = this._validateIndex(index);

        var n = this._first;
        for (var i = 0; i < index; i++)
            n = n.next; 
        return n;
    }

    _validateIndex(index) {
        if (typeof index !== "number")
            throw new Error("Invalid Index: Not a number");

        if (index < 0)
            index = this.length() + index;

        if (index < 0 || index >= this.length())
            throw new Error(`Invalid Index: ${index}. Valid indices: [0-${this.length() - 1}]`);

        return index;
    }

    indexOf(item) {
        var i = 0;
        for (var n = this._first; n; n = n.next) {
            if (n.data === item)
                return i;
            i++;
        }

        return -1;
    }






    find(isMatch) {
        var result = new LinkedList();

        for (var i = 0; i < this.length(); i++) {
            var item = this.get(i);
            if (isMatch(item)) {
                result.append(item);
            }
        }

        return result;
    }

    



}

try {
    module.exports.Node = Node;
    module.exports.LinkedList = LinkedList;
} catch (e) {}
