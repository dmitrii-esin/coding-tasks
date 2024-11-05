// 2260. Minimum Consecutive Cards to Pick Up

// Hint
// You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

// Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

// Example 1:
// Input: cards = [3,4,2,3,4,7]
// Output: 4
// Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.

// Example 2:
// Input: cards = [1,0,5,3]
// Output: -1
// Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.

// function minimumCardPickup(cards: number[]): number {
//   // 1. iter and save position + amount of each card { value: [index1, index2] }
//   const cash: Map<number, number[]> = new Map();

//   cards.forEach((card, index) => {
//     cash.set(card, (cash.get(card) || []).concat([index]));
//   });

//   let counter = 0;

//   // 2. iter over coll and calc amoutnt of required cards
//   cash.forEach((value, key) => {
//     if (value.length > 1) {
//       counter += value.length;
//     }
//   });

//   if (counter === 0) {
//     return -1;
//   } else {
//     return counter;
//   }
// }

const minimumCardPickup = function (cards: number[]): number {
  let map = new Map(); // Create a map to store card indices
  let count = Infinity; // Initialize count to positive Infinity

  for (let i = 0; i < cards.length; i++) {
    // Loop through each card
    let card = cards[i]; // Get the current card
    if (map.has(card)) {
      // If the card is already in the map
      count = Math.min(count, i - map.get(card) + 1); // calculate the minimum count
      map.set(card, i); // update the card's index in the map
    } else {
      map.set(card, i); // If the card is not in the map, add it.
    }
  }

  if (count === Infinity) return -1; // If count is still Positive ionfinity, return -1;
  return count; // Return the minimum count;
};

//also good solution:
// /**
//  * @param {number[]} cards
//  * @return {number}
//  */
// var minimumCardPickup = function(cards) {
//   let dic = new Map();
//   let ans = Infinity;
//   for (let i = 0; i < cards.length; i++) {
//       if (dic.has(cards[i])) {
//           ans = Math.min(ans, i - dic.get(cards[i]) + 1);
//       }

//       dic.set(cards[i], i);
//   }

//   return ans == Infinity ? -1 : ans;
// };

console.log(
  "!!minimumCardPickup([3,4,2,3,4,7])",
  minimumCardPickup([3, 4, 2, 3, 4, 7])
); // 4
console.log("!!minimumCardPickup([1,0,5,3])", minimumCardPickup([1, 0, 5, 3])); // -1;
