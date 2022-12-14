// Example 3: Given two sorted integer arrays arr1 and arr2,
// return a new array that combines both of them and is also sorted.

// my solution
export const combine = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    console.log("!!i, j, result", i, j, result);

    if (i >= arr1.length) {
      result.push(arr2[j]);
      j++;
    } else if (j >= arr2.length) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      result.push(arr2[j]);
      i++;
      j++;
    } else if (arr1[i] >= arr2[j]) {
      result.push(arr2[j]);
      result.push(arr1[i]);
      i++;
      j++;
    }
  }

  return result;
};

console.log(
  "!!combine([1,4,7,20], [3,5,6])",
  combine([1, 4, 7, 20], [3, 5, 6]) // [1,3,4,5,6,7,20]
);

// leetcode solution

// function fn(arr1, arr2):
//     i = j = 0
//     while i < arr1.length AND j < arr2.length:
//         Do some logic here depending on the problem
//         Do some more logic here to decide on one of the following:
//             1. i++
//             2. j++
//             3. Both i++ and j++

//     // Step 4: make sure both iterables are exhausted
//     // Note that only one of these loops would run
//     while i < arr1.length:
//         Do some logic here depending on the problem
//         i++

//     while j < arr2.length:
//         Do some logic here depending on the problem
//         j++

// /**
//  * @param {number[]} arr1
//  * @param {number[]} arr2
//  * @return {number[]}
//  */
// var combine = function(arr1, arr2) {
//   // ans is the answer
//   let ans = [];
//   let i = 0, j = 0;

//   while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//           ans.push(arr1[i]);
//           i++;
//       } else {
//           ans.push(arr2[j]);
//           j++;
//       }
//   }

//   while (i < arr1.length) {
//       ans.push(arr1[i]);
//       i++;
//   }

//   while (j < arr2.length) {
//       ans.push(arr2[j]);
//       j++;
//   }

//   return ans;
// }
