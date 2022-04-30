const maxSumOfThree = (arrayInput) => {
  const reducer = (previous, current) => previous + current;
  let currentSum = arrayInput.slice(0, 3).reduce(reducer);
  let highestSum = currentSum;

  for (let i = 1; i < arrayInput.length - 2; i++) {
    currentSum -= arrayInput[i - 1];
    currentSum += arrayInput[i + 2];
    highestSum = Math.max(highestSum, currentSum);
  }

  return highestSum;
};

const data = [7, 4, 2, 1, 8, 9, 5, 2, 5];

console.log("!!SHOUL BE 22 maxSumOfThree(data)", maxSumOfThree(data));
