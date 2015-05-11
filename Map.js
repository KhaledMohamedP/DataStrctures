function Map() {
    this.size = 0;
    this.head = new Node('', '', null);

    function Node(key, val, next) {
        this.key = key;
        this.value = val;
        this.next = next;
    }

    this.createNode = function(key, val, next) {
        return new Node(key, val, next);
    }
}

Map.prototype = {
    add: function(key, val) {
        var node = this.head;

        var foundKey = false;
        while (node.next !== null) {
            node = node.next;
            if (node.key === key) {
                foundKey = true;
                node.value = val;
            }
        }
        if (!foundKey) {
            node.next = this.createNode(key, val, null);
            this.size++;
        }
    },
    get: function(key) {
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
            if (node.key === key) {
                return node.value;
            }
        }
        return null;
    },
    print: function() {
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
            console.log(node.key + ' : ' + node.value);
        }
    },
    remove: function(key) {
        var node = this.head;
        while (node.next !== null) {
            last = node;
            node = node.next;
            if (node.key === key) {
                last.next = node.next;
                this.size--;
                var temp = node;
                delete node;
                return temp;
            }
        }

        return 'element not found';
    }
}

// Testing 
var m = new Map();
m.add('A', 'Apple');
m.add('E', 'Earth');
m.print();

console.log(m.head)
