// Squares of a Sorted Array

// > Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// function sortedSquares(nums: number[]): number[] {
//   const result: number[] = [];

//   let start = 0;
//   let end = nums.length - 1;

//   for (let i = end; i >= 0; i--) {
//     if (Math.abs(nums[start]) < Math.abs(nums[end])) {
//       const square = nums[end] * nums[end];
//       result[i] = square;
//       end--;
//     } else {
//       const square = nums[start] * nums[start];
//       result[i] = square;
//       start++;
//     }
//   }

//   return result;
// }

function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;

  let res: number[] = [];

  let insertIndex = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[insertIndex] = nums[left] * nums[left];
      left++;
    } else {
      res[insertIndex] = nums[right] * nums[right];
      right--;
    }

    insertIndex--;
  }

  return res;
}

console.log(
  "!!sortedSquares([-4,-1,0,3,10])",
  sortedSquares([-4, -1, 0, 3, 10])
); // [0,1,9,16,100]
