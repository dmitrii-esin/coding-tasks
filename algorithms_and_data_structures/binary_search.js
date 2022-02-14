// Binary search

// Binary search is an efficient algorithm for finding an item from a sorted list of items. 
// It works by repeatedly dividing in half the portion of the list that could contain the item, 
//   until you've narrowed down the possible locations to just one.

// 1. Let min = 1min=1m, i, n, equals, 1 and max = nmax=nm, a, x, equals, n.
// 2. Guess the average of maxmaxm, a, x and minminm, i, n, rounded down so that it is an integer.
// 3. If you guessed the number, stop. You found it!
// 4. If the guess was too low, set minminm, i, n to be one larger than the guess.
// 5. If the guess was too high, set maxmaxm, a, x to be one smaller than the guess.
// 6. Go back to step two.

function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let guess = list[mid];

    if (guess === item) {
      return mid;
    }
    
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // null