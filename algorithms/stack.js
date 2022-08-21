// I. JS
const stack = [];
// insert elements (push)
stack.push("one");
stack.push("two");
console.log(stack); // ['one', 'two']
// access first (peek)
console.log(stack[stack.length - 1]); // "two"
// remove first (pop)
stack.pop();
console.log(stack); // ['one']

// TODO: Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.

class Stack {
  stack = [];
  minimums = [];

  push(data) {
    this.stack.push(data);

    if (this.minimums.length === 0) {
      this.minimums.push(data);
    } else {
      if (data < this.minimums[this.minimums.length - 1]) {
        this.minimums.push(data);
      }
    }
  }

  pop() {
    const val = this.stack.pop();

    if (this.minimums[this.minimums.length - 1] === val) {
      this.minimums.pop();
    }

    return val;
  }

  getMinimum() {
    return this.minimums[this.minimums.length - 1];
  }
}

const st = new Stack();

st.push(8);
st.push(2);
st.push(27);
st.push(28);
st.push(5);

console.log("!!st.getMinimum() === 2", st.getMinimum());

st.push(1);
st.push(3);
st.pop();

console.log("!!st.getMinimum() === 1", st.getMinimum());

// TODO:Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.

class StackOfStacks {
  stacks = [];
  capacity = 3;

  constructor(capacity = 3) {
    this.capacity = capacity;
  }

  push(data) {
    if (this.stacks.length === 0) {
      this.stacks.push([data]);
    } else {
      const lastStack = this.stacks[this.stacks.length - 1];

      if (lastStack.length === this.capacity) {
        this.stacks.push([data]);
      } else {
        lastStack.push(data);
      }
    }
  }

  pop() {
    if (this.stacks.length === 0) throw new Error("Stack is empty");

    const lastStack = this.stacks[this.stacks.length - 1];
    const val = lastStack.pop();

    if (lastStack.length === 0) {
      this.stacks.pop();
    }

    return val;
  }
}

const stOfSt = new StackOfStacks();

stOfSt.push(1);
stOfSt.push(2);
stOfSt.push(3);
stOfSt.push(4);
stOfSt.push(5);
stOfSt.push(6);
stOfSt.push(7);
stOfSt.push(8);

console.log("!!stOfSt", stOfSt); /// !!stOfSt StackOfStacks {
//   stacks: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ],
//   capacity: 3
// }
