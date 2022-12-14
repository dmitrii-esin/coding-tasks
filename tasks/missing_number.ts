// Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

function missingNumber(nums: number[]): number {
  let min = 0;
  let max = 0;
  let all = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }

    if (nums[i] > max) {
      max = nums[i];
    }

    all[nums[i]] = true;
  }

  const params = {
    min,
    max,
    all,
  };

  for (let j = 0; j < nums.length; j++) {
    const currentNum = nums[j];
    const prev = currentNum - 1;
    const next = currentNum + 1;

    if (currentNum > min && !all[prev]) {
      return prev;
    }

    if (currentNum < max && !all[next]) {
      return next;
    }
  }

  return nums.length;
}

console.log("!!missingNumber([0,1])", missingNumber([0, 1])); // 2
console.log("!!missingNumber([3,0,1])", missingNumber([3, 0, 1])); // 2
console.log(
  "!!missingNumber([9,6,4,2,3,5,7,0,1])",
  missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])
); // 8

// const missingNumber = (nums) => {
//   let sum = 0;
//   let expectedSum = 0;

//   let n = 1; // will be tracking all the natural numbers, 1..|nums| (excluding 0)

//   for (let num of nums) {
//     sum += num;
//     expectedSum += n++;
//   }

//   // missing
//   return expectedSum - sum;
// };
