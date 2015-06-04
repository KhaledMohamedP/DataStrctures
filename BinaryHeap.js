function BinaryHeap(order, comparable) {
    this.content = ['ø'];
    this.comparable = comparable || function(x){ return x; };
    this.order = order || 'ascending';
}

BinaryHeap.prototype = {
    insert: function(elm) {
        this.content.push(elm);
        this.swimUp(this.size() - 1);
        return elm;
    },
    remove: function() {
        if(this.size() == 1) return null; 
        this.exchange(1, this.size() - 1)
        var max = this.content.pop();
        this.sinkDown(1);
        return max;
    },
    swimUp: function(index) {
        var parent = Math.floor(index / 2);
        while (index > 1 && this.compare(parent, index)) {
            this.exchange(parent, index);
            index = Math.floor(index / 2);
            parent = Math.floor(index / 2)
        }
    },
    sinkDown: function(k) {
        var N = this.size() - 1,
            j;
        while (k * 2 <= N) {
            j = 2 * k;
            if (j < N && this.compare(j, j + 1)) j++;
            if (!this.compare(k, j)) break;
            this.exchange(k, j);
            k = j;
        }//this function was taken from Algorithm 4th edition by sedgewick rob 
    },
    compare: function(a, b){
        var elmA = this.comparable(this.content[a])
        var elmB = this.comparable(this.content[b])
        if(this.order == 'ascending'){
            return this.less(elmA, elmB);
        }else{
            return this.biger(elmA, elmB);
        }
    },
    less: function(a, b) {
        if (a < b) {
            return true;
        } else {
            return false;
        }
    },
    biger: function(a, b) {
        if (a > b) {
            return true;
        } else {
            return false;
        }
    },
    exchange: function(a, b) {
        var temp = this.content[a]
        this.content[a] = this.content[b];
        this.content[b] = temp;
    },
    size: function() {
        return this.content.length;
    },
    print: function() {
        for (var i = 1; i < this.content.length; i++) {
            var childL = (2 * i);
            var childR = (2 * i) + 1;
            if (this.content[childL] || this.content[childR])
                console.log(this.content[i], this.content[childL], this.content[childR])
        }
    }

};

//Character 
var ch = new BinaryHeap();  // Default Ascending, and compares the input 

ch.insert('T');
ch.insert('S');
ch.insert('R');
ch.insert('P');
ch.insert('N');
ch.insert('O');
ch.insert('A');
ch.insert('E');
ch.insert('I');
ch.insert('H');
ch.insert('G');

ch.remove(); // T
ch.remove(); // S
ch.remove(); // R
ch.remove(); // P
ch.remove(); // O
ch.remove(); // N
ch.remove(); // I
ch.remove(); // H
ch.remove(); // G
ch.remove(); // E
ch.remove(); // A

// Object
var obj = new BinaryHeap('descending', function(x){ return x.age; }); 

obj.insert({'name': 'John', 'age': 25})
obj.insert({'name': 'Mike', 'age': 21})
obj.insert({'name': 'Aisha', 'age': 33})
obj.insert({'name': 'Sarah', 'age': 20})
obj.insert({'name': 'Tom', 'age': 100})
obj.insert({'name': 'Alan', 'age': 18})

obj.remove(); // { name: 'Alan', age: 18 }
obj.remove(); // { name: 'Sarah', age: 20 }
obj.remove(); // { name: 'Mike', age: 21 }
obj.remove(); // { name: 'John', age: 25 }
obj.remove(); // { name: 'Aisha', age: 33 }
obj.remove(); // { name: 'Tom', age: 100 }


exports.BinaryHeap = BinaryHeap; 
