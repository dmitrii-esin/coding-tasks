// Example 1: You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "eceba" and k = 2, return 3.
// The longest substring with at most 2 distinct characters is "ece".

// Please review the sliding window article if you have forgotten the sliding window algorithm.

// In this problem, the constraint metric is "how many unique characters are in the window". The numeric restriction is <= k. We can use a hash map counts that keeps track of the frequency of each character in the window. The length of counts is the number of keys, which is also the constraint metric. Therefore the window is invalid when counts.length > k.

// When we add a character s[right], we increment its frequency in counts by one. If it doesn't exist in counts, we insert a new key value pair s[right]: 1.

// When we remove a character s[left], we decrement its frequency in counts by one. If the frequency becomes 0, we know that this character no longer exists. Therefore we delete the key from the hash map, which also decreases the length of counts.

// Recall that the length of a window is right - left + 1.

const findLognestSubstring = (s: string, k: number) => {
  let hashMap: Record<string, number> = {};
  let maximum = 0;

  if (s.length < k) return 0;

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (!hashMap[s[right]]) {
      hashMap[s[right]] = 1;
    } else {
      hashMap[s[right]] += 1;
    }

    while (Object.keys(hashMap).length > k) {
      left += 1;
      hashMap[s[right]] -= 1;

      if (hashMap[s[right]] === 0) {
        delete hashMap[s[right]];
      }
    }

    maximum = Math.max(maximum, right - left + 1);

    const param = {
      left,
      right,
      hashMap,
      maximum,
    };

    console.log("!!param", param);
  }

  return maximum;
};

console.log(
  '!!findLognestSubstring("eceba", 2)',
  findLognestSubstring("eceba", 2)
); // 3

//TODO: the same solution but with advanced datatypes - Map
let findLongestSubstring = (s, k) => {
  let counts = new Map();

  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    counts.set(s[right], (counts.get(s[right]) || 0) + 1);

    while (counts.size > k) {
      counts.set(s[left], counts.get(s[left]) - 1);

      if (counts.get(s[left]) == 0) {
        counts.delete(s[left]);
      }

      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};
