function plusOne(digits: number[]): number[] {
    let result: number[] = [];
    let isModified = false;

    for (let i = digits.length - 1; i >= 0; i--) {   
        if (isModified) {
            result = [digits[i], ...result];
        } else {
            if (digits[i] === 9) {
                if (i === 0) {
                    result = [1, 0, ...result];
                } else {
                    result = [0, ...result];
                }
            } else {
                result = [digits[i] + 1, ...result];
                isModified = true;
            }
        }
    }

    return result;
}

console.log('!!plusOne([1,2,3])', plusOne([1,2,3])); // [1,2,4]
console.log('!!plusOne([9,9])', plusOne([9,9])); // [1,0,0]
console.log('!!plusOne([[9,8,9]])', plusOne([9,8,9])); // [9,9,0]
console.log('!!plusOne([1])', plusOne([1])); // [2]
console.log('!!plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])', plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// JAVA
// class Solution {
//     public int[] plusOne(int[] digits) {
//       int n = digits.length;
  
//       // move along the input array starting from the end
//       for (int idx = n - 1; idx >= 0; --idx) {
//         // set all the nines at the end of array to zeros
//         if (digits[idx] == 9) {
//           digits[idx] = 0;
//         }
//         // here we have the rightmost not-nine
//         else {
//           // increase this rightmost not-nine by 1
//           digits[idx]++;
//           // and the job is done
//           return digits;
//         }
//       }
//       // we're here because all the digits are nines
//       digits = new int[n + 1];
//       digits[0] = 1;
//       return digits;
//     }
//   }