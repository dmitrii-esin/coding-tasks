// For example: 13, 17 are prime numbers and the reversed respectively are 31, 71 which are also primes, so 13 and 17 are "emirps". But primes 757, 787, 797 are palindromic primes, meaning that the reversed number is the same as the original, so they are not considered as "emirps" and should be discarded.

// The emirps sequence is registered in OEIS as A006567

// Your task
// Create a function that receives one argument n, as an upper limit, and the return the following array:

// [number_of_emirps_below_n, largest_emirp_below_n, sum_of_emirps_below_n]

// Examples
// find_emirp(10)
// [0, 0, 0] ''' no emirps below 10 '''

// find_emirp(50)
// [4, 37, 98] ''' there are 4 emirps below 50: 13, 17, 31, 37; largest = 37; sum = 98 '''

// find_emirp(100)
// [8, 97, 418] ''' there are 8 emirps below 100: 13, 17, 31, 37, 71, 73, 79, 97; largest = 97; sum = 418 '''
// Happy coding!!

// Advise: Do not use a primality test. It will make your code very slow. Create a set of primes using a prime generator or a range of primes producer. Remember that search in a set is faster that in a sorted list or array

// function findEmirp(n) {
//   const isPrimeNumber = (n) => n > 1 && n % 2 !== 0;
//   const reverseNumber = (num) =>
//     Number(String(num).split("").reverse().join(""));

//   const emirps = [];
//   let sum = 0;
//   let largest = 0;

//   for (i = n - 1; i > 1; i--) {
//     if (isPrimeNumber(i) && i !== reverseNumber(i)) {
//       emirps.push(i);
//       sum += 1;
//       largest = Math.max(largest, i);
//     }
//   }

//   //console.log('!!input, output', n, emirps);

//   // [number_of_emirps_below_n, largest_emirp_below_n, sum_of_emirps_below_n]

//   return [emirps.length, largest, sum];
// }
