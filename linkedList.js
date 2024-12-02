class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
    }
    value = [];
    
    isEmptyList(){
        return this.head === null;
    }

    insetNodeToList(value, head){
        if(head.next === null){
            const node = new Node();
            node.value = value;
            head.next = node;
        }
        else {
            this.insetNodeToList(value, head.next)
        }
    }

    insertNode(value){
        if(this.isEmptyList()){
            const newNode = new Node(value);
            this.head = newNode;
        }
        else{
            this.insetNodeToList(value, this.head);
        }
    }

    displayNodes(){
        console.log(this.head);
    }

    printList(node){
        if(this.isEmptyList()){
            return [];
        }
        if(node === null){
            // console.log(this.value);
            
            return this.value;
        }
        else {
            // console.log(node.value);
            this.value = [...this.value, node.value];
           return this.printList(node.next);
        }
    }

}

const listone = new LinkedList();
listone.insertNode(10);
listone.insertNode(20);
listone.displayNodes();
console.log(listone.printList(listone.head));