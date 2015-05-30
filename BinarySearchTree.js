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

function BinarySearchTree(func) {
    function node(obj) {
        this.obj = obj;
        this.rightNode = null;
        this.leftNode = null;
        this.count = 0;
    }

    this.createNode = function(val) {
        return new node(val)
    }

    this.root = null;
    this.func = func || function(o){return o}; // Should returns the value need to compare 
}

BinarySearchTree.prototype = {
    add: function(obj) {
        var newNode = this.createNode;
        var size = this.sizeNode;
        var func = this.func; 
        this.root = put(this.root, obj);

        function put(node, obj) {
            if (node == null) {
                return newNode(obj);
            } else if (func(node.obj) > func(obj)) {
                node.leftNode = put(node.leftNode, obj);
            } else if (func(node.obj) < func(obj)) {
                node.rightNode = put(node.rightNode, obj);
            } else {
                node.obj = obj;
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
                arr.push(node.obj);
                inOrder(node.rightNode);
            }
        }

        return arr;
    },
    min: function() {
        var curr = this.root,
            found;
        while (curr !== null) {
            found = curr.obj;
            curr = curr.leftNode;
        }
        return found;
    },
    max: function() {
        var curr = this.root,
            found;
        while (curr !== null) {
            found = curr.obj;
            curr = curr.rightNode;
        }
        return found;
    },
    edges: function(){
        var size = 0; 

        function count(node){
            if(node == null){
                return 0;
            }

            if(node.leftNode == null && node.rightNode == null){
                size++;
            }

            count(node.leftNode);
            count(node.rightNode);
        }

        count(this.root);

        return size; 
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
    has: function(obj) {
        var func = this.func; 
        function search(node, obj) {
            if (node === null) {
                return false;
            } else if (func(node.obj) > func(obj)) {
                return search(node.leftNode, obj);
            } else if (func(node.obj) < func(obj)) {
                return search(node.rightNode, obj);
            } else {
                return true;
            }
        }
        return search(this.root, obj);;
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

var list = new BinarySearchTree(function(o){ return o.size; });

list.add({ value: 'k', size:2});
list.add({ value: 's', size:120});
list.add({ value: 'q', size:300});
list.add({ value: 'a', size:0});
list.add({ value: 'l', size:22});
list.add({ value: 'p', size:-1});


list.order(); // -1, 0, 2, 22, 120, 300  <-- inOrder operation returns an order list of the tree 
list.max();   // 300
list.min();   // -1
list.has({value:'s', size:120}); // true
list.size();  // 6
list.edges(); // 3
console.log(list.order()); // [ { value: 'p', size: -1 }, { value: 'a', size: 0 }, { value: 'k', size: 2 }, { value: 'l', size: 22 }, { value: 's', size: 120 }, { value: 'q', size: 300 } ]
