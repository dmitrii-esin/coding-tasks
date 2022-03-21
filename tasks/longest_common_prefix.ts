// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const getLongestString = (arr: string[]) => arr.reduce(
    (savedText, text) => (text.length > savedText.length ? text : savedText),
    '',
  );

//TODO: fix alg
function longestCommonPrefix(strs: string[]): string {
    const chars: string[] = [];
    let currentSubstr = "";

    let word = 0;
    let char = 0;

    const steps = strs.join('').split('');

    while (steps.length > 0) {
        const verifiableChar = strs[word][char];

        if (word < strs.length) {
            if (verifiableChar === strs[word + 1][char]) {
                word += 1;
                currentSubstr = verifiableChar;
                steps.pop();
            } else {
                char += 1;
                word = 0;
                currentSubstr = "";
                steps.pop();
            }
        } else {
            chars.push(currentSubstr);
            word = 0;
            char += 1;
            steps.pop();
        }
    }

    return getLongestString(chars);
};

console.log('!!SHOLD BE "fl" longestCommonPrefix(["flower","flow","flight"])', longestCommonPrefix(["flower","flow","flight"]));
console.log('!!SHOLD BE "" longestCommonPrefix(["dog","racecar","car"])', longestCommonPrefix(["dog","racecar","car"]));


