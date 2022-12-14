// Two Sum II - Input Array Is Sorted

// Medium

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// function twoSumV_1(numbers: number[], target: number): number[] {
//   let slowPointer = 0;
//   let fastPointer = 1;

//   while (slowPointer < numbers.length) {
//     if (
//       slowPointer !== fastPointer &&
//       numbers[slowPointer] + numbers[fastPointer] === target
//     ) {
//       return [slowPointer + 1, fastPointer + 1];
//     } else {
//       if (fastPointer === numbers.length - 1) {
//         slowPointer = slowPointer + 1;
//         fastPointer = 0;
//       } else {
//         fastPointer = fastPointer + 1;
//       }
//     }
//   }

//   return [-1, -1];
// }

function twoSum(numbers: number[], target: number): number[] {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    if (numbers[low] + numbers[high] === target) {
      return [low + 1, high + 1];
    }

    if (numbers[low] + numbers[high] > target) {
      high--;
    }

    if (numbers[low] + numbers[high] < target) {
      low++;
    }
  }

  return [-1, -1];
}

console.log(
  "!!SHOLD BE [1,2] twoSum([2,7,11,15], 9)",
  twoSum([2, 7, 11, 15], 9)
);
console.log("!!SHOLD BE [1,3] twoSum([2,3,4], 6)", twoSum([2, 3, 4], 6));

//TODO:!!! hash map approach

// const twoSum = function (nums, target) {
//   const hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];

//     if (hash[complement] !== undefined) {
//       return [hash[complement], i];
//     }

//     hash[nums[i]] = i;
//   }

//   return [-1, -1];
// };

//TODO:!!! two pointer approach approach
// function twoSum(numbers: number[], target: number): number[] {
//   let left = 0;
//   let right = numbers.length - 1;

//   while (left < right) {
//       const product = numbers[left] + numbers[right];

//       if (product === target) {
//           return [left + 1, right + 1];
//       } else if (product < target) {
//           left += 1;
//       } else if (product > target) {
//           right -= 1;
//       }
//   }

//   return [-1, -1];
// };
