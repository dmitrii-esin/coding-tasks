# Coding tasks

> This repo includes my efforts, notes and examples of cracking codings tasks, algorithms and data structures based on **[Leetcode](https://leetcode.com/sunndeath/)** and **[Cracking the coding interview](https://www.crackingthecodinginterview.com/)** book

## Types of algorhitms and what to track

- stable / unstable (sorting by two or more different criteria)
- efficiency or complexity (what to track to check algorithm effectiveness): time and space

## Ways/steps to solve algorithmic problems/exercises
- understand details, constraints and corner cases
- use whitebox/note for brainstorm
- find pattern
- try naive/brute-force -> optimizing
- try to look into problem intuitively (with real life objects context)
- find errors in corner cases (length - 2, i = 1, etc.)
- try use resolving small problem and apply to big problem
- choose appropriate technics or algorithm (iteration, recursion, two-pointer, fast & slow pointers, sliding window, sorting, swapping, divide and conquer, etc.)
- choose appropriate additional data-structures if needed (hash map, array, linked list, queue, stack, tree, additional constant or variable etc.)
- optimize: remove unnecessary work, caching repeatable steps, pre-compute initial data, modularize, think about time vs. space tradeoffs

## List of technics for arrays/strings

- ## two-pointer

> I. Main idea: start the pointers at the edges of the input. Move them towards each other until they meet.

Converting this idea into instructions:
1. Start one pointer at the first index 0 and the other pointer at the last index input.length - 1.
2. Use a while loop until the pointers are equal to each other.
3. At each iteration of the loop, move the pointers towards each other. This means either increment the pointer that started at the first index, decrement the pointer that started at the last index, or both. Deciding which pointers to move will depend on the problem we are trying to solve.


```
function fn(arr):
    left = 0
    right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--
```

> II. Another approach: Move along both inputs simultaneously until all elements have been visited.

Converting this idea into instructions:
1. Create two pointers, one for each iterable. Each pointer should start at the first index.
2. Use a while loop until one of the pointers reaches the end of its iterable.
3. At each iteration of the loop, move the pointers forwards. This means incrementing either one of the pointers or both of the pointers. Deciding which pointers to move will depend on the problem we are trying to solve.
4. Because our while loop will stop when one of the pointers reaches the end, the other pointer will not be at the end when the loop finishes. Sometimes, we need to iterate through all elements - if this is the case, you will need to write extra code here to make sure both iterables are exhausted. 

```
function fn(arr1, arr2):
    i = j = 0

    while i < arr1.length AND j < arr2.length:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. i++
            2. j++
            3. Both i++ and j++

    // Step 4: make sure both iterables are exhausted
    while i < arr1.length:
        Do some logic here depending on the problem
        i++

    while j < arr2.length:
        Do some logic here depending on the problem
        j++
 ```


*There might be a lot of examples with two pointers. It might be two pointers in one input array moving forward together or by different conditions ("slow point" + "fast point") or pointers in two input arrays moving to different locations depends on the problem. This is just main idea of this approch.

- ## sliding window 

> Like two pointers, sliding windows work the same with arrays and strings - the important thing is that they're iterables with ordered elements. \
> The elements need to be contiguous and in order. For example, with the array [1, 2, 3, 4], the subarrays (grouped by length) are:
```
[1], [2], [3], [4]
[1, 2], [2, 3], [3, 4]
[1, 2, 3], [2, 3, 4]
[1, 2, 3, 4]
```
> A subarray can be defined by two indices, the start and end. For example, with [1, 2, 3, 4], the subarray [2, 3] has a starting index of 1 and an ending index of 2. Let's call the starting index the left bound and the ending index the right bound. Another name for subarray in this context is "window", which we will use from now on. \
> The idea behind the sliding window technique is to efficiently find the "best" window that fits some constraint (shorter length, larger sum, etc).


Examle: the length of the longest subarray with a sum less than or equal to k for an array with positive numbers. In this case, the constraint is sum(window) <= k, and the longer the window, the better it is. 

The general algorithm behind sliding window is:
1. Define a pointer for the left and right bound that represents the current window, usually both of them starting at 0.
2. Iterate over the array with the right bound to "add" elements to the window.
2. Whenever the constraint is broken, in this example if the sum of the window exceeds k, then "remove" elements from the window by incrementing the left bound until the condition is satisfied again.
```
function fn(arr):
    left = 0
    for right in [0, arr.length - 1]:
        Do some logic to "add" element at arr[right] to window

        while left < right AND condition from problem not met:
            Do some logic to "remove" element at arr[left] from window
            left++

        Do some logic to update the answer
```

```
public int findLength(int[] nums, int k) {
    int left = 0;
    int curr = 0;
    int ans = 0;

    for (int right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (curr > k) {
            curr -= nums[left];
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}
```

Number of subarrays

If a problem asks for the number of subarrays that fit some constraint, we can still use sliding window

Example: given an array of positive integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. \
The subarrays with products less than k are: \
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

> Key idea: Whenever you see a problem asking for the number of subarrays, think of this: at each index, how many valid subarrays end at this index? Let's split the 8 subarrays by their ending indices (pattern: for each index, the number of subarrays ending at that index is the length of the window after reaching that index):
> - [10]
> - [5], [10, 5]
> - [2], [5, 2]
> - [6], [2, 6], [5, 2, 6]

Solved example:
```
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
```

*In the examples we looked at above, our window size was variable. We tried to expand it as much as we could while keeping the window within some constraint, and removed elements from the left when it violated the constraint.

Fixed window size
> Sometimes, a problem will specify a fixed subarray length. To build the initial window (from index 0 to k - 1), you can either build it outside of the main loop or you can factor the logic inside your main loop to only consider the window for the answer once it reaches size k. 

```
// first approach
function fn(arr, k):
    curr = some data type to track the window

    // build the first window
    for i in [0, k - 1]:
        Do something with curr or other variables to build first window

    ans = answer variable, might be equal to curr here depending on the problem
    for i in [k, arr.length - 1]:
        Add arr[i] to window
        Remove arr[i - k] from window
        Update ans

    return ans

// second approach
function fn(arr, k):
    curr = some data type to track the window
    ans = answer variable
    for i in range(len(arr)):
        if i >= k:
            Update ans
            Remove arr[i - k] from window
        Add arr[i] to window

    Update ans    
    return ans // Alternatively, you could do something like return max(ans, curr) if the problem is asking for a maximum value and curr is tracking that.
```

Example: given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.

As we mentioned before, we can build a window of length k and then slide it along the array. Add and remove one element at a time to make sure the window stays size k. If we are adding the value at i, then we need to remove the value at i - k.

```
var findBestSubarray = function(nums, k) {
    let curr = 0;
    for (let i = 0; i < k; i++) {
        curr += nums[i];
    }
    
    let ans = curr;
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k];
        ans = Math.max(ans, curr);
    }
    
    return ans;
}
```

- ## prefix sum

> Prefix sum is a technique that can be used on arrays (of numbers). The idea is to create an array prefix where prefix[i] is the sum of all elements up to the index i (inclusive). For example, given nums = [5, 2, 1, 6, 3, 8], we would have prefix = [5, 7, 8, 14, 17, 25].

> Building a prefix sum is very simple. Here's some pseudocode:

Given an array nums,
```
prefix = [nums[0]]
for (int i = 1; i < nums.length; i++)
    prefix.append(nums[i] + prefix[prefix.length - 1])
```

> Building a prefix sum is a form of pre-processing. Pre-processing is a useful strategy in a variety of problems where we store pre-computed data in a data structure before running the main logic of our algorithm. While it takes some time to pre-process, it's an investment that will save us a huge amount of time during the main parts of the algorithm.

### Example 1
Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12]

