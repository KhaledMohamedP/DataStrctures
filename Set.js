'use strict';

function Set() {
    this.list = [];
}

Set.prototype = {
    add: function(elm) {
        if (!this.has(elm))
            this.list.push(elm)

        return elm
    },
    has: function(elm) {
        var index = this.list.indexOf(elm);
        if (index > -1) {
            return true;
        }

        return false;
    },
    remove: function(elm) {
        var index = this.list.indexOf(elm);

        if (index > -1) {
            this.list.splice(index, 1);
            return elm;
        }
    },
    size: function() {
        return this.list.length;
    },
    pop: function() {
        return this.list.pop();
    },
    intersect: function(set) {
        var result = new Set(),
            lrgSet, smlSet;

        //set the larger set and small set accordingly 
        if (this.size() > set.size()) {
            lrgSet = this;
            smlSet = set;
        } else {
            lrgSet = set;
            smlSet = this;
        }

        for (var i = 0; i < this.size(); i++) {
            if (smlSet.has(lrgSet.list[i])) {
                result.add(lrgSet.list[i]);
            }
        }

        return result;
    },
    union: function(set){
        var result = set || new Set(); 
        for (var i = 0; i < this.size(); i++) {
            result.add(this.list[i]);
        };
        return result;
    },
    print: function() {
        console.log(this.list);
    }
}


var list = new Set();

list.add(1);
list.add(2);
list.add(1);
list.add(1);
list.add(3);
list.add(5);
list.add(5);

list.remove(5); //removes 5 form the list 

console.log(list.list)

// console.log(list.pop()); //removes the last element from the set

//experiment intersect of sets 
var newSet = new Set();

newSet.add(1);
newSet.add(2012);
newSet.add(2014);
newSet.add(3);

newSet.intersect(list); //returns a new set with a list property list: [ 1, 3 ]

//experiment union of sets 
console.log(newSet.union(list)); // { list: [ 1, 2, 3, 2014, 2012 ] }



