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
