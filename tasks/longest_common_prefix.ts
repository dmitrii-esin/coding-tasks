function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  if (strs.some((word) => word.length === 0)) return "";

  let maxStr = "";

  const commonStringsList = strs.reduce((acc: string[], word: string) => {
    const commonStrings = generateCommonStrings(word);
    return acc.concat(commonStrings);
  }, []);

  commonStringsList.forEach((commonStr: string) => {
    if (strs.every((s) => s.startsWith(commonStr))) {
      maxStr = commonStr.length > maxStr.length ? commonStr : maxStr;
    }
  });

  return maxStr;
}

function generateCommonStrings(word: string): string[] {
  const result: string[] = [];

  for (let end = 1; end <= word.length; end++) {
    result.push(word.slice(0, end));
  }

  return result;
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
