//First In First Out
//Array로 표현
//Linked List로 구현

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(p, l) {
  const queue = new Queue();
  for (let i = 0; i < p.length; i += 1) {
    queue.enqueue([p[i], i]);
  }

  p.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < p[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (l === value[1]) {
        return count;
      }
    }
  }
}
