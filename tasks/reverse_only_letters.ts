// Reverse Only Letters

// Given a string s, reverse the string according to the following rules:
// - All the characters that are not English letters remain in the same position.
// - All the English letters (lowercase or uppercase) should be reversed.
// - Return s after reversing it.

// Example 1:
// Input: s = "ab-cd"
// Output: "dc-ba"

// Example 2:
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:
// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Constraints:
// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

function reverseOnlyLetters(s: string): string {
  const abc = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
  };

  const isLetter = (letter: string) => abc.hasOwnProperty(letter.toLowerCase());

  const acc = s.split("");

  const swap = (arr: any[], firstIndex: number, secoundIndex: number) => {
    const temp = arr[firstIndex];

    arr[firstIndex] = arr[secoundIndex];
    arr[secoundIndex] = temp;
  };

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (isLetter(acc[i]) && isLetter(acc[j])) {
      swap(acc, i, j);
      i++;
      j--;
    } else if (!isLetter(acc[i]) && isLetter(acc[j])) {
      i++;
    } else if (isLetter(acc[i]) && !isLetter(acc[j])) {
      j--;
    } else if (!isLetter(acc[i]) && !isLetter(acc[j])) {
      i++;
      j--;
    }
  }

  return acc.join("");
}

console.log('!!reverseOnlyLetters("ab-cd")', reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(
  '!!reverseOnlyLetters("a-bC-dEf-ghIj")',
  reverseOnlyLetters("a-bC-dEf-ghIj")
); // "j-Ih-gfE-dCba"
