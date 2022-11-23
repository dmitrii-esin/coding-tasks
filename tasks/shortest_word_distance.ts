// Shortest Word Distance
// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

// Example 1:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

// Example 2:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1

function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  let first = -1;
  let second = -1;

  let min = wordsDict.length;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) first = i;
    if (wordsDict[i] === word2) second = i;

    if (first !== -1 && second !== -1) {
      min = Math.min(min, Math.abs(first - second));
    }
  }

  return min;
}

console.log(
  '!!shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")',
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
); // 3