```
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @param {number} limit
 * @return {boolean[]}
 */
var answerQueries = function(nums, queries, limit) {
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    
    let ans = [];
    for (const [x, y] of queries) {
        let curr = prefix[y] - prefix[x] + nums[x];
        ans.push(curr < limit);
    }
    
    return ans;
};
```

### Example 2
Example 2: 2270. Number of Ways to Split Array

>Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. The second section should have at least one number.

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let n = nums.length;
    
    let prefix = [nums[0]];
    for (let i = 1; i < n; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    
    let ans = 0;
    for (let i = 0; i < n - 1; i++) {
        let leftSection = prefix[i];
        let rightSection = prefix[n - 1] - prefix[i];
        if (leftSection >= rightSection) {
            ans++;
        }
    }
    
    return ans;
};
```

Improvement without additional array - we have improved the space complexity to O(1), which is a great improvement:
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let ans = 0, leftSection = 0, total = 0;
    for (const num of nums) {
        total += num;
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        leftSection += nums[i];
        let rightSection = total - leftSection;
        if (leftSection >= rightSection) {
            ans++;
        }
    }
    
    return ans;
};
```

More common patterns
Report Issue
In this article, we'll briefly talk about a few more patterns and some common tricks that can be used in algorithm problems regarding arrays and strings.

