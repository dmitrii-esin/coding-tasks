// Max Consecutive Ones III

// medium

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

// function longestOnes(nums: number[], k: number): number {
//   let zeroes = 0;
//   let left = 0;
//   let max = 0;

//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] === 0) zeroes += 1;

//     while (zeroes > k) {
//       if (nums[left] === 0) {
//         zeroes -= 1;
//       }

//       left += 1;
//     }

//     max = Math.max(max, right - left + 1);
//   }

//   return max;
// }

function longestOnes(nums: number[], k: number): number {
  let max = 0;
  let pending = k;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) pending--;

    if (pending < 0) {
      if (nums[left] === 0) {
        pending++;
      }

      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(
  "!!longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)",
  longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)
); // 6
