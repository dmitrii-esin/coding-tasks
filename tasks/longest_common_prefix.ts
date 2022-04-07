function findMaxIntersection(strs: string[]): string {
  if (strs.some((word) => word.length === 0)) return "";

  let maxStr = "";

  const substrings = strs.reduce((acc: string[], word: string): string[] => {
    const subsrts: string[] = [];

    let start = 0;
    let end = 1;

    while (start < word.length) {
      subsrts.push(word.slice(start, end));

      end = end + 1;

      if (end >= word.length - 1) {
        start = start + 1;
        end = start + 1;
      }
    }

    return [...acc, ...subsrts];
  }, []);

  substrings.forEach((str) => {
    if (strs.every((s) => s.includes(str)) && maxStr.length < str.length) {
      maxStr = str;
    }
  });

  return maxStr;
}

console.log(
  '!!SHOLD BE "???" findMaxIntersection(["light","though","goods"])',
  findMaxIntersection(["light", "though", "goods"])
);
console.log(
  '!!SHOLD BE "fl" findMaxIntersection(["flower","flow","flight"])',
  findMaxIntersection(["flower", "flow", "flight"])
);
console.log(
  '!!SHOLD BE "" findMaxIntersection(["dog","racecar","car"])',
  findMaxIntersection(["dog", "racecar", "car"])
);

console.log(
  '!!SHOLD BE "" findMaxIntersection(["kokoko","","test", "ok"])',
  findMaxIntersection(["kokoko", "", "test", "ok"])
);
