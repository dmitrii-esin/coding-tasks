// // Largest Room Area
// Task
// You have been given a matrix filled with 1s and 0s, where 1 represents a wall, and 0 represents empty space.

// Your task is to find the largest room in the given matrix, i.e. the largest area filled only with 0s.

// Input/Output
// [input] 2D integer array rooms
// A rectangular matrix filled with 1s and 0s.

// [output] an integer
// The area of the largest room.

// Example

// input rooms = [[1,1,1,1,1,1],
//            [1,0,1,0,0,1],
//            [1,0,1,0,0,1],
//            [1,1,1,1,1,1]]
// the output should be 4

// input rooms = [[1, 0], [0, 1]]
// the output should be 1.

// Assumptions
// 1. iter over matrix AND find 0
// 2. if 0, then counter maxArea += 1 AND iterate area L-T-R-B and find zeroes, collect all data to Map
// 3. return counter maxArea += 1

// {
//   0: [0,1],|| Set
//   1: [1,3,4],
//   2: [1,3,4],
//   3: [],
// }

// Solution
function largestRoomArea(rooms) {
  const table = new Map([[0, new Set()]]);

  for (let room = 0; room < rooms.length; room++) {
    for (let ft = 0; ft < rooms[room].length; ft++) {
      if (rooms[room][ft] === 0) {
        table.set(room, (table.get(room) || new Set()).add(ft));
      }
    }
  }

  console.log("!!table", table);

  return 0;

  //TODO:!!! try to finish
}

// function largestRoomArea(rooms) {
//   if (!rooms || rooms.length === 0) {
//     return 0; // Handle empty input
//   }

//   const rows = rooms.length;
//   const cols = rooms[0].length;
//   let maxArea = 0;

//   function dfs(row, col) {
//     if (row < 0 || row >= rows || col < 0 || col >= cols || rooms[row][col] === 1) {
//       return 0; // Out of bounds or wall
//     }

//     rooms[row][col] = 1; // Mark as visited
//     let area = 1; // Count the current cell

//     // Explore adjacent cells (up, down, left, right)
//     area += dfs(row + 1, col);
//     area += dfs(row - 1, col);
//     area += dfs(row, col + 1);
//     area += dfs(row, col - 1);

//     return area;
//   }

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (rooms[i][j] === 0) {
//         maxArea = Math.max(maxArea, dfs(i, j));
//       }
//     }
//   }

//   return maxArea;
// }

function largestRoomArea(rooms) {
  let current = 0,
    largest = 0;

  function process(x, y) {
    if (rooms[y][x] === 0) {
      rooms[y][x] = 2;
      current++;
      if (x > 0) process(x - 1, y);
      if (x <= rooms[y].length - 2) process(x + 1, y);
      if (y > 0) process(x, y - 1);
      if (y <= rooms.length - 2) process(x, y + 1);
    }
  }

  for (let y = 0; y < rooms.length; y++) {
    for (let x = 0; x < rooms[y].length; x++) {
      process(x, y);
      if (current > largest) largest = current;
      current = 0;
    }
  }
  return largest;
}

function largestRoomArea(rooms) {
  let max = 0;
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      let temp = findZeros(rooms, i, j);
      if (temp > max) max = temp;
    }
  }
  return max;
}

function findZeros(rooms, i, j) {
  let currentPos = (rooms[i] || [])[j];
  if (currentPos !== 0) return 0;
  rooms[i][j] = -1;
  return (
    1 +
    findZeros(rooms, i + 1, j) +
    findZeros(rooms, i, j + 1) +
    findZeros(rooms, i - 1, j) +
    findZeros(rooms, i, j - 1)
  );
}

function largestRoomArea(rooms) {
  const numRows = rooms.length;
  const numCols = rooms[0].length;
  let maxArea = 0;

  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= numRows ||
      col < 0 ||
      col >= numCols ||
      rooms[row][col] === 1
    ) {
      return 0;
    }

    rooms[row][col] = 1; // Mark the current cell as visited
    let area = 1;
    area += dfs(row + 1, col);
    area += dfs(row - 1, col);
    area += dfs(row, col + 1);
    area += dfs(row, col - 1);
    return area;
  };

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (rooms[row][col] === 0) {
        const area = dfs(row, col);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}

//TODO:!!!!! my attempt:
function largestRoomArea(rooms) {
  // counter = 0

  // max = 0

  // run over matrix row->cols

  // if 1, go forward, update max = Math.max(current, max) and reset a counter to 0

  // if 0, DFS clockwise to find 0-es, maintain current

  // return max;

  const isDeadEnd = () => true;

  const walkAroundCurrentPoint = (area, position, counter, state = "L") => {
    if (area[position[0][position[1]]] === 1) {
      return counter;
    } else if (!isDeadEnd) {
      return walkAroundCurrentPoint();
    } else if (isDeadEnd) {
      return counter;
    }
  };

  let counter = 0;
  let max = 0;

  for (let row = 0; row < rooms.length; row++) {
    for (let column = 0; column < room[row].length; column++) {
      if (rooms[row][column] === 0) {
        counter += 1;
        counter = walkAroundCurrentPoint(rooms, [row, column], counter);
        max = Math.max(counter, max);
      } else {
        counter = 0;
      }
    }
  }

  return max;
}
