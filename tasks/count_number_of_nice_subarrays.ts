// Count Number of Nice Subarrays

// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

// Example 1:
// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

// Example 2:
// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There is no odd numbers in the array.

// Example 3:
// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

function numberOfSubarrays(nums: number[], k: number): number {
  let counts = new Map([[0, 1]]);
  let ans = 0;
  let curr = 0;

  for (const num of nums) {
    curr += num % 2;
    ans += counts.get(curr - k) || 0;
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }

  return ans;
}

console.log("!!subarraySum([1,1,2,1,1],, 3)", subarraySum([1, 1, 2, 1, 1], 3)); // 2
console.log(
  "!!subarraySum([2,2,2,1,2,2,1,2,2,2], 2)",
  subarraySum([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)
); // 16
