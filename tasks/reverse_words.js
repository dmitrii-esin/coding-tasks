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
