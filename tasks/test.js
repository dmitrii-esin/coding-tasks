// function countDuplicate(numbers) {
//   const numsHash = {};
//   let counter = 0;

//   numbers.forEach((num) => {
//     const currentNum = numsHash[num];

//     if (!numsHash[num]) {
//       numsHash[num] = 1;
//     } else {
//       numsHash[num] = currentNum + 1;
//     }

//     if (numsHash[num] === 2) {
//       counter++;
//     }
//   });

//   return counter;
// }

// const data = [1, 1, 2, 2, 2, 3, 6, 7, 3, 3, 3, 8]; // 3
sp;
// console.log("!!countDuplicate(data)", countDuplicate(data));

const reverseWords = (words) => {
  const wordsColl = words.split(" ");
  const acc = [];

  for (let i = wordsColl.length - 1; i > -1; i--) {
    acc.push(wordsColl[i]);
  }

  return acc.join(" ");
};

console.log(
  '!!reverseWords("alpha bravo charlie delta") ',
  reverseWords("alpha bravo charlie delta")
);
