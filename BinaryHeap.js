function BinaryHeap() {
    this.content = ['ø'];
}

BinaryHeap.prototype = {
    insert: function(elm) {
        this.content.push(elm);
        this.swimUp(this.size() - 1);

        return elm;
    },
    remove: function() {
        var max = this.content[1];
        this.exchange(1, this.size() - 1)
        this.sinkDown(1);
        return this.content.pop();
    },
    swimUp: function(index) {
        var parent = Math.floor(index / 2);
        while (index > 1 && this.less(parent, index)) {
            this.exchange(parent, index);
            index = Math.floor(index / 2);
            parent = Math.floor(index / 2)
        }
    },
    sinkDown: function(k) {
        var N = this.size(),
            j;
        while (2 * k < N) {
            j = 2 * k;
            if (j < N && this.less(j, j + 1)) {
                // j++;
            }
            if (!this.less(k, j)) break;
            this.exchange(k, j);
            k = j;

        }
    },
    less: function(a, b) {
        if (this.content[a] < this.content[b]) {
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

var bh = new BinaryHeap();

// [-, 4,2,1,3]
// [-, 1,2,3,4]



bh.insert('T')
bh.insert('S')
bh.insert('R')
bh.insert('P')
bh.insert('N')
bh.insert('O')
bh.insert('A')
bh.insert('E')
bh.insert('I')
bh.insert('H')
bh.insert('G')

// bh.remove();

bh.print()



// bh.inserct(5)
// bh.insert(2)
// bh.insert(9)
// bh.insert(1)
// bh.insert(10)
// bh.insert(3)


// console.log(bh.content)
// bh.print()

// console.log('begining........')
// console.log(bh.content)
// console.log(bh.remove())
// bh.print()

// console.log('begining........')
// console.log(bh.content)
// console.log(bh.remove())
// bh.print()


// console.log('begining........')
// console.log(bh.content)
// console.log(bh.remove())
// bh.print()

// console.log('begining........')
// console.log(bh.content)
// console.log(bh.remove())
// bh.print()
















// function forEach(darray, action) {
//     try {
//         for (var i = 0; i < array.length; i++)
//             action(array[i]);
//     } catch (exception) {
//         if (exception != Break)
//             throw exception;
//     }
// }

// function BinaryHeap(scoreFunction) {
//     this.content = [];
//     this.scoreFunction = scoreFunction;
// }

// BinaryHeap.prototype = {
//     push: function(element) {
//         // Add the new element to the end of the array.
//         this.content.push(element);
//         // Allow it to bubble up.
//         this.bubbleUp(this.content.length - 1);
//     },

//     pop: function() {
//         // Store the first element so we can return it later.
//         var result = this.content[0];
//         // Get the element at the end of the array.
//         var end = this.content.pop();
//         // If there are any elements left, put the end element at the
//         // start, and let it sink down.
//         if (this.content.length > 0) {
//             this.content[0] = end;
//             this.sinkDown(0);
//         }
//         return result;
//     },

//     remove: function(node) {
//         var length = this.content.length;
//         // To remove a value, we must search through the array to find
//         // it.
//         for (var i = 0; i < length; i++) {
//             if (this.content[i] != node) continue;
//             // When it is found, the process seen in 'pop' is repeated
//             // to fill up the hole.
//             var end = this.content.pop();
//             // If the element we popped was the one we needed to remove,
//             // we're done.
//             if (i == length - 1) break;
//             // Otherwise, we replace the removed element with the popped
//             // one, and allow it to float up or sink down as appropriate.
//             this.content[i] = end;
//             this.bubbleUp(i);
//             this.sinkDown(i);
//             break;
//         }
//     },

//     size: function() {
//         return this.content.length;
//     },

//     bubbleUp: function(n) {
//         // Fetch the element that has to be moved.
//         var element = this.content[n],
//             score = this.scoreFunction(element);
//         // When at 0, an element can not go up any further.
//         while (n > 0) {
//             // Compute the parent element's index, and fetch it.
//             var parentN = Math.floor((n + 1) / 2) - 1,
//                 parent = this.content[parentN];
//             // If the parent has a lesser score, things are in order and we
//             // are done.
//             if (score >= this.scoreFunction(parent))
//                 break;

//             // Otherwise, swap the parent with the current element and
//             // continue.
//             this.content[parentN] = element;
//             this.content[n] = parent;
//             n = parentN;
//         }
//     },

//     sinkDown: function(n) {
//         // Look up the target element and its score.
//         var length = this.content.length,
//             element = this.content[n],
//             elemScore = this.scoreFunction(element);

//         while (true) {
//             // Compute the indices of the child elements.
//             var child2N = (n + 1) * 2,
//                 child1N = child2N - 1;
//             // This is used to store the new position of the element,
//             // if any.
//             var swap = null;
//             // If the first child exists (is inside the array)...
//             if (child1N < length) {
//                 // Look it up and compute its score.
//                 var child1 = this.content[child1N],
//                     child1Score = this.scoreFunction(child1);
//                 // If the score is less than our element's, we need to swap.
//                 if (child1Score < elemScore)
//                     swap = child1N;
//             }
//             // Do the same checks for the other child.
//             if (child2N < length) {
//                 var child2 = this.content[child2N],
//                     child2Score = this.scoreFunction(child2);
//                 if (child2Score < (swap == null ? elemScore : child1Score))
//                     swap = child2N;
//             }

//             // No need to swap further, we are done.
//             if (swap == null) break;

//             // Otherwise, swap and continue.
//             this.content[n] = this.content[swap];
//             this.content[swap] = element;
//             n = swap;
//         }
//     }
// };


// var heap = new BinaryHeap(function(x) {
//     return x.s > this.s;
// });

// [{s:2}, {s:4},  {s:1},  {s:0},{s:2}].forEach(
//     function(n) {
//         heap.push(n);
//     });

// // heap.remove(2);
// // while (heap.size() > 0)
// //   console.log(heap.pop());


// console.log(heap)
