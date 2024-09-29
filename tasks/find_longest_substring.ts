// Example 1: You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "eceba" and k = 2, return 3. The longest substring with at most 2 distinct characters is "ece".

// The idea of a sliding window is to add elements by sliding to the right until the window violates the constraint. Once it does, we shrink the window from the left until it no longer violates the constraint.

// Let's use a hash map counts to keep count of the characters in the window. This means we will map letters to their frequency. The length (number of keys) in counts at any time is the number of distinct characters. When we remove from the left, we can decrement the frequency of the elements being removed. When the frequency becomes 0, we know this character is no longer part of the window, and we can delete the key.

// In this problem, the constraint metric is "how many unique characters are in the window". The numeric restriction is <= k. We can use a hash map counts that keeps track of the frequency of each character in the window. The length of counts is the number of keys, which is also the constraint metric. Therefore the window is invalid when counts.length > k.

// When we add a character s[right], we increment its frequency in counts by one. If it doesn't exist in counts, we insert a new key value pair s[right]: 1.

// When we remove a character s[left], we decrement its frequency in counts by one. If the frequency becomes 0, we know that this character no longer exists. Therefore we delete the key from the hash map, which also decreases the length of counts.

// Recall that the length of a window is right - left + 1.

const findLongestSubstring = (s: string, k: number): number => {
  const count = new Map();
  let max = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1);

    // window constraints violation
    while (count.size > k) {
      const curr = count.get(s[left]);
      count.set(s[left], curr - 1 || 0);

      if (count.get(s[left]) === 0) {
        count.delete(s[left]);
      }

      left += 1;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(
  '!!findLongestSubstring("eceba", 2)',
  findLongestSubstring("eceba", 2)
); // 3
//  The longest substring with at most 2 distinct characters is "ece".

// As you can see, using a hash map to store the frequency of any key we want allows us to solve sliding window problems that put constraints on multiple elements. We know from earlier that the time complexity of sliding window problems are O ( n ) O(n) if the work done inside each for loop iteration is amortized constant, which is the case here due to a hash map having O ( 1 ) O(1) operations. The hash map occupies O ( k ) O(k) space, as the algorithm will delete elements from the hash map once it grows beyond k k.

// Lettcode solution
// let findLongestSubstring = (s, k) => {
//   let counts = new Map();
//   let left = 0, ans = 0;
//   for (let right = 0; right < s.length; right++) {
//       counts.set(s[right], (counts.get(s[right]) || 0) + 1);
//       while (counts.size > k) {
//           counts.set(s[left], counts.get(s[left]) - 1);
//           if (counts.get(s[left]) == 0) {
//               counts.delete(s[left]);
//           }
//           left++;
//       }

//       ans = Math.max(ans, right - left + 1);
//   }

//   return ans;
// }
