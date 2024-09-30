// Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

// # Algorithm
// 1. Calculate the cumulative sum for every index while traversing the array.
// 2. For every sum, check how many times the sum minus kk has appeared before. This will give the number of times a subarray with sum kk ended at the current index.
// 3. Use the hashmap to keep track of the frequency of each cumulative sum.

// # Explanation
// The cumulative sum up to an index is essentially the sum of all numbers before that index. If two cumulative sums (up to index ii and jj) have a difference of kk, then the subarray between ii and jj has a sum of kk.
// We use the hashmap to keep track of the frequencies of each cumulative sum. This way, we can quickly check the number of subarrays ending at an index with a sum of kk.

// # Conclusion
// The “Subarray Sum Equals K” problem demonstrates the power of cumulative sums and hashmap-based techniques to efficiently solve array-based challenges. By looking at the problem through the lens of cumulative sums, we can transform a seemingly complex problem into one that is easily solvable using basic data structures. Such problems emphasize the significance of understanding the underlying properties of data and crafting algorithms accordingly.

function subarraySum(nums: number[], k: number): number {
  let ans = 0;

  //TODO:!!! let's start with brute-force solution

  return ans;
}

// # Solution
// function subarraySum(nums: number[], k: number): number {
//   let ans = 0;
//   let curr = 0;
//   let counts = new Map([[0, 1]]);

//   for (let i = 0; i < nums.length; i++) {
//     curr += nums[i];

//     ans += counts.get(curr - k) || 0;
//     counts.set(curr, counts.get(curr) || 0 + 1);
//   }

//   return ans;
// }

console.log("!!subarraySum([1,1,1], 2)", subarraySum([1, 1, 1], 2)); // 2
// console.log("!!subarraySum([1,2,3], 3)", subarraySum([1, 2, 3], 3)); // 2
// console.log(
//   "!!subarraySum([1, 7, 2, 10, 11, 3, 4, 2, 2, 8, 50, 4, 5, 3, 1, 4], 8)",
//   subarraySum([1, 7, 2, 10, 11, 3, 4, 2, 2, 8, 50, 4, 5, 3, 1, 4], 8)
// ); // 5
