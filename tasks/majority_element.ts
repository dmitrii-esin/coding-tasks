// Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

function majorityElement(nums: number[]): number {
  const count = Math.ceil(nums.length / 2);
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const current = hash[nums[i]];

    if (!current) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] = current + 1;
    }

    const newCurrent = hash[nums[i]];

    if (!!newCurrent && newCurrent >= count) {
      return nums[i];
    }
  }

  return -1;
}

console.log(
  "!!SHOUD BE 3: majorityElement([3,2,3])",
  majorityElement([3, 2, 3])
);
