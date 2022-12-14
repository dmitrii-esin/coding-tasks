// Check if the Sentence Is Pangram

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// Example 2:
// Input: sentence = "leetcode"
// Output: false

function checkIfPangram(sentence: string): boolean {
  let counter = 26;

  let hashMap = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!hashMap[sentence[i]]) {
      counter -= 1;
      hashMap[sentence[i]] = true;
    }
  }

  return counter === 0;
}

console.log('!!checkIfPangram("leetcode")', checkIfPangram("leetcode")); // false
console.log(
  '!!checkIfPangram("thequickbrownfoxjumpsoverthelazydog")',
  checkIfPangram("thequickbrownfoxjumpsoverthelazydog")
); // true
