'use strict';

function Stack() {
    this.list = [];
}

Stack.prototype = {
    add: function(elm) {
        this.list.push(elm)

        return elm
    },
    size: function() {
        return this.list.length;
    },
    pop: function() {
        return this.list.pop();
    },
    peek: function(){
        return this.list[this.size()-1];
    }
}


var list = new Stack();

list.add(1);
list.add(2);
list.add(1);
list.add(1);
list.add(3);
list.add(5);


console.log(list.list)

console.log(list.pop()); //removes 5 -> the last element from the set

console.log(list.peek()); //return 3 - > the top element of the stack 
