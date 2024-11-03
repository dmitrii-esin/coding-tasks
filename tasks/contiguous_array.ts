// 525. Contiguous Array (Medium)

// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Example 1:
// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// Example 2:
// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

// function findMaxLength(nums: number[]): number {
//   // what about intuitive brute-force solution?
//   let ans = 0;

//   for (var i = 0; i < nums.length; i++) {
//     let pair = [0, 0];

//     // go to the left and check sbarrays
//     for (let j = i; j > -1; j--) {
//       if (nums[j] === 0) {
//         pair[0] += 1;
//       } else {
//         pair[1] += 1;
//       }

//       // check pair and update
//       if (pair[0] === pair[1]) {
//         ans = Math.max(ans, j - i + 1);
//       }
//     }

//     pair = [0, 0];

//     // go to the left and check sbarrays
//     for (let k = i; k < nums.length; k++) {
//       // console.log("!!i, k", i, k);
//       if (nums[k] === 0) {
//         pair[0] += 1;
//       } else {
//         pair[1] += 1;
//       }

//       // check pair and update
//       if (pair[0] === pair[1]) {
//         ans = Math.max(ans, k - i + 1);
//       }
//     }
//   }

//   return ans;
// }

function findMaxLength(nums: number[]): number {
  // Use a single map to track the difference between the number of
  // 1s and 0s seen so far as you iterate through the array.
  // The key in the map will be the difference, and the value will be
  // the earliest index where this difference was observed.

  // The algorithm works as follows:
  // 1. Initialize a map (countMap) to store the balance of 1s and 0s,
  // starting with 0 at index -1 (indicating that before any elements are processed,
  // the balance is zero).
  // 2. As you iterate through the array, increment or decrement a balance variable
  // depending on whether the current element is a 1 or a 0.
  // 3. For each balance value:
  //     - If it's already in the map, calculate the length of the subarray between
  //     the current index and the first index where this balance was observed.
  //     Update the maximum length if this subarray is longer than the previously found ones.
  //     - If it's not in the map, add it with the current index as its value.
  // 4. Return the maximum length found.

  let maxLen = 0;
  let balance = 0;

  // Initialize to handle the case when the subarray starts from index 0
  const countMap = new Map([[0, -1]]);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      balance -= 1;
    } else {
      balance += 1;
    }

    if (countMap.has(balance)) {
      //@ts-ignore
      maxLen = Math.max(maxLen, i - countMap.get(balance));
    } else {
      countMap.set(balance, i);
    }
  }

  return maxLen;
}

console.log(
  "!!findMaxLength([0,0,1,0,0,0,1,1])",
  findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])
); // 6
console.log("!!findMaxLength([0,1])", findMaxLength([0, 1])); // 2
console.log("!!findMaxLength([0,1,0])", findMaxLength([0, 1, 0])); // 2
console.log(
  "!!findMaxLength([0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1] )",
  findMaxLength([0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1])
); // 18
console.log(
  "!!findMaxLength([0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1])",
  findMaxLength([
    0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 0, 1,
  ])
); // 22
