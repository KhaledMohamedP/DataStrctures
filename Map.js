function Map() {
    this.size = 0;
    var head = new Node('', '', null);

    function Node(key, val, next) {
        this.key = key;
        this.value = val;
        this.next = next;
    }

    this.add = function(key, val) {
        var node = head;
        var foundKey = false;
        while (node.next !== null) {
            node = node.next;
            if (node.key === key) {
                foundKey = true;
                node.value = val;
            }
        }
        if (!foundKey) {
            node.next = new Node(key, val, null);
            this.size++;
        }
    };

    this.get = function(key) {
        var node = head;
        while (node.next !== null) {
            node = node.next;
            if (node.key === key) {
                return node.value;
            }
        }
        return 'not found';
    };

    this.loop = function() {
        var node = head;
        while (node.next !== null) {
            node = node.next;
            console.log(node.key + ' : ' + node.value);
        }
    };

    this.remove = function(key) {
        var node = head;
        while (node.next !== null) {
            last = node;
            node = node.next;
            if (node.key === key) {
                last.next = node.next;
                this.size--;
                return node;
            }
        }

        return 'element not found';
    };

}
