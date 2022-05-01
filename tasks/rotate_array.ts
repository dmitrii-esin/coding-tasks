// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

function rotate(nums: number[], k: number): void {
  const startId = nums.length - k;

  for (let i = startId; i < nums.length; i++) {
    swapLastToFirst(nums);
  }
}

function swapLastToFirst(arr: number[]) {
  const last = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = last;
}

console.log(
  "!!SHOULD BE [5,6,7,1,2,3,4] rotate([1,2,3,4,5,6,7], 3)",
  rotate([1, 2, 3, 4, 5, 6, 7], 3)
);
