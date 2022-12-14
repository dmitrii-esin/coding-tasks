// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

function maxVowels(s: string, k: number): number {
  const vowels = ["a", "e", "i", "o", "u"];
  const isVowel = (letter: string) => vowels.includes(letter);

  let counter = 0;
  let currentCounter = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // Check if the current character is a vowel
    if (isVowel(s[right])) {
      currentCounter += 1;
    }

    // Calculate the length of the current substring
    const len = right - left + 1;

    // Check if the substring has reached the required length k
    if (len === k) {
      // Update the maximum counter if the current number of vowels is greater
      counter = Math.max(counter, currentCounter);

      // If the leftmost character is a vowel, reduce the count of vowels
      if (isVowel(s[left])) {
        currentCounter -= 1;
      }

      // Move the left pointer to slide the window
      left += 1;
    }
  }

  return counter;
}

console.log(
  '!!maxVowels("a", "b", "c", "iiidef", 3)',
  maxVowels("abciiidef", 3)
); // 3
console.log('!!maxVowels("aeiou", 2)', maxVowels("aeiou", 2)); // 2
console.log('!!maxVowels("leetcode", 3)', maxVowels("leetcode", 3)); // 2
