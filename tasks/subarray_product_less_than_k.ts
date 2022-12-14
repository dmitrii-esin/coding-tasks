// Subarray Product Less Than K

// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:
// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

// Example 2:
// Input: nums = [1,2,3], k = 0
// Output: 0

// Not using sliding window
// function numSubarrayProductLessThanK1(nums: number[], k: number): number {
//   let counter = 0;
//   let product = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < k) counter++;

//     let j = i + 1;

//     product = nums[i];

//     while (j < nums.length) {
//       if (product * nums[j] < k) {
//         product = product * nums[j];
//         j++;
//         counter++;
//       } else {
//         j = nums.length;
//       }
//     }

//     product = 0;
//   }

//   return counter;
// }

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let left = 0;
  let answer = 0;
  let currentProduct = 1;

  for (let right = 0; right < nums.length; right++) {
    currentProduct = currentProduct * nums[right];

    while (left <= right && currentProduct >= k) {
      //TODO: we have to remove invalid product using dividing
      currentProduct = currentProduct / nums[left];
      //TODO: and move the window from invalid position
      left++;
    }

    //TODO: we add the amount of valid amount of arrays here
    answer += right - left + 1;
  }

  return answer;
}

console.log(
  "!!numSubarrayProductLessThanK([10,5,2,6], 100)",
  numSubarrayProductLessThanK([10, 5, 2, 6], 100)
); // 8
