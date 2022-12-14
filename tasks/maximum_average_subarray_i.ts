// Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:
// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

// function findMaxAverage(nums: number[], k: number): number {
//   let max = 0;

//   for (let i = 0; i < k; i++) {
//     max += nums[i];
//   }

//   let sum = max;

//   for (let i = k; i < nums.length; i++) {
//     sum = sum - nums[i - k] + nums[i];
//     max = Math.max(max, sum);
//   }

//   return max / k;
// }

function findMaxAverage(nums: number[], k: number): number {
  if (k === 1) return Math.max(...nums);

  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let currentSum = sum;

  for (let j = k; j < nums.length; j++) {
    currentSum = currentSum - nums[j - k] + nums[j];
    sum = Math.max(sum, currentSum);
  }

  return sum / k;
}

console.log(
  "!!findMaxAverage([1,12,-5,-6,50,3], 4)",
  findMaxAverage([1, 12, -5, -6, 50, 3], 4)
); // 12.75000
