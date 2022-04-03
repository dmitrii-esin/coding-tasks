//TODO: sort strings alphabetically using custom sort fn

const data = [
  "ivan",
  "iskander",
  "alex",
  "alisa",
  "antony",
  "migel",
  "abuela",
  "aztec",
  "bernard",
  "bart",
  "bethrezen",
];

const sortStringsAlpha = (list: string[]): string[] => {
  //TODO:
  // 1) map { letter: weight } ( { a: 0, b: 1, ... } )
  // 2) map with calculated "weights" of each word { index: weight } ( { o: 11, 1: 7, ... } )
  // 3) generate list of words from word with min weight to word with max weight ( ["abuela", "bart", ...] )
  // 4) optimize
  // 5) check solutions on leetcode

  return [];
};

console.log("!! sortStringsAlpha(data)", sortStringsAlpha(data)); // ['abuela', 'alex', 'alisa', 'antony', 'aztec', 'bart', 'bernard', 'bethrezen', 'iskander', 'ivan', 'migel']
