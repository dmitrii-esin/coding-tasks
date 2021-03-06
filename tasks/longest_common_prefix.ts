// function longestCommonPrefix(strs: string[]): string {
//   if (strs.length === 0) return "";
//   if (strs.length === 1) return strs[0];
//   if (strs.some((word) => word.length === 0)) return "";

//   let maxStr = "";

//   const commonStringsList = strs.reduce((acc: string[], word: string) => {
//     const commonStrings = generateCommonStrings(word);
//     return acc.concat(commonStrings);
//   }, []);

//   commonStringsList.forEach((commonStr: string) => {
//     if (strs.every((s) => s.startsWith(commonStr))) {
//       maxStr = commonStr.length > maxStr.length ? commonStr : maxStr;
//     }
//   });

//   return maxStr;
// }

// function generateCommonStrings(word: string): string[] {
//   const result: string[] = [];

//   for (let end = 1; end <= word.length; end++) {
//     result.push(word.slice(0, end));
//   }

//   return result;
// }

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  if (strs.some((word) => word.length === 0)) return "";

  let maxStr = "";
  let charIndex = 0;
  let minLen = Math.min(...strs.map((i) => i.length));

  while (charIndex < minLen) {
    const currentChar = strs[0][charIndex];

    const isOkay = strs.reduce((acc, curr) => {
      if (curr[charIndex] !== currentChar) acc = false;
      return acc;
    }, true);

    if (isOkay) {
      maxStr = `${maxStr}${currentChar}`;
      charIndex++;
    } else {
      return maxStr;
    }
  }

  return maxStr;
}

console.log(
  '!!longestCommonPrefix(["flower","flow","flight"])',
  longestCommonPrefix(["flower", "flow", "flight"])
); // "fl"

console.log(
  '!!longestCommonPrefix(["dog","racecar","car"])',
  longestCommonPrefix(["dog", "racecar", "car"])
); // ""

console.log(
  '!!longestCommonPrefix(["reflower","flow","flight"])',
  longestCommonPrefix(["reflower", "flow", "flight"])
); // ""

console.log(
  '!!longestCommonPrefix(["ab","a"])',
  longestCommonPrefix(["ab", "a"])
); // "a"

// public String longestCommonPrefix(String[] strs) {
//   if (strs.length == 0) return "";
//   String prefix = strs[0];
//   for (int i = 1; i < strs.length; i++)
//       while (strs[i].indexOf(prefix) != 0) {
//           prefix = prefix.substring(0, prefix.length() - 1);
//           if (prefix.isEmpty()) return "";
//       }
//   return prefix;
// }
