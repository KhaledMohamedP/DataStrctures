/*
                 ------------------
                 |    Key = key   |
                 |    Value = val |
                 |    count = 4   |
                 | left --- right |
                 ---/---------\----
                   /           \
       ------------------     ------------------  
       |    Key = key   |     |    Key = key   |    
       |    Value = val |     |    Value = val |  
       |    count = 2   |     |    count = 1   |      
       | left --- right |     | left --- right |
       ---/---------\----     ---/---------\----
         /           \          /           \
 ------------------   null     null         null
 |    Key = key   |
 |    Value = val |  
 |    count = 1   |  
 | left --- right |  
 ---/---------\----  
   /           \  
 null          null             
 */

function BinarySearchTree() {
    function node(value, key) {
        this.value = value;
        this.key = key;
        this.right = null;
        this.left = null;
        this.count = 0;
    }

    this.createNode = function(value, key) {
        return new node(value, key)
    }

    this.root = null;
}

BinarySearchTree.prototype = {
    add: function(value) {
        var newNode = this.createNode;
        var size = this.sizeNode;
        this.root = put(this.root, value);

        function put(node, value, key) {
            if (node == null) {
                return newNode(value);
            } else if (node.value > value) {
                node.left = put(node.left, value);
            } else if (node.value < value) {
                node.right = put(node.right, value);
            } else {
                node.value = value;
            }
            node.count = 1 + size(node.left) + size(node.right)
            return node;
        }
    },
    order: function(typeOrder) {
        var arr = [];
        inOrder(this.root);

        function inOrder(node) {
            if (node == null) {
                return;
            } else {
                inOrder(node.left);
                arr.push(node.value);
                inOrder(node.right);
            }
        }

        return arr;
    },
    min: function() {
        var curr = this.root,
            found;
        while (curr !== null) {
            found = curr.value;
            curr = curr.left;
        }
        return found;
    },
    max: function() {
        var curr = this.root,
            found;
        while (curr !== null) {
            found = curr.value;
            curr = curr.right;
        }
        return found;
    },
    remove: function(value) {
        // var s = this.has(value);

        // if (s === false) {
        //     return;
        // }

        //  function removing(node, value) {
        //     if (node === null) {
        //         return false;
        //     } else if (node.value > value) {
        //         return removing(node.left, value);
        //     } else if (node.value < value) {
        //         return removing(node.right, value);
        //     } else {
        //         return node;
        //     }
        // }
        // return removing(this.root, value);
    },
    has: function(value) {

        function search(node, value) {
            if (node === null) {
                return false;
            } else if (node.value > value) {
                return search(node.left, value);
            } else if (node.value < value) {
                return search(node.right, value);
            } else if(node.value == value){
                return true;
            }else{
                return false;
            }
        }
        return search(this.root, value);;
    },
    sizeNode: function(node) {

        function countNodes(node) {
            if (node == null) {
                return 0;
            } else {
                return 1 + countNodes(node.right) + countNodes(node.left);
            }
        }

        return countNodes(node);
    },
    size: function() {
        if (this.root === null) {
            return 0;
        }

        return this.root.count;
    }

};

var list = new BinarySearchTree();

list.add(2);
list.add(4);
list.add(6);
list.add(7);

list.order();
list.max();
list.min();
list.has(2);
list.size();

list.has('d');

var listKV = new BinarySearchTree();

listKV.add('k',234);
listKV.add('h',22);
listKV.add('a',21);
listKV.add('l',223);
listKV.add('e',33);
listKV.add('d',2);
