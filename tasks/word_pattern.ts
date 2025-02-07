// 290. Word Pattern
// Easy

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Explanation:
// The bijection can be established as:
// 'a' maps to "dog".
// 'b' maps to "cat".

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Constraints:
// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

function wordPattern(pattern: string, s: string): boolean {
  const patternMap = new Map();
  const wordsMap = new Map();
  const wordIndexMap = new Map();

  const sentence = s.split(" ");

  if (sentence.length !== pattern.length) {
    return false;
  }

  // check the order of words in the sentence according to pattern

  for (let i = 0; i < sentence.length; i++) {
    const word = sentence[i];
    const letter = pattern[i];

    if (patternMap.has(letter) && patternMap.get(letter) !== word) {
      return false;
    }

    if (wordsMap.has(word) && wordsMap.get(word) !== letter) {
      return false;
    }

    patternMap.set(letter, word);
    wordsMap.set(word, letter);
    wordIndexMap.set(word, i);
  }

  return true;
}

console.log(
  '!!wordPattern("abba", "dog cat cat dog")',
  wordPattern("abba", "dog cat cat dog")
); // true

console.log(
  '!!wordPattern("abba", "dog cat cat fish")',
  wordPattern("abba", "dog cat cat fish")
); // false

console.log(
  '!!wordPattern("aaaa", "dog cat cat dog")',
  wordPattern("aaaa", "dog cat cat dog")
); // false

console.log(
  '!!wordPattern("aba", "dog cat cat")',
  wordPattern("aba", "dog cat cat")
); // false

console.log(
  '!!wordPattern("abab", "dog cat cat dog")',
  wordPattern("abab", "dog cat cat dog")
); // false
