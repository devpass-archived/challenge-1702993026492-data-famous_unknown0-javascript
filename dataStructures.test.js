const { Stack, Queue, LinkedList } = require('./dataStructures');

test('Stack test', () => {
  const stack = new Stack();
  stack.push('A');
  stack.push('B');
  stack.push('C');

  expect(stack.pop()).toBe('C');
  expect(stack.peek()).toBe('B');
  expect(stack.isEmpty()).toBe(false);
  expect(stack.size()).toBe(2);
});

test('Queue test', () => {
  const queue = new Queue();
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');

  expect(queue.dequeue()).toBe('A');
  expect(queue.peek()).toBe('B');
  expect(queue.isEmpty()).toBe(false);
  expect(queue.size()).toBe(2);
});

// LinkedList test
test('Linked List test', () => {
  const linkedList = new LinkedList();
  linkedList.insertAtHead('A');
  linkedList.insertAtTail('B');
  linkedList.insertAtTail('C');

  expect(linkedList.isEmpty()).toBe(false);
  expect(linkedList.size()).toBe(3);
});