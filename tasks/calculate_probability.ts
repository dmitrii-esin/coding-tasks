// Same Birthday Probability

// Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year).
// Answers should be two decimals unless whole (0 or 1) eg 0.05

// when n === 5, answer = 0.03
// when n === 1000, answer = 1

function calculateProbability(n) {
  // Given n number of people in a room,
  // calculate the probability that any two people in that room have the same birthday
  // (assume 365 days every year = ignore leap year).
  // Answers should be two decimals unless whole (0 or 1) eg 0.05
  // when n === 5, answer = 0.03
  // when n === 1000, answer = 1
}

// function calculateProbability(n) {
//   if (n < 2) {
//     return 0;
//   }

//   let probabilityNoMatch = 1;
//   for (let i = 1; i <= n; i++) {
//     probabilityNoMatch *= (365 - i + 1) / 365;
//   }

//   return parseFloat((1 - probabilityNoMatch).toFixed(2));
// }

// Test.expect(calculateProbability(5)==0.03);
// Test.expect(calculateProbability(1000)==1);
