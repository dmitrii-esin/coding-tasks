// When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

// Description:
// In kindergarten, the teacher gave the children some candies. The number of candies each child gets is not always the same. Here is an array candies(all elements are positive integer). It's the number of candy for each child:

// candies = [10,2,8,22,16,4,10,6,14,20]
// The teacher asked the children to form a circle and play a game: Each child gives half of his candies to the child on his right(at the same time). If the number of children's candy is an odd number, the teacher will give him an extra candy, so that he can evenly distribute his candy.

// Repeat such distribute process, until all the children's candies are equal in number.

// You should return two numbers: 1.How many times of distribution; 2. After the game, the number of each child's candy. Returns the result using an array that contains two elements.

// Some examples:
//       candies = [ 1,2,3,4,5 ]
// Distribution 1: [ 4,2,3,4,5 ]
// Distribution 2: [ 5,3,3,4,5 ]
// Distribution 3: [ 6,5,4,4,5 ]
// Distribution 4: [ 6,6,5,4,5 ]
// Distribution 5: [ 6,6,6,5,5 ]
// Distribution 6: [ 6,6,6,6,6 ]
// So, we need return: [6,6]

// distributionOfCandy([1,2,3,4,5]) === [6,6]

//        candies = [ 10,  2,  8, 22, 16,  4, 10,  6, 14, 20 ]
// distribution  1: [ 15,  6,  5, 15, 19, 10,  7,  8, 10, 17 ]
// distribution  2: [ 17, 11,  6, 11, 18, 15,  9,  8,  9, 14 ]
// distribution  3: [ 16, 15,  9,  9, 15, 17, 13,  9,  9, 12 ]
// distribution  4: [ 14, 16, 13, 10, 13, 17, 16, 12, 10, 11 ]
// distribution  5: [ 13, 15, 15, 12, 12, 16, 17, 14, 11, 11 ]
// distribution  6: [ 13, 15, 16, 14, 12, 14, 17, 16, 13, 12 ]
// distribution  7: [ 13, 15, 16, 15, 13, 13, 16, 17, 15, 13 ]
// distribution  8: [ 14, 15, 16, 16, 15, 14, 15, 17, 17, 15 ]
// distribution  9: [ 15, 15, 16, 16, 16, 15, 15, 17, 18, 17 ]
// distribution 10: [ 17, 16, 16, 16, 16, 16, 16, 17, 18, 18 ]
// distribution 11: [ 18, 17, 16, 16, 16, 16, 16, 17, 18, 18 ]
// distribution 12: [ 18, 18, 17, 16, 16, 16, 16, 17, 18, 18 ]
// distribution 13: [ 18, 18, 18, 17, 16, 16, 16, 17, 18, 18 ]
// distribution 14: [ 18, 18, 18, 18, 17, 16, 16, 17, 18, 18 ]
// distribution 15: [ 18, 18, 18, 18, 18, 17, 16, 17, 18, 18 ]
// distribution 16: [ 18, 18, 18, 18, 18, 18, 17, 17, 18, 18 ]
// distribution 17: [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]
// So, we need return: [17,18]

// distributionOfCandy([10,2,8,22,16,4,10,6,14,20]) === [17,18]

function areAllEqual(arr) {
  return arr.every((val) => val === arr[0]);
}

function distributionOfCandy(candies) {
  // Check if already equal
  if (areAllEqual(candies)) {
    return [0, candies[0]];
  }

  let counter = 0;
  let list = [...candies];

  while (!areAllEqual(list)) {
    counter++; // Increment counter for each complete round
    let nextList = new Array(list.length).fill(0);

    // Process one complete round
    for (let i = 0; i < list.length; i++) {
      // Add extra candy if odd
      if (list[i] % 2 === 1) {
        list[i]++;
      }

      const half = list[i] / 2;
      const nextIndex = (i + 1) % list.length;

      // Keep half
      nextList[i] += half;
      // Give half to next
      nextList[nextIndex] += half;
    }

    list = nextList;
  }

  return [counter, list[0]];
}

// const isUnique = (x, i, arr) => x != arr[0];
// const sumOneIfOdd = x => x + x % 2;

// const cycleIn = arr => i =>
// 	arr[(arr.length + ~-i) % arr.length];

// const distribute = (x, i, arr) =>
// 	(sumOneIfOdd(x) + sumOneIfOdd(cycleIn(arr)(i))) / 2;

// const distributionOfCandy = (arr, n = 0) => {
//   while (arr.some(isUnique))
//     arr = arr.map(distribute), n++;
//   return [n, arr[0]];
// }

// const distributionOfCandy = candies => {
//   const half = val => Math.ceil(val / 2);

//   let count = 0;

//   while (candies.some(val => val !== candies[0])) {
//     candies = candies.map((val, idx) => half(val) + half(candies.at(idx-1)));
//     count++;
//   }

//   return [count, candies[0]];
// }

// function distributionOfCandy(candies){
//   function check(arr) {
//       return arr.every(v => v == arr[0])
//   }
//   function distribute(arr) {
//       return arr.map((v, i) => {
//           let prev = Math.round(arr[i > 0 ? i - 1 : arr.length - 1] / 2)
//           let current = Math.round(v / 2)

//           return prev + current
//       })
//   }
//   let c = 0;
//   while(!check(candies)) {
//       candies = distribute(candies)
//       c++
//   }
// return [c, candies[0]]
// }

// Let's find the most optimal solutions for these test cases:
// candies = [ 1,2,3,4,5 ]
// So, we need return: [6,6]

// candies = [ 10,  2,  8, 22, 16,  4, 10,  6, 14, 20 ]
// So, we need return: [17,18]
