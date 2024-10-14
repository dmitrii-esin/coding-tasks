// # 1133 Largest Unique Number

// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

// Example 1:
// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

// Example 2:
// Input: nums = [9,9,8,8]
// Output: -1
// Explanation: There is no number that occurs only once.

// Constraints:
// 1 <= nums.length <= 2000
// 0 <= nums[i] <= 1000

// Hint 1
// Find the number of occurrences of each value.

// Hint 2
// Use an array or a hash table to do that.

// Hint 3
// Look for the largest value with number of occurrences = 1.

function largestUniqueNumber(nums: number[]): number {
  const occurrences = new Map();

  for (let num of nums) {
    occurrences.set(num, (occurrences.get(num) || 0) + 1);
  }

  let max = -1;

  occurrences.forEach((value, key) => {
    if (value === 1) {
      max = Math.max(key, max);
    }
  });

  return max;
}

console.log(
  "!!largestUniqueNumber([5,7,3,9,4,9,8,3,1])",
  largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])
); // 8

console.log(
  "!!largestUniqueNumber([9,9,8,8])",
  largestUniqueNumber([9, 9, 8, 8])
); // -1
