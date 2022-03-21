// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack: string, needle: string): number {
    if (needle === "") return 0;
    
    let guess = 0;
    let window = 0;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[window]) {
            if (window === 0) guess = i;
            if (window === needle.length - 1) return guess;
            window++;
        } else {
            i = i - window;
            window = 0;
            guess = -1;
        }
    }

    return -1;
};

console.log('!!SHOLD BE 0 strStr("aaa", "aa")', strStr("aaa", "aa"));
console.log('!!SHOLD BE 2 strStr("hello", "ll")', strStr("hello", "ll"));
console.log('!!SHOLD BE 4 strStr("mississippi", "issip")', strStr("mississippi", "issip"));
console.log('!!SHOLD BE -1 strStr("aaaaa", "bba")', strStr("aaaaa", "bba"));
console.log('!!SHOLD BE -1 strStr("hello", "mmm")', strStr("hello", "mmm"));
console.log('!!SHOLD BE 0 strStr("", "")', strStr("", ""));