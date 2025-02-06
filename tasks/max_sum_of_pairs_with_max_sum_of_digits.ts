// 2342. Max Sum of a Pair With Equal Sum of Digits

// You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

// Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

// Example 1:
// Input: nums = [18,43,36,13,7]
// Output: 54
// Explanation: The pairs (i, j) that satisfy the conditions are:
// - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
// - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
// So the maximum sum that we can obtain is 54.

// Example 2:
// Input: nums = [10,12,19,14]
// Output: -1
// Explanation: There are no two numbers that satisfy the conditions, so we return -1.

function maximumSum(nums: number[]): number {
  let max = -1;
  const hash = new Map();

  nums.forEach((num, idx) => {
    const sumIfDigits = String(num)
      .split("")
      .reduce((acc, curr) => Number(acc) + Number(curr), 0);

    if (hash.has(sumIfDigits)) {
      // If there's already a number with the same sum of digits, calculate the potential max sum
      max = Math.max(max, num + hash.get(sumIfDigits));
      // Update the stored value to the maximum number for this sum of digits
      hash.set(sumIfDigits, Math.max(num, hash.get(sumIfDigits)));
    } else {
      // Store the number as the first occurrence of this sum of digits
      hash.set(sumIfDigits, num);
    }
  });

  return max;
}

console.log("!!maximumSum([18,43,36,13,7]))", maximumSum([18, 43, 36, 13, 7]));
// 54 (1 + 8 === 3 + 6, 18 + 36 = 54)
