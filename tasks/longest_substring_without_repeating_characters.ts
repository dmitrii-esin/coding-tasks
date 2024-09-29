// Longest Substring Without Repeating Characters

// Medium

// Given a string s, find the length of the longest
// substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {
  const uniq = new Map();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    uniq.set(s[right], (uniq.get(s[right]) || 0) + 1);

    while (uniq.get(s[right]) > 1) {
      uniq.set(s[left], uniq.get(s[left] || 0) - 1);

      if (uniq.get(s[left]) === 0) {
        uniq.delete(s[left]);
      }

      left += 1;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(
  '!!lengthOfLongestSubstring("abcabcbb")',
  lengthOfLongestSubstring("abcabcbb")
); // 3
console.log(
  '!!lengthOfLongestSubstring("bbbbb")',
  lengthOfLongestSubstring("bbbbb")
); // 1
console.log(
  '!!lengthOfLongestSubstring("pwwkew")',
  lengthOfLongestSubstring("pwwkew")
); // 3
