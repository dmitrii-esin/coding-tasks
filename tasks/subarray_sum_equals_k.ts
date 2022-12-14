// Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

function subarraySum(nums: number[], k: number): number {
  let ans = 0;
  let curr = 0;
  let counts = new Map([[0, 1]]);

  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];

    ans += counts.get(curr - k) || 0;
    counts.set(curr, counts.get(curr) || 0 + 1);
  }

  return ans;
}

console.log("!!subarraySum([1,1,1], 2)", subarraySum([1, 1, 1], 2)); // 2
console.log("!!subarraySum([1,2,3], 3)", subarraySum([1, 2, 3], 3)); // 2
console.log(
  "!!subarraySum([1, 7, 2, 10, 11, 3, 4, 2, 2, 8, 50, 4, 5, 3, 1, 4], 8)",
  subarraySum([1, 7, 2, 10, 11, 3, 4, 2, 2, 8, 50, 4, 5, 3, 1, 4], 8)
); // 5
