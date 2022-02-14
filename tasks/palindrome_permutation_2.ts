function generatePalindromes(s: string): string[] {  
    const memo = new Set();    
    return backtrack(memo, [], s, 0, s.length);
};

function backtrack(cash, acc: string[], current: string, first: number, n: number): string[] {
    if (first === n && !cash.has(current) && isPalindrome(current)) {
        acc.push(current);
        cash.add(current);
    }

    for (let i = first; i < n; i++) {
        const nextCurrent = swap(current, first, i);
        backtrack(cash, acc, nextCurrent, first + 1, n);
    }

    return acc;
}

function swap(str: string, firtsIndex: number, secondIndex: number): string {
    let acc = "";

    for (let i = 0; i < str.length; i++) {
        if (i === firtsIndex) acc = `${acc}${str[secondIndex]}`;
        else if (i === secondIndex) acc = `${acc}${str[firtsIndex]}`;
        else if (i !== firtsIndex && i !== secondIndex) acc = `${acc}${str[i]}`;
    }
    
    return acc;
}

function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}

console.log('!!generatePalindromes("abc")', 
generatePalindromes("aabb"), // [ 'abba', 'baab' ]
);