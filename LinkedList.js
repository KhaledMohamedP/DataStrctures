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
    add: function(val) {
        var node = this.head;
        //until we reach the last element 
        while (node.next !== null) {
            node = node.next;
        }
        node.next = this.createNode(val, null);
        this.size++;
    },

    print: function() {
        var node = this.head;
        while (node.next !== null) {
            nod
            e = node.next;
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
                //while removing the current node
                last.next = node.next;
                this.size--;
                return node;
            }
        }
        return 'element not found';
    }
};


var list = new LinkedList();


list.add('khaled');

list.add('saleh');

list.add('mohamed');
list.add('ali');

list.remove('mohsamed');

list.print()