Subarrays/substrings, subsequences, and subsets
Let's quickly talk about the differences between these types and what to look out for when encountering them in problems.

Subarrays/substrings

As a reminder, a subarray or substring is a contiguous section of an array or string.

If a problem has explicit constraints such as:

Sum greater than or less than k
Limits on what is contained, such as the maximum of k unique elements or no duplicates allowed
And/or asks for:

Minimum or maximum length
Number of subarrays/substrings
Max or minimum sum
Think about a sliding window. Note that not all problems with these characteristics should be solved with a sliding window, and not all sliding window problems have these characteristics. These characteristics should only be used as a general guideline.

If a problem's input is an integer array and you find yourself needing to calculate multiple subarray sums, consider building a prefix sum.

The size of a subarray between i and j (inclusive) is j - i + 1. This is also the number of subarrays that end at j, starting from i or later.

Subsequences

A subsequence is a set of elements of an array/string that keeps the same relative order but doesn't need to be contiguous.

For example, subsequences of [1, 2, 3, 4] include: [1, 3], [4], [], [2, 3], but not [3, 2], [5], [4, 1].

Typically, subsequence problems are more difficult. Because this is only the first chapter, it is difficult to talk about subsequence patterns now. Subsequences will come up again later in the course - for example, dynamic programming is used to solve a lot of subsequence problems.

From the patterns we have learned so far, the most common one associated with subsequences is two pointers when two input arrays/strings are given (we did look at one problem in the two pointers articles involving subsequences). Because prefix sums and sliding windows represent subarrays/substrings, they are not applicable here.

Subsets

A subset is any set of elements from the original array or string. The order doesn't matter and neither do the elements being beside each other. For example, given [1, 2, 3, 4], all of these are subsets: [3, 2], [4, 1, 2], [1]. Note: subsets that contain the same elements are considered the same, so [1, 2, 4] is the same subset as [4, 1, 2].

You may be thinking, what is the difference between subsequences and subsets if subsets with the same elements are considered the same? In subsequences, the order matters - let's say you had an array of integers and you needed to find a subsequence with 3 consecutive elements (like 1, 2, 3). This would be harder than finding a subset with 3 consecutive elements because, with a subset, the 3 elements simply need to exist. In a subsequence, the elements need to exist in the correct relative order.

Again, since we are only in the first chapter, it is hard to talk much about subsets. We will see subsets being used in the backtracking chapter.

One thing to note is that if a problem involves subsequences, but the order of the subsequence doesn't actually matter (let's say it wants the sum of subsequences), then you can treat it the same as a subset. A useful thing that you can do when dealing with subsets that you can't do with subsequences is that you can sort the input, since the order doesn't matter.

*** 

- ## backtracking

- ## dp
