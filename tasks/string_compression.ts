function compress(str: string): string {
    if (str.length < 2) return str;

    let currentLetter = str[0];
    let counter = 1;
    let result = "";

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === currentLetter) {
            counter++;
        } else {
            result = `${result}${currentLetter}${counter > 1 ? counter : ''}`;
            currentLetter = str[i];
            counter = 1;
        }
    }

    return result;
}

console.log('!!compress(abc)', compress('abc')); // abc
console.log('!!compress(a)', compress('a')); // a
console.log('!!compress(abcdd)', compress('abcdd')); // abcd2
console.log('!!compress(aabcccccaaa)', compress('aabcccccaaa')); // a2b1c5a3
