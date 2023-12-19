const { Stack, Queue, LinkedList } = require('./dataStructures');

// Example usage
const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
console.log('Stack:', stack);

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log('Queue:', queue);

const linkedList = new LinkedList();
linkedList.insertAtHead('A');
linkedList.insertAtTail('B');
linkedList.insertAtTail('C');
console.log('LinkedList:', linkedList);