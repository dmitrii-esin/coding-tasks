// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

function isSubsequence(s: string, t: string): boolean {
  let target = 0;
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      target++;
      j++;
    }
  }

  return target === s.length;
}

// other solution with non-ordered items
// function isSubsequence(s: string, t: string): boolean {
//   let counter = 0;
//   let sIndex = 0;

//   for (let i = 0; i < t.length; i++) {
//       if (t[i] === s[sIndex]) {
//           counter += 1;
//           sIndex += 1;
//       } else if (t[i] === s[sIndex] && counter< s.length) {
//           counter = 0;
//       }
//   }

//   return counter === s.length;
// };

console.log('!!isSubsequence("abc", "ahbgdc")', isSubsequence("abc", "ahbgdc")); // true;
console.log('!!isSubsequence("axc", "ahbgdc")', isSubsequence("axc", "ahbgdc")); // false;
