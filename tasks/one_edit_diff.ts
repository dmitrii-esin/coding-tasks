function isOneEditDistance(s: string, t: string): boolean {
    const max = s.length > t.length ? s : t;
    const min = t.length < s.length ? t : s;
    
    if (s === "" && t === "") return false;
    if (s === t) return false;
    if (max.length - min.length > 1) return false;

    const addSymbol = (str: string, idx: number, sym: string): string => {
        const letters: string[] = [];

        str.split('').forEach((s, i) => {
            if (i === idx) letters.push(sym);
            letters.push(s);
        })

        return letters.join('');
    }

    const removeSymbol = (str: string, idx: number): string => str.split('').filter((s, id) => id !== idx).join('');

    const replaceSymbol = (str: string, idx: number, sym: string): string => str.split('').map((s, id) => id === idx ? sym : s).join('');

    // I. Iterative solution
    let diff = 0;

    for (let i = 0; i < max.length; i++) {
        if (min[i] !== max[i]) {
            const added = addSymbol(min, i, max[i]);
            const removed = removeSymbol(min, i);
            const replaced = replaceSymbol(min, i, max[i]);

            if (added === max || removed === max || replaced === max) {
                return diff <= 1;
            } else {
                diff+=1
            }
        }
    }

    // II. Recursive solution
    // const calcDiff = (minString: string, maxString: string, currentIndex: number, acc: number): number => {
    //     if (currentIndex > maxString.length - 1) return acc;

    //     if (minString[currentIndex] !== maxString[currentIndex]) {
    //         const added = addSymbol(minString, currentIndex, maxString[currentIndex]);
    //         const removed = removeSymbol(minString, currentIndex);
    //         const replaced = replaceSymbol(minString, currentIndex, maxString[currentIndex]);

    //         if (added === max || removed === max || replaced === max) {
    //             return 1;
    //         } else {
    //             return calcDiff(minString, maxString, currentIndex + 1, acc + 1);
    //         }
    //     } else {
    //         return calcDiff(minString, maxString, currentIndex + 1, acc);
    //     }
    // }

    // const diff = calcDiff(min, max, 0, 0,);


    // III. More esier way (Java) :)
        // Ensure that s is shorter than t.
    //     if (ns > nt)
    //     return isOneEditDistance(t, s);
  
    //   // The strings are NOT one edit away distance  
    //   // if the length diff is more than 1.
    //   if (nt - ns > 1)
    //     return false;
  
    //   for (int i = 0; i < ns; i++)
    //     if (s.charAt(i) != t.charAt(i))
    //       // if strings have the same length
    //       if (ns == nt)
    //         return s.substring(i + 1).equals(t.substring(i + 1));
    //       // if strings have different lengths
    //       else
    //         return s.substring(i).equals(t.substring(i + 1));
    // //  OR JS
    // while (i < first.length && j < second.length) {
    //     if (first[i] !== second[j]) {
    //         return first.slice(i + 1, first.length) === second.slice(j + 1, second.length);
    //     }
        
    //     i++;
    //     j++;
    // }

    return diff <= 1;
};

console.log("!!SHOULD BE TRUE isOneEditDistance('ab', 'acb')", isOneEditDistance('ab', 'acb')); // true (because of diff === 1)
console.log("!!SHOULD BE FALSE isOneEditDistance('abd', 'acb')", isOneEditDistance('abd', 'acb')); // false (because of diff === 2)
console.log("SHOULD BE TRUE !!isOneEditDistance('aca', 'caca')", isOneEditDistance('aca', 'caca')); // true (because of diff === 1)
console.log("!!SHOULD BE FALSE isOneEditDistance('ab', 'ba')", isOneEditDistance('ab', 'ba')); // false (because of diff === 2)
console.log("!!SHOULD BE TRUE isOneEditDistance('a', 'ac')", isOneEditDistance('a', 'ac')); // true (because of diff === 1)