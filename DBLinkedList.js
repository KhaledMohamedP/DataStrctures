/*
       |--------HEAD-------|        |-------------------|        |-------------------|    
null<---Prev | K:V  | NEXT----><----Prev | K:V  | NEXT----><----Prev | Value | NEXT---->NULL
       |-------------------|        |-------------------|        |-------------------|    
 */
'use strict';

function DBLinkedList() {
    this.size = 0;
    this.head = new Node('', '', null, null);

    function Node(key, val, prev, next) {
        this.key = key;
        this.value = val;
        this.next = next;
        this.prev = prev;
    }

    this.createNode = function(key, val, prev, next) {
        return new Node(key, val, prev, next);
    }
}
DBLinkedList.prototype = {
    add: function(key, val, item) {
        var node = this.head;
        var prevNode = null;
        //loop until we reach the last element || find item
        while (node.next !== null) {
            node = node.next;
            if (node.key === item) {
                break;
            }
        }

        node.next = this.createNode(key, val, node, node.next);
        this.size++;
    },
    print: function() {
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
            console.log(node.key);
        }
    },
    remove: function(key) {
        var node = this.head,
            last;
        while (node.next !== null) {
            last = node;
            node = node.next;
            if (node.key === key) {
                //last node point to the next node 
                //while removing the current node  -- - ---
                last.next = node.next;
                node.next.prev = last;
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
            if (node.key === item) {
                return true;
            }
        }
        return false;
    },
    foreach: function(func) {
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
            func(node.key);
        }
    }
};


//Testing 
var list = new DBLinkedList();

list.add('Apple');
list.add('Orange');
list.add('Tomato', 'Apple');
list.add('Egg', 'Tomato');

list.remove('Apple');

list.print();

console.log(list.has('Tomato'));

console.log(list.head)
