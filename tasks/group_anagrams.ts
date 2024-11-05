// # Task: Group Anagarms

// Given an array of strings strs, group the  anagrams  together. You can return the answer in any order.

// # Examples:

// ## Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// ## Example 2:
// Input: strs = [""]
// Output: [[""]]

// function groupAnagrams(strs: string[]): string[][] {
//   let anagrams: string[][] = [];
//   const hash: Map<string, string[]> = new Map();

//   for (let str of strs) {
//     const key = str.split("").sort().join("");

//     if (hash.has(key)) {
//       hash.get(key)?.push(str); // Directly push to the array
//     } else {
//       hash.set(key, [str]); // Start a new array for this sorted key
//     }
//   }

//   // Push each group of anagrams into the output array
//   hash.forEach((group) => {
//     anagrams.push(group);
//   });

//   return anagrams;
// }

// function groupAnagrams(strs: string[]): string[][] {
//   let anagramms:  string[][] = [];
//   const hash: Map<string, Set<string>> = new Map();

//   for (let i = 0; i < strs.length; i++) {
//       const sortedWord = strs[i].split('').sort().join('');

//       if (hash.has(sortedWord)) {
//           hash.set(sortedWord, hash.get(sortedWord).add(strs[i]));
//       } else {
//           const value: Set<string> = new Set();
//           hash.set(sortedWord, value.add(strs[i]));
//       }
//   }

//   hash.forEach((value: Set<string>, key: string) => {
//       anagramms.push(Array.from(value));
//   })

//   return anagramms;
// };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let groups = new Map();
  for (const s of strs) {
    let key = s.split("").sort().join("");
    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(s);
  }

  let ans = [];
  for (const group of groups.values()) {
    ans.push(group);
  }

  return ans;
};

console.log(
  '!!groupAnagrams(["eat","tea","tan","ate","nat","bat"])',
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
); // [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log('!!groupAnagrams([""])', groupAnagrams([""])); // [[""]]
