// Pascal's Triangle II

// Solution
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

function getRow(rowIndex: number): number[] {
  const triangle = generate(rowIndex + 1);

  return triangle[rowIndex];
}

function generate(numRows: number): number[][] {
  const triangle: number[][] = [];

  const generateNextRow = (prevRow: number[]): number[] => {
    const row: number[] = [];
    const lastIndex = prevRow.length - 1;

    prevRow.forEach((item, index) => {
      const nextIndex = index + 1;

      if (nextIndex <= lastIndex) row.push(prevRow[index] + prevRow[nextIndex]);
    });

    return row;
  };

  for (let i = 1; i <= numRows; i++) {
    if (i === 1) triangle.push([1]);
    if (i === 2) triangle.push([1, 1]);

    if (i > 2) {
      const row = generateNextRow(triangle[triangle.length - 1]);

      triangle.push([1, ...row, 1]);
    }
  }

  return triangle;
}

console.log("!!SHOUL BE [1,3,3,1] getRow(3)", getRow(3));
