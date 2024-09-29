// 2248. Intersection of Multiple Arrays

// iven a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

// Example 1:
// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation:
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

// Example 2:
// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation:
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

// Constraints:
// 1 <= nums.length <= 1000
// 1 <= sum(nums[i].length) <= 1000
// 1 <= nums[i][j] <= 1000

// All the values of nums[i] are unique.

//TOOD:!!! this is my solutons, i've lost simple constraint: All the values of nums[i] are unique.
// this coee should work even if we have no this simplfication
function intersection(nums: number[][]): number[] {
  let currentMap = {};
  let ans = [];

  nums.forEach((numArray: number[], arrayIndex: number) => {
    for (let i = 0; i < numArray.length; i++) {
      if (!currentMap[numArray[i]]) {
        currentMap[numArray[i]] = 1;
      } else {
        currentMap[numArray[i]] += 1;
      }
    }
  });

  for (let j = 0; j < nums.length; j++) {
    const item = nums[j];

    for (let k = 0; k < item.length; k++) {
      if (currentMap[item[k]] === nums.length && !ans.includes(item[k])) {
        ans.push(item[k]);
      }
    }
  }

  ans.sort((a, b) => a - b);

  return ans;
}

//TODO:!!! more effiective solution:
const intersection = (nums) => {
  let counts = new Map();

  for (const arr of nums) {
    for (const x of arr) {
      counts.set(x, (counts.get(x) || 0) + 1);
    }
  }

  let n = nums.length;
  let ans = [];

  for (const [key, val] of counts) {
    if (val == n) {
      ans.push(key);
    }
  }

  ans.sort((a, b) => a - b);

  return ans;
};

function intersection(nums: number[][]): number[] {
  const count = new Map();

  nums.forEach((numArr) => {
    let tempCount = new Map();

    numArr.forEach((num) => {
      if (!tempCount.has(num)) {
        count.set(num, (count.get(num) || 0) + 1);
      }
    });
  });

  const ans: number[] = [];

  count.forEach((value, key) => {
    if (value === nums.length) ans.push(key);
  });

  console.log("!!!count", count);

  // for in/of filter, collect acc

  //const ans: number[] = temp.filter

  //return ans.sort((a, b) => b - a);

  return ans.sort((a, b) => a - b);
}
