/*
|----HEAD----|    |------------|    |------------|    |------------|    
|Value | NEXT---->|Value | NEXT---->|Value | NEXT---->|Value | NEXT---->NULL
|------------|    |------------|    |------------|    |------------|    
 */
'use strict';

function LinkedList() {
    this.size = 0;
    this.head = new Node('', null);

    function Node(val, next) {
        this.value = val;
        this.next = next;
    }

    this.createNode = function(val, next) {
        return new Node(val, next);
    }
}

LinkedList.prototype = {
    add: function(val, item) {
        var node = this.head;

        //loop until we reach the last element || find item
        while (node.next !== null) {
            node = node.next;
            if (node.value === item) {
                break;
            }
        }

        node.next = this.createNode(val, node.next);
        this.size++;
    },
    print: function() {
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
            console.log(node.value);
        }
    },
    remove: function(val) {
        var node = this.head,
            last;
        while (node.next !== null) {
            last = node;
            node = node.next;
            if (node.value === val) {
                //last node point to the next node 
                //while removing the current node
                last.next = node.next;
                this.size--;
                return node;
            }
        }
        return 'element not found';
    },
    has: function(item) {
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
            if (node.value === item) {
                return true;
            }
        }
        return false;
    },
    foreach: function(func) {
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
            func(node.value);
        }
    }
};


//Testing 
var list = new LinkedList();

list.add('Apple');
list.add('Orange');
list.add('Tomato', 'Apple');
list.add('Egg', 'Tomato');

list.remove('Apple'); //removes 'apple' form the list

list.print();

console.log(list.has('Tomato'));

console.log(list.head);

list.foreach(function(val) {
    if (typeof val === 'string')
        console.log(val.toUpperCase());
    else
        console.log(val)
});
