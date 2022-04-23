// Array Partition I

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Example 1:

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.
// Example 2:

// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

// const checkUniqPair = (pairs: number[][], pair: number[]): boolean => {
//   return pairs.some((prevPair) => {
//     const [firstA, secondA] = prevPair;
//     const [firstB, secondB] = pair;

//     if (
//       (firstA === firstB && secondA === secondB) ||
//       (firstA === secondB && secondA === firstB)
//     ) {
//       return true;
//     }

//     return false;
//   });
// };

// const hasSimiliarPair = (pairs: number[][], pair: number[]): boolean => {
//   if (pairs.length === 0) return false;

//   return pairs.every((p) => {
//     const [a, b] = p;
//     const [c, d] = pair;

//     return a === b || a === c || a === d || b === c || b == d;
//   });
// };

// function arrayPairSum(nums: number[]): number {
//   const listsOfPairs: number[][] = [];
//   let listOfPairs: number[][] = [];

//   let slowPointer = 0;
//   let fastPointer = 1;

//   while (slowPointer < nums.length) {
//     const pair: number[] = [nums[slowPointer], nums[fastPointer]];

//     const isUniqPair = checkUniqPair(listsOfPairs, pair);

//     if (slowPointer !== fastPointer && !isUniqPair) listOfPairs.push(pair);

//     if (fastPointer === nums.length - 1) {
//       listsOfPairs.push(...listOfPairs);
//       slowPointer = slowPointer + 1;
//       fastPointer = 0;
//       listOfPairs = [];
//     }

//     fastPointer = fastPointer + 1;
//   }

//   let i = 0;
//   let j = listsOfPairs.length - 1;

//   let product = 0;

//   while (i < j) {
//     const [a, b] = listsOfPairs[i];
//     const [c, d] = listsOfPairs[j];

//     console.log("!!a, b, c, d", a, b, c, d);

//     const guess = Math.min(a, b) + Math.min(c, d);

//     if (guess > product) product = guess;

//     i++;
//     j--;
//   }

//   // console.log("!!listsOfPairs, product", listsOfPairs, product);

//   return product;
// }

const arrayPairSum = function (nums: number[]): number {
  return nums
    .sort((a, b) => a - b)
    .filter((item, index) => index % 2 == 0)
    .reduce((prev, curr) => prev + curr, 0);
};

console.log(
  "!!arrayPairSum([1,4,3,2]) === 4",
  arrayPairSum([1, 4, 3, 2]) === 4
);
console.log(
  "!!arrayPairSum([6,2,6,5,1,2]) === 9",
  arrayPairSum([6, 2, 6, 5, 1, 2]) === 9
);
