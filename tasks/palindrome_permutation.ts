function canPermutePalindrome(s: string): boolean {
    // const items = Array.from({ length: s.length }, () => 0);
    // const abc = Array.from(Array(26)).map((_, idx) => String.fromCharCode(idx + 65));
    const lettersMap = s.split('').reduce((map, letter) => ({...map, [letter]: 0}), {});
    let oddCounter = 0;

    for (let i = 0; i < s.length; i++) {
        lettersMap[s[i]]++;

        if (lettersMap[s[i]] % 2 === 0) {
            oddCounter--;
        } else {
            oddCounter++;
        }
    };

    return oddCounter <= 1;
};

// function canPermutePalindrome0(s: string): boolean {  
//     const lettersArr = s.split('');
//     const lettersSet = new Set();
        
//     lettersArr.forEach(letter => {  
//         if (lettersSet.has(letter)) {
//             lettersSet.delete(letter);
//         } else {
//             lettersSet.add(letter);
//         }
//     })
    
//     return lettersSet.size <= 1;
// };

// function canPermutePalindrome1(s: string): boolean {      
//     const lettersMap = buildLettersMap(s);
    
//     let evenCounter = 0;
//     let oddCounter = 0;
    
//     for (let letter in lettersMap) {        
//         if (lettersMap[letter] % 2 === 0) evenCounter = evenCounter + 1;
//         if (lettersMap[letter] % 2 !== 0) oddCounter = oddCounter + 1;
//     }
    
//     return oddCounter <= 1;
// };

// function buildLettersMap(str: string): {[key: string]: number} {
//     const letters = str.split('');
//     const hashMap = {};
    
//     letters.forEach(letter => {
//         const count = hashMap[letter];
        
//         if (!count) hashMap[letter] = 1;
//         if (count) hashMap[letter] = count + 1;
//     })
    
//     return hashMap;
// }

// Given a string s, return true if a permutation of the string could form a palindrome.
 
console.log(
    canPermutePalindrome("code"), // false
    canPermutePalindrome("aab"), // true
    canPermutePalindrome("carerac"), // true
);