// Given an m x n matrix, return all elements of the matrix in spiral order.
function spiralOrder(matrix: number[][]): number[] {
    const STATES = {
        TOP_LEFT_TO_TOP_RIGHT: "TOP_LEFT_TO_TOP_RIGHT",
        TOP_RIGHT_TO_BOTTOM_RIGHT: "TOP_RIGHT_TO_BOTTOM_RIGHT",
        BOTTOM_RIGHT_TO_BOTTOM_LEFT: "BOTTOM_RIGHT_TO_BOTTOM_LEFT",
        BOTTOM_LEFT_TO_TOP_LEFT: "BOTTOM_LEFT_TO_TOP_LEFT",
    }

    const m = matrix.length;
    const n = matrix[0].length;

    const result: number[] = [];

    let row = 0;
    let col = 0;

    let topBorder = 1;
    let rightBorder = matrix[0].length - 1;
    let bottomBorder = matrix.length - 1;
    let leftBorder = 0;

    let currentState = STATES.TOP_LEFT_TO_TOP_RIGHT;

    for (let i = 0; i < m * n; i++) {
        if (currentState === STATES.TOP_LEFT_TO_TOP_RIGHT) {
            if (col < rightBorder) {
                result.push(matrix[row][col]);
                col = col + 1;
            } else {
                result.push(matrix[row][col]);
                row = row + 1;
                rightBorder = rightBorder - 1;
                currentState = STATES.TOP_RIGHT_TO_BOTTOM_RIGHT;
            }
        } else if (currentState === STATES.TOP_RIGHT_TO_BOTTOM_RIGHT) {
            if (row < bottomBorder) {
                result.push(matrix[row][col]);
                row = row + 1;
            } else {
                result.push(matrix[row][col]);
                bottomBorder = bottomBorder - 1;
                col = col - 1;
                currentState = STATES.BOTTOM_RIGHT_TO_BOTTOM_LEFT;
            }
        } else if (currentState === STATES.BOTTOM_RIGHT_TO_BOTTOM_LEFT) {
            if (col > leftBorder) {
                result.push(matrix[row][col]);
                col = col - 1;
            } else {
                result.push(matrix[row][col]);
                row = row - 1;
                leftBorder = leftBorder + 1;
                currentState = STATES.BOTTOM_LEFT_TO_TOP_LEFT;
            }
        } else if (currentState === STATES.BOTTOM_LEFT_TO_TOP_LEFT) {
            if (row > topBorder) {
                result.push(matrix[row][col]);
                row = row - 1;
            } else {
                result.push(matrix[row][col]);
                col = col + 1;
                topBorder = topBorder + 1;
                currentState = STATES.TOP_LEFT_TO_TOP_RIGHT;
            }
        }
    }

    return result;
};

console.log('!!spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])', spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// [1,2,3,4,8,12,11,10,9,5,6,7]

console.log('!!spiralOrder([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25],[26,27,28,29,30]])', spiralOrder([
[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11,12,13,14,15],
[16,17,18,19,20],
[21,22,23,24,25],
[26,27,28,29,30],
]));