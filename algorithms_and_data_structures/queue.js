// I. JS
const queue = [];
// insert elements (enqueue)
queue.push('one'); 
queue.push('two');
console.log(queue); // ['one', 'two']
// access last
console.log(queue[0]); // "one"
// remove last (dequeue)
queue.shift();
console.log(queue); // ['two']

// II. Low-level
const Queue = () => {
  const Node = data => ({ data, next: null, prev: null });
  let head = null;
  let tail = null;
  
  return {
    enqueue,
    dequeue,
    peek,
  };
};

const enqueue = data => {
  if (head == null) {
    head = Node(data);
    tail = head;
    return head;
  }
  const newNode = Node(data);
  newNode.next = head;
  head.prev = newNode;
  head = newNode;
  return head;
};

const dequeue = () => {
  if (tail === null) return null;
  const tailData = tail.data;
  if (tail.prev === null) {
    tail = null;
    head = null;
    return tailData;
  }
  tail.prev.next = null;
  tail = tail.prev;
  return tailData;
};

const peek = () => tail ? tail.data : null;