var BinaryHeap = require('./BinaryHeap.js').BinaryHeap;

function maxPQ(comparable){
	return new BinaryHeap('descending', comparable);
}

function minPQ(comparable){
	return new BinaryHeap('ascending', comparable);
}

exports.minPQ = minPQ; 
exports.maxPQ = minPQ;
