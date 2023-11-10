class Queue {
  constructor() {
    this.items = []; //The array to store queue elements
  }

  // Enqueue operation: adds an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue operation: Removes and returns the element from the front of the queue
  dequeue() {
    if (this.items.lenght === 0) {
      return "Underflow"; // If the queue is empty
    }
    return this.items.shift();
  }
  // Front operation: Returns the element at the front of the queue without removing it
  front() {
    if (this.items.lenght === 0) {
      return "Queue is empty"; // if the queue is empty
    }
    return this.items[0];
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to get the size of the queue
  size() {
    return this.items.length;
  }
}

// Usage
const queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log("Queue: ", queue1.items); // [1,2,2]
console.log("Front of the queue: ", queue1.front()); // 1

queue1.dequeue();
console.log("queue after dequeue: ", queue1.items); //[2, 3]
console.log("Is the queue empty? ", queue1.isEmpty()); // false
console.log("Queue size: ", queue1.size()); // 2
