/*
|----HEAD----|    |------------|    |------------|    |------------|    
|Value | NEXT---->|Value | NEXT---->|Value | NEXT---->|Value | NEXT----|
|------------|    |------------|    |------------|    |------------|   | 
     ^_________________________________________________________________|
*/ 
'strict mode';

function CRLinkedList() {
    this.size = 0;
    this.head = new Node('head', null);
    this.head.next =  this.head; 

    function Node(val, next) {
        this.value = val;
        this.next = next;
    }

    this.createNode = function(val, next) {
        return new Node(val, next);
    }
}

CRLinkedList.prototype = {
    add: function(val, item) {
        var node = this.head;

        //loop until we reach the last element || find item
        while (node.next.value !== 'head') {
            if (node.value === item) {
                break;
            }
            node = node.next;
        }

        node.next = this.createNode(val, node.next);
        this.size++;
    },
    print: function() {
        var node = this.head;
        while (node.next.value !== 'head') {
            node = node.next;
            console.log(node.value);
        }
    },
    remove: function(val) {
        var node = this.head;
        while (node.next.value !== 'head') {
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
    contains: function(item){
        var node = this.head; 
        while (node.next.value !== 'head') {
            if (node.value === item) {
                return true; 
            }
            node = node.next; 
        }
        return false; 
    },
    foreach: function(func){
        var node = this.head; 
        while (node.next.value !== 'head') {
            node = node.next; 
            func(node.value);
        }
    }
};


//Testing 
var list = new CRLinkedList();

list.add('Apple');
list.add('Orange');
list.add('Tomato', 'Apple');
list.add('Egg', 'Tomato');

list.remove('Apple');

list.print();

console.log(list.contains('Tomato'));

console.log(list.head);

list.foreach(function(val){
    if(typeof val === 'string')
        console.log(val.toUpperCase());
    else 
        console.log(val)
});