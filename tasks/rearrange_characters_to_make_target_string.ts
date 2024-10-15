// # 2287. Rearrange Characters to Make Target String

// You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

// Example 1:
// Input: s = "ilovecodingonleetcode", target = "code"
// Output: 2
// Explanation:
// For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
// For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
// The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
// We can make at most two copies of "code", so we return 2.

// Example 2:
// Input: s = "abcba", target = "abc"
// Output: 1
// Explanation:
// We can make one copy of "abc" by taking the letters at indices 0, 1, and 2.
// We can make at most one copy of "abc", so we return 1.
// Note that while there is an extra 'a' and 'b' at indices 3 and 4, we cannot reuse the letter 'c' at index 2, so we cannot make a second copy of "abc".

// Example 3:
// Input: s = "abbaccaddaeea", target = "aaaaa"
// Output: 1
// Explanation:
// We can make one copy of "aaaaa" by taking the letters at indices 0, 3, 6, 9, and 12.
// We can make at most one copy of "aaaaa", so we return 1.

// Constraints:
// 1 <= s.length <= 100
// 1 <= target.length <= 10
// s and target consist of lowercase English letters.

// Hint 1
// Count the frequency of each character in s and target.

// Hint 2
// Consider each letter one at a time. If there are x occurrences of a letter in s and y occurrences of the same letter in target, how many copies of this letter can we make?

// Hint 3
// We can make floor(x / y) copies of the letter.

function rearrangeCharacters(s: string, target: string): number {
  // letter => amount
  const targetMap = new Map();
  const currentMap = new Map();

  for (let i = 0; i < target.length; i++) {
    targetMap.set(target[i], (targetMap.get(target[i]) || 0) + 1);
  }

  let min = Infinity;

  for (let j = 0; j < s.length; j++) {
    if (targetMap.has(s[j])) {
      currentMap.set(s[j], (currentMap.get(s[j]) || 0) + 1);
    }
  }

  currentMap.forEach((value, key) => {
    currentMap.set(key, Math.floor(currentMap.get(key) / targetMap.get(key)));

    min = Math.min(min, currentMap.get(key));
  });

  targetMap.forEach((value, key) => {
    if (!currentMap.has(key)) {
      min = 0;
    }
  });

  console.log("!!targetMap, currentMap", targetMap, currentMap);

  return min;
}

console.log(
  '!!rearrangeCharacters("ilovecodingonleetcode", "code")',
  rearrangeCharacters("ilovecodingonleetcode", "code")
); // 2

console.log(
  '!!rearrangeCharacters("abcba", "abc")',
  rearrangeCharacters("abcba", "abc")
); // 1

console.log(
  '!!rearrangeCharacters("abbaccaddaeea", "aaaaa")',
  rearrangeCharacters("abbaccaddaeea", "aaaaa")
); // 1
