// 2352. Equal Row and Column Pairs
// https://leetcode.com/problems/equal-row-and-column-pairs/description/

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Example 1:
// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

// Example 2:
// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

// Constraints:
// n == grid.length == grid[i].length
// 1 <= n <= 200
// 1 <= grid[i][j] <= 105

// Topics: Array, Hash Table, Matrix, Simulation

// Hint 1: We can use nested loops to compare every row against every column.
// Hint 2: Another loop is necessary to compare the row and column element by element.
// Hint 3: It is also possible to hash the arrays and compare the hashed values instead

// Hint 4: How can we calculate the number of equal pairs? Let's say there are three rows that look like [1, 2, 3], and there are two columns that look the same. For each of the three rows, there are two columns to pair with, so that means there are 3 * 2 = 6 pairs. We can use a hash map to count how many times each row occurs. We can use a second hash map to do the same thing with the columns. Then, we can iterate over the rows hash map, and for each row, check if the same array appeared as a column. If it did, then the product of the number of appearances is added to our answer.
// The problem is, arrays can't be put in a hash map as a key because they are mutable. We need to convert the rows and columns into a hashable form such as a string or tuple. The best choice will depend on the language you're using.
// In other words, if there are x rows that are identical to y columns, then for each of the x rows, it could match with any of the y columns. This means there are x * y pairs.

function equalPairs(grid: number[][]): number {
  let sumOfPairs = 0;

  // Use two hash maps (hashHorizontal for rows and hashVertical for columns)
  // to store the counts of each unique row and column pattern.
  const hashHorizontal = new Map();
  const hashVertical = new Map();

  for (let row = 0; row < grid.length; row++) {
    let horizontal: number[] = [];
    let vertical: number[] = [];

    for (let col = 0; col < grid[row].length; col++) {
      const coll = grid[row][col];
      const roww = grid[col][row];

      horizontal.push(coll);
      vertical.push(roww);
    }

    // Convert each row and column to a string to use as a key.
    const horizontalKey = horizontal.toString();
    const verticalKey = vertical.toString();

    hashHorizontal.set(
      horizontalKey,
      (hashHorizontal.get(horizontalKey) || 0) + 1
    );
    hashVertical.set(verticalKey, (hashVertical.get(verticalKey) || 0) + 1);

    horizontal = [];
    vertical = [];
  }

  console.log("!!!hashHorizontal, hashVertical", hashHorizontal, hashVertical);

  for (const [key, value] of hashHorizontal) {
    const hasIntersections = hashHorizontal.has(key) && hashVertical.has(key);

    const horizontalCount = hashHorizontal.get(key);
    const verticalCount = hashVertical.get(key);

    // const isEqualAndOne = horizontalCount === 1 && verticalCount === 1;

    // If the key exists in both maps
    if (hasIntersections) {
      // Calculate the product of the counts from both maps for that key.
      // This product represents the total number of valid pairs for that
      // particular row and column pattern.
      // Sum these products
      // to get the total number of equal row and column pairs.
      sumOfPairs = sumOfPairs + horizontalCount * verticalCount;
    }
  }

  return sumOfPairs;
}

// ***

// Human Readable Elegant Solution

// Staz
// 50 Days Badge 2024
// 396
// Jun 02, 2023
// TypeScript
// JavaScript
// Intuition
// A Dictionary helps me keep track of iterations and multiply cols * rows to get the pairs. I didn't realize originally you had to multiply them which caused a lot of tests to fail, but this is what it means by pairs.
// ex. 2 rows x 2 cols = 4 (answer)

// Approach
// I'm using toString() because in JS/TS two arrays that look the same can be considered different objects under the hood, also you won't be able to access the keys, so the stringified version helps me access the keys with get.

// Also providing your own key function will improve efficiency but on normal development it provides such small benefit that I am not sure if it's worth the trouble.

// Complexity
// Time complexity:
// O(N^2)

// Space complexity:
// O(N^2)

// Code
// function equalPairs(grid: number[][]): number {
//   const rows = new Map()
//   const cols = new Map()

//   for(let i = 0; i < grid.length; ++i){
//     const row = [], col = []
//     for (let j = 0; j < grid[0].length; ++j){
//       row.push(grid[i][j])
//       col.push(grid[j][i].toString())
//     }
//     const strRow = row.toString()
//     const strCol = col.toString()
//     rows.set(strRow, (rows.get(strRow) ?? 0) + 1)
//     cols.set(strCol, (cols.get(strCol) ?? 0) + 1)
//   }
//   let ans = 0
//   for(const [row,value] of rows){
//     if(cols.has(row)){
//       ans += cols.get(row) * value
//     }
//   }

//   return ans
// };
