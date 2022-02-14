// Two Pointers

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    var current = 0;
    var last = nums.length;

    while (current < last) {
      if (nums[current] === val) {
        nums[current] = nums[last - 1];
        last--;
      } else {
        current++;
      }
    }
    
    console.log('!!nums, last', nums, last);
    
    return last;
};
// !!nums, last [ 2, 2, 2, 3 ] 2