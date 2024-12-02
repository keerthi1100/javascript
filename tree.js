class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Tree {

    constructor(){
        this.root = null;
    }

    isEmptyTree(){
        return this.root === null;
    }

    insertNodeToTree(value, root){

        const tree = new Node();
        tree.value = value;

        if(root.value > value){

            if(root.left === null){
                root.left = tree;
            }
            else{
                this.insertNodeToTree(value, root.left);
            }
        }
        else{

            if(root.right === null){
                root.right = tree;
            }
            else{
                this.insertNodeToTree(value, root.right);
            }
        }

    }

    insertToTree(value){
        
        if(this.isEmptyTree()){
            const tree = new Node();
            tree.value = value;
            this.root = tree;
        }
        else{
            this.insertNodeToTree(value, this.root)
        }
        
        
    }

    showTree(){
        console.log(this.root);
    }
    
    searchValue(keyVal, root){
        
        if(root === null){
            return false;
        }
        if(keyVal === root.value){
            return  true;
        }

        if(keyVal > root.value){
            return this.searchValue(keyVal, root.right)
        }
        else{
            return this.searchValue(keyVal, root.left)
        }

    }

    showTreeValue (root){

        if(root === null) {
            return null;
        }
        else{
            console.log(root.value);
            this.showTreeValue(root.left);
            this.showTreeValue(root.right);
        }
    }

}

const TreeInstance = new Tree();
TreeInstance.insertToTree(10);
TreeInstance.insertToTree(20);
TreeInstance.insertToTree(5);
TreeInstance.showTreeValue(TreeInstance.root)