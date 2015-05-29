/*
                 ------------------
                 |    Value       |
                 |    count = 4   |
                 | left --- right |
                 ---/---------\----
                   /           \
       ------------------     ------------------      
	   |    Value = val |     |    Value = val |  
	   |    count = 2   |     |    count = 1   |      
	   | left --- right |     | left --- right |
	   ---/---------\----     ---/---------\----
         /           \          /           \
 ------------------   null     null         null
 |    Value = val |  
 |    count = 1   |  
 | left --- right |  
 ---/---------\----  
   /           \  
 null          null             
 */

function BinarySearchTree() {
    function node(value) {
        this.value = value;
        this.rightNode = null;
        this.leftNode = null;
        this.count = 0;
    }

    this.createNode = function(val) {
        return new node(val)
    }

    this.root = null;
}

BinarySearchTree.prototype = {
    add: function(value) {
        var newNode = this.createNode;
        var size = this.sizeNode;
        this.root = put(this.root, value);

        function put(node, value) {
            if (node == null) {
                return newNode(value);
            } else if (node.value > value) {
                node.leftNode = put(node.leftNode, value);
            } else if (node.value < value) {
                node.rightNode = put(node.rightNode, value);
            } else {
                node.value = value;
            }
            node.count = 1 + size(node.leftNode) + size(node.rightNode)
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
                inOrder(node.leftNode);
                arr.push(node.value);
                inOrder(node.rightNode);
            }
        }

        return arr.join(', ')
    },
    min: function() {
        var curr = this.root,
            found;
        while (curr !== null) {
            found = curr.value;
            curr = curr.leftNode;
        }
        return found;
    },
    max: function() {
        var curr = this.root,
            found;
        while (curr !== null) {
            found = curr.value;
            curr = curr.rightNode;
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
        //         return removing(node.leftNode, value);
        //     } else if (node.value < value) {
        //         return removing(node.rightNode, value);
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
                return search(node.leftNode, value);
            } else if (node.value < value) {
                return search(node.rightNode, value);
            } else {
                return true;
            }
        }
        return search(this.root, value);;
    },
    sizeNode: function(node) {

        function countNodes(node) {
            if (node == null) {
                return 0;
            } else {
                return 1 + countNodes(node.rightNode) + countNodes(node.leftNode);
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
list.add(120);
list.add(300);
list.add(0);
list.add(22);
list.add(-1);


list.order()  // -1, 0, 2, 22, 120, 300  <-- inOrder operation returns an order list of the tree 
list.max() // 300
list.min() // -1
list.has(2) //true
list.size() //6
