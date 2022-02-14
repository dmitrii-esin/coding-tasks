// Dynamic programing 
// If we can divide the problem into indedepnent smaller problems

// How to:
// 1) Build the table
// 2) Resolve subproblems (cell value = optimized characteristic)

// Examples:

// I. Сalculate overlap or max fill

// Given bag and goods, max weight of bag: 6, calc max price with filled bag.

// Costs of goods:
// 1. water
// weight: 3
// price: 10
// 2. book
// weight: 1
// price: 3
// 3. food
// weight: 2
// price: 9
// 4. jacet
// weight: 2
// price: 5
// 5. camera
// weight: 1
// price: 6

// Builded table: 
//        1  2  3  4  5  6
// water
// book
// food
// jacet
// camera

// Processed table: 
//        1  2  3  4  5  6
// water  -  -  10 10 10 10
// book   3  3  3  13 13 13
// food   -  9  12 12 19 19
// jacet  -  5  8  14 17 18
// camera 6  9  15 18 20 25
// result = water (10) + food (9) + camera (6) = 25

// II. Max sequence (Levenshtein distance algorithm)

// Given words "FISH" and "HISH", calc max letter sequence

// Builded and processed table:
//   H I S H
// F 0 0 0 1
// I 0 1 0 0
// S 0 0 2 0
// H 1 0 0 3
// result = (increment 1 if prev cell table[i-1][j-1] is positive) = { count: 3, substring: 'ISH' }

// Tables can seems like that:
// {
//   hitar: {'1': 100, '2': 200},
//   magn: {'1': 90, '2': 250},
// }

// [
//   { name: 'hitar', '1': 100, '2': 200 },
//   { magn: 'hitar', '1': 90, '2': 250 },
// ]

// [
//   [ hitar, 100, 200 ],
//   [ magn, 90, 250 ],
// ]

// [
//   { name: 'hitar', cells: [100, 200] },
//   { name: 'magn', cells: [90, 250] },
// ]

// Part of code example
const bagWeight = 6;

const goodsList = [
  {name: 'water', weight: 3, price: 10 },
  {name: 'book', weight: 1, price: 3 },
  {name: 'food', weight: 2, price: 9 },
  {name: 'jacet', weight: 2, price: 5 },
  {name: 'camera', weight: 1, price: 6 },
]

const calcMaxGoodsList = (list, weight) => {
  let table = {};

  for (var i = 0; i < list.length; i++) {
    for (var j = 1; j <= weight; j++) {
      const rowName = list[i].name;
      const cell = { ...table[rowName], [j]: 0 };

      // console.log('!!!!i, j', i, j);
  
      table = {
        ...table,
        [rowName]: cell
      }
    }
  }

  // {
  //   water: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 },
  //   book: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 },
  //   food: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 },
  //   jacet: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 },
  //   camera: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 }
  // }

  const result = [];

  // TODO: ...

  return result;
}

console.log(
  calcMaxGoodsList(goodsList, bagWeight)
);

// ['water', 'food', 'camera']