// Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
//   Input: s1 = "ab", s2 = "eidbaooo"
//   Output: true
//   Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
//   Input: s1 = "ab", s2 = "eidboaoo"
//   Output: false

// Constraints:
//   1 <= s1.length, s2.length <= 104
//   s1 and s2 consist of lowercase English letters.


// var checkInclusion = function (s1, s2) {
//   if (s1 === s2) return true;
//   if (s1.length > s2.length) return false;

//   var abc = {
//     "a": 0,
//     "b": 0,
//     "c": 0,
//     "d": 0,
//     "e": 0,
//     "f": 0,
//     "g": 0,
//     "h": 0,
//     "i": 0,
//     "j": 0,
//     "k": 0,
//     "l": 0,
//     "m": 0,
//     "n": 0,
//     "o": 0,
//     "p": 0,
//     "q": 0,
//     "r": 0,
//     "s": 0,
//     "t": 0,
//     "u": 0,
//     "v": 0,
//     "w": 0,
//     "x": 0,
//     "y": 0,
//     "z": 0
//   }
//   var s1Map = { ...abc };
//   var s2Map = { ...abc };
//   var fastPoint = 0;
//   var slowPoint = 0;

//   for (var i = 0; i < s1.length; i++) {
//     var count = s1Map[s1[i]];
//     s1Map[s1[i]] = count + 1;
//   }

//   while (slowPoint < s2.length) {
//     if ((fastPoint - slowPoint) < s1.length) {
//       var count = s2Map[s2[fastPoint]];
//       s2Map[s2[fastPoint]] = count + 1;
//       fastPoint += 1;
//     }

//     if ((fastPoint - slowPoint) === s1.length) {
//       if (isEqual(s1Map, s2Map)) return true;
//       slowPoint += 1;
//       fastPoint = slowPoint;
//       s2Map = { ...abc };
//     }

//     if (fastPoint === s2.length) return isEqual(s1Map, s2Map);
//   }

//   return false;
// };

// var isEqual = (map1, map2) => {
//   for (var i in map2) {
//     if (map1[i] !== map2[i]) return false;
//   }

//   return true;
// }

var checkPermutation = function(s1, s2) {
  let s1Code = 0;
  let s2Code = 0;

  for (var i = 0; i < s1.length; i++) {
    s1Code = s1Code + s1[i].charCodeAt();
    s2Code = s2Code + s2[i].charCodeAt();
  }

  return s1Code === s2Code;
}

var checkInclusion = function (s1, s2) {
  if (s1 === s2) return true;
  if (s1.length > s2.length) return false;

  var slowPointer = 0;
  var fastPointer = 1;
  var currentWindow = '';

  while (slowPointer < s2.length) {
    if (currentWindow.length < s1.length && fastPointer < s2.length) {
      currentWindow = `${currentWindow}${s2[fastPointer]}`;
      fastPointer++;
    } else {
      if (checkPermutation(s1, currentWindow)) return true;
      if (fastPointer === s2.length) return checkPermutation(s1, currentWindow);
      slowPointer++;
      fastPointer = slowPointer + 1;
      currentWindow = '';
    }
  }
}

console.log('!!checkInclusion("ab", "eidbaooo"), checkInclusion("ab", "eidboaoo")',
  checkInclusion("ab", "eidbaooo"), // true
  checkInclusion("ab", "eidboaoo") // false
);