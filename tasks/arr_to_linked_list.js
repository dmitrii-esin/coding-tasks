// Array to Linked list

const data = [111, 222, 333, 444, 555];
// => [[111, [222, [333. [444, 555, []]]]]];
// => { 111: {222: {333: {444: 555: {}}}} }

const processor = (arr) => {
  const [head, ...tail] = arr;

  if (!head) return tail;

  return [head, processor(tail)]
}

const processorRed = (arr) => {
  const reducer = (acc, curr) => {
    return {
      [curr]: {...acc}
    }
  }

  return arr.reduce(reducer, {});
}

console.log(
  JSON.stringify(processorRed(data))
)