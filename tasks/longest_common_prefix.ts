// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs: string[]): string {
  //TODO:
  // 1. init temporary arr of chars []
  // 2. init point for current ending of sequence 0
  // 3. iterate from 0 to amount of letters
  //    3.1. iterate all words and push 2. current pont in 1. temporary arr if
  //    3.2. if undefined - push and point++
  // 4. select and return the most long word in temporary arr
  // 5. optimize

  return "";
}

console.log(
  '!!SHOLD BE "???" longestCommonPrefix(["light","though","goods"])',
  longestCommonPrefix(["flower", "flow", "flight"])
);
console.log(
  '!!SHOLD BE "fl" longestCommonPrefix(["flower","flow","flight"])',
  longestCommonPrefix(["flower", "flow", "flight"])
);
console.log(
  '!!SHOLD BE "" longestCommonPrefix(["dog","racecar","car"])',
  longestCommonPrefix(["dog", "racecar", "car"])
);
