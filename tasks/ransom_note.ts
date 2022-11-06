// Ransom note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function canConstruct(ransomNote: string, magazine: string): boolean {
  //TODO: we can use one hash map here and subtract the characters
  const hashM = {};
  const hashR = {};

  for (let i = 0; i < magazine.length; i++) {
    const hasIn = !!hashM[magazine[i]];

    if (hasIn) {
      hashM[magazine[i]] = hashM[magazine[i]] + 1;
    } else {
      hashM[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const hasIn = !!hashR[ransomNote[i]];

    if (hasIn) {
      hashR[ransomNote[i]] = hashR[ransomNote[i]] + 1;
    } else {
      hashR[ransomNote[i]] = 1;
    }
  }

  for (let key in hashR) {
    if (!hashM[key]) return false;
    if (hashR[key] > hashM[key]) return false;
  }

  return true;
}

console.log('!!canConstruct("a", "b")', canConstruct("a", "b")); // false
console.log('!!canConstruct("aa", "ab")', canConstruct("aa", "ab")); // false
console.log('!!canConstruct("aa", "aab")', canConstruct("aa", "aab")); // false
