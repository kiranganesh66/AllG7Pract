class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node in the list
    }
}


class LinkedList {
    constructor() {
        this.head = null; // Head node of the list
    }

    // Method to add a new node at the end of the list
    append(data) {
        const newNode = new Node(data);
        
        if (!this.head) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
        } else {
            // Otherwise, find the last node and set its next to the new node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to display the list elements
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Method to remove the first occurrence of a value
    remove(data) {
        if (!this.head) return;

        // If the head needs to be removed
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        // Find the node to remove
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        // If the node was found, remove it
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Method to insert a node at a specific position
    insertAt(data, position) {
        const newNode = new Node(data);

        if (position === 0) {
            // Insert at the head
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let prev = null;
        let index = 0;

        while (current && index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        if (prev) {
            prev.next = newNode;
            newNode.next = current;
        }
    }

    // Method to find the index of a value
    indexOf(data) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1; // Not found
    }

    // Method to check if the list is empty
    isEmpty() {
        return this.head === null;
    }

    // Method to get the size of the list
    size() {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.display(); // Outputs: 10, 20, 30
list.remove(20);
list.display(); // Outputs: 10, 30
list.insertAt(25, 1);
list.display(); // Outputs: 10, 25, 30
console.log(list.indexOf(25)); // Outputs: 1
console.log(list.isEmpty()); // Outputs: false
console.log(list.size()); // Outputs: 3
