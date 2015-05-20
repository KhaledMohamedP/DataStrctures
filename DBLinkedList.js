/*
       |-------------------|        |-------------------|        |-------------------|    
null<---Prev | Value | NEXT----><----Prev | Value | NEXT----><----Prev | Value | NEXT---->NULL
       |-------------------|        |-------------------|        |-------------------|    
 */
'strict mode'

function DBLinkedList() {
    this.size = 0;
    this.head = new Node('', null, null);

    function Node(val, prev, next) {
        this.value = val;
        this.next = next;
        this.prev = prev;
    }

    this.createNode = function(val, prev, next) {
        return new Node(val, prev, next);
    }
}
DBLinkedList.prototype = {
    add: function(val, item) {
        var node = this.head;
        var prevNode = null;
        //loop until we reach the last element || find item
        while (node.next !== null) {
            node = node.next;
            if (node.value === item) {
                break;
            }
        }
        
        node.next = this.createNode(val, node ,node.next);
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
        var node = this.head;
        while (node.next !== null) {
            last = node;
            node = node.next;
            if (node.value === val) {
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
    contains: function(item){
        var node = this.head; 
        while (node.next !== null) {
            node = node.next; 
            if (node.value === item) {
                return true; 
            }
        }
        return false; 
    },
    foreach: function(func){
        var node = this.head; 
        while(node.next !== null){
            node = node.next; 
            func(node.value);
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

console.log(list.contains('Tomato'));

console.log(list.head)
