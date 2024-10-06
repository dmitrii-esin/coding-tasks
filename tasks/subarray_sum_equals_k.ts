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

// brute-force solution
// function subarraySum(nums: number[], k: number): number {
//   let ans = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;

//     for (let j = i; j < nums.length; j++) {
//       currentSum += nums[j];

//       if (currentSum === k) ans += 1;
//     }
//   }

//   return ans;
// }

// 1. the current sum is curr
// 2. there exists a subarray that ends at the current index (it could start anywhere) with a sum of k
// 3. in terms of prefix sums, the prefix sum up to the current index minus the prefix sum up to the start of the subarray with a sum of k (we dont know where this is, but it doesnt matter, as long as it exists) must be curr - k
// for example. let's say nums = [1, 2, 3, 4, 5] and k = 5
// the algorithm goes along the array and puts prefix sums in the dictionary
// so lets say i = 2
// currently we have 1 and 3 in the dictionary
// now, curr = 6 (because prefix sum up to i = 2 is 1 + 2 + 3 = 6)
// we can see that there is a subarray with a sum of k that ends at i = 2. its [2, 3]
// curr - k = 6 - 5 = 1
// 1 is in the dictionary (we saw it before)
// i.e, the prefix sum of all the elements up to i = 2 minus the prefix sum of the elements up to i = 0 is equal to k
// basically, if curr - k is in the dictionary, it necessarily implies that there was a sum of k somewhere.x

// because the current prefix sum is curr. and the difference between the current prefix sum and an earlier prefix sum is always the sum of some other subarray. so curr - (curr - k) = k

function subarraySum(nums: number[], k: number): number {
  let ans = 0;
  let curr = 0;
  const counts = new Map([[0, 1]]);

  for (let i = 0; i < nums.length; i++) {
    //TODO: calculate prefix sum
    curr += nums[i];

    //TODO: update ans (eсли нужны остаток в мапе есть, значит текущий подмассив подходит)
    ans += counts.get(curr - k) || 0;

    //TODO: update counts
    counts.set(curr, (counts.get(curr) || 0) + 1);

    // console.log("!!i, curr, counts", i, curr, counts);
  }

  return ans;
}

// prefix sum optimized solution
// function subarraySum(nums: number[], k: number): number {
//   //TODO: calculate prefix sum
//   const counts = new Map([[0, 1]]);
//   let currentSum = 0;
//   let ans = 0;

//   for (let i = 0; i < nums.length; i++) {
//     currentSum += nums[i];

//     // To find the sum of the subarray from index 2 to 3, we can subtract prefixSum[1] from prefixSum[3].

//     ans += counts.get(currentSum - k) || 0;

//     counts.set(currentSum, (counts.get(currentSum) || 0) + 1);
//     // if (counts.has(currentSum - k)) {
//     //   ans += 1;
//     // }
//   }

//   return ans;
// }

// Instead of generating the entire prefix array, we iterate through nums while keeping a running sum and track how many times we've seen each prefix sum with a frequency hash. At each iteration, deduce if our target sum (runningSum - k) has been seen before - if so, increment a global count - and then update the frequency hash. Finally, return the count.
// Why do we initialize the hash with {0:1}? Well, this handles the edge case when targetSum is 0, since this sum does in a sense exist - following the above logic, the number of subarrays with sum 0 is 1, as this is the empty subarray, no elements.
// function subarrarySum(nums, k) {
//   let runningSum = 0;
//   let count = 0;
//   const sumFrequency = { 0: 1 };
//   for (let i = 0; i < nums.length; i++) {
//     runningSum += nums[i];
//     let targetSum = runningSum - k;
//     if (sumFrequency[targetSum]) {
//       count += sumFrequency[targetSum];
//     }
//     if (!sumFrequency[runningSum]) {
//       sumFrequency[runningSum] = 0;
//     }
//     sumFrequency[runningSum] += 1;
//   }
//   return count;
// }

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
console.log("!!subarraySum([1,2,3], 3)", subarraySum([1, 2, 3], 3)); // 2
console.log(
  "!!subarraySum([1, 7, 2, 10, 11, 3, 4, 2, 2, 8, 50, 4, 5, 3, 1, 4], 8)",
  subarraySum([1, 7, 2, 10, 11, 3, 4, 2, 2, 8, 50, 4, 5, 3, 1, 4], 8)
); // 5

const permute = (s: string): string[] => {
  const arr = s.split("");

  let ans: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const newArr = arr.slice();

      if (i !== j) {
        const temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;

        ans.push(newArr.join().replaceAll(",", ""));
      }
    }
  }

  return ans;
};

console.log('!!permute("ABC")', permute("ABC")); // [“ABC”,“ACB”,“BAC”,“BCA”,“CBA”,“CAB”]
