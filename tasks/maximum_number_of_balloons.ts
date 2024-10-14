// # 1189. Maximum Number of Balloons

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0

// Constraints:
// 1 <= text.length <= 104
// text consists of lower case English letters only.

// Note: This question is the same as 2287: Rearrange Characters to Make Target String.

// Hint 1
// Count the frequency of letters in the given string.

// Hint 2
// Find the letter than can make the minimum number of instances of the word "balloon".

// This problem can be interestingly related to production management. Assume there is an industry that produces a product X. The product X can be produced by assembling one instance of each of five different parts. We have some fixed quantity of each of these parts, then the maximum number of product X that can be produced will be equal to the quantity of that part which is available in the least quantity. This least available part is known as the bottleneck resource.

function maxNumberOfBalloons(text: string): number {
  const counts = new Map();
  const eq = new Map([
    ["b", 1],
    ["a", 1],
    ["l", 2],
    ["o", 2],
    ["n", 1],
  ]);
  let ans = Infinity;

  // Count the frequency of relevant characters
  for (let i = 0; i < text.length; i++) {
    if (eq.has(text[i])) {
      counts.set(text[i], (counts.get(text[i]) || 0) + 1);
    }
  }

  // Calculate the maximum number of "balloon" that can be formed
  eq.forEach((value, key) => {
    let prod = counts.get(key) || 0;
    if (key === "l" || key === "o") {
      prod = Math.floor(prod / 2);
    }
    ans = Math.min(ans, prod);
  });

  console.log("!!counts,eq", counts, eq);

  return ans;
}

console.log(
  '!!maxNumberOfBalloons("nlaebolko")',
  maxNumberOfBalloons("nlaebolko")
); // 1
console.log(
  '!!maxNumberOfBalloons("loonbalxballpoon")',
  maxNumberOfBalloons("loonbalxballpoon")
); // 2
console.log(
  '!!maxNumberOfBalloons("leetcode")',
  maxNumberOfBalloons("leetcode")
); // 0
console.log('!!maxNumberOfBalloons("balon")', maxNumberOfBalloons("balon")); // 0

const bigString =
  "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw";

console.log("!!maxNumberOfBalloons(bigString)", maxNumberOfBalloons(bigString)); // 10
