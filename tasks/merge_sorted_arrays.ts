// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Solution 1.
/**
 Do not return anything, modify nums1 in-place instead.
 */
// This function starts merging from the end of both arrays,
// which ensures that the merging process does not overwrite any elements
// from nums1 that have not been checked yet.
// It's a common approach for in-place merging when the destination array
// has enough space at the end to accommodate the elements from the second array.
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   let i = m - 1;
//   let j = n - 1;
//   let last = m + n - 1;

//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[last] = nums1[i];
//       i--;
//     } else {
//       nums1[last] = nums2[j];
//       j--;
//     }

//     last--;
//   }

//   console.log("!!result: nums1", nums1);
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let left = m - 1;
  let right = n - 1;
  let insertIndex = m + n - 1;

  while (right >= 0) {
    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[insertIndex] = nums1[left];
      left--;
    } else {
      nums1[insertIndex] = nums2[right];
      right--;
    }

    insertIndex--;
  }
}

console.log(
  "!!merge([1,2,3,0,0,0], 3, [2,5,6], 3)",
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
); // [1,2,2,3,5,6]

// Solution 2.
// Step 1: Initialize pointers and combined array index:
// int i = m - 1; and int j = n - 1;:
// Initialize two pointers i and j to the last valid elements in nums1 and nums2 respectively.
// int i = m - 1; // Pointer for nums1
// int j = n - 1; // Pointer for nums2
// int k = m + n - 1; // Initialize a pointer k to the last index of the combined

// Step 2: Merge arrays:
// - Enter the while loop: This loop will continue until either i or j becomes less than 0.
// - Inside the loop, it checks whether the element at nums1[i] is greater than the element at nums2[j].
// - If nums1[i] is greater, it means we want to place nums1[i] at the end of the combined array.
// - If nums2[j] is greater or equal, it means we want to place nums2[j] at the end of the combined array.
// while (i >= 0 && j >= 0) {
//   if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//   } else {
//       nums1[k] = nums2[j];
//       j--;
//   }
//   k--;
// }

// 1. After the first while loop finishes, it's possible that there are remaining elements in either nums1 or nums2.
// - The next two while loops handle these remaining elements:
// - If there are remaining elements in nums1, they are copied to the beginning of nums1.
// - If there are remaining elements in nums2, they are copied to the beginning of nums1, overwriting any remaining elements from nums1

// Step 3: Handle remaining elements from nums1:
// while (i >= 0) {
//   nums1[k] = nums1[i];
//   i--;
//   k--;
// }

// Step 4: Handle remaining elements from nums2:
// while (j >= 0) {
//   nums1[k] = nums2[j];
//   j--;
//   k--;
// }

// Complexity
// Time complexity: O(N)
// As we used only single array for merging two arrays

// Space complexity:O(1)
// It's constant as we have not used any extra space for storing merged array elements

// class Solution {
//   public static void merge(int[] nums1, int m, int[] nums2, int n) {
//      int i = m - 1;
//      int j = n - 1;
//      int k = m + n - 1;

//      while (i >= 0 && j >= 0) {
//          if (nums1[i] > nums2[j]) {
//              nums1[k] = nums1[i];
//              i--;
//          } else {
//              nums1[k] = nums2[j];
//              j--;
//          }
//          k--;
//      }

//      while (i >= 0) {
//          nums1[k] = nums1[i];
//          i--;
//          k--;
//      }

//      while (j >= 0) {
//          nums1[k] = nums2[j];
//          j--;
//          k--;
//      }
//  }
// }

// Another explanation

//  // This function modifies nums1 in-place to produce a merged, sorted array.
//  function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   // Pointer i traverses through the meaningful part of nums1 from the end.
//   let i = m - 1;

//   // Pointer j does the same for nums2.
//   let j = n - 1;

//   // The last slot in the final merged array.
//   // Starts at end and we will fill the array from this end.
//   let last = m + n - 1;

//   // Traverse through the arrays.
//   // Continue until nums2 is completely traversed.
//   while (j >= 0) {
//       // If both arrays have unread elements.
//       if (i >= 0 && nums1[i] > nums2[j]) {
//           // Copy nums1[i] to the current last slot, because it is larger.
//           nums1[last] = nums1[i];
//           // Move the pointer i backward.
//           i--;
//       } else {
//           // Copy nums2[j] to the current last slot, for one of 2 reasons:
//           // 1) We have already read all elements in nums1 (i < 0).
//           // 2) Current nums1 element is smaller than current nums2 element.
//           nums1[last] = nums2[j];
//           // Move the pointer j backward.
//           j--;
//       }
//       // Move the pointer last backward because we've just filled its slot.
//       last--;
//   }
// };

// In short, this algorithm exploits the fact that both input subarrays of nums1 and nums2 are sorted.

// Starting at the end, it repeatedly picks the larger of two elements pointed to by i and j, copies it into location 'last' of the merged array, and moves the pointers and 'last' backward. This continues until all elements in nums2 are processed (put into their correct place in the merged array). We stop at this point because all remaining elements in nums1 are already in their correct place.

// This algorithm sorts in non-increasing order and is efficient in terms of space and time.
