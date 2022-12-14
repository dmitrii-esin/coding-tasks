var insert = function (array, rightIndex, value) {
  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }
  array[j + 1] = value;
};

var insertionSort = function (array) {
  for (var i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [2, 0, -1];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [-1, 0, 2]);

//TODO another way (EPAM)
// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

// To sort an array of size n in ascending order (Figure 2.1):

// Iterate from arr[1] to arr[n] over the array.
// Compare the current element (key) to its predecessor.
// If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

// prettier-ignore
function insertionSort(numbers: number[]) {       // Cost | Repeats
    for (let i = 1; i < numbers.length; i++) {      // c[1] | n
      const numberToSort = numbers[i];              // с[2] | n-1
      let j = i - 1;                                // с[3] | n-1
  
      while (j >= 0 && numbers[j] > numberToSort) { // c[4] | Sum(j=2, n) t[j]
        numbers[j + 1] = numbers[j];                // c[5] | Sum(j=2, n) t[j-1]
        j--;                                        // c[6] | Sum(j=2, n) t[j-1]
      }
  
      numbers[j + 1] = numberToSort;                // с[7] | n-1
    }
  }

const numbers = [1, 600, 199, 20, 7, 6, 8, 1300, 12, 601];

insertionSort(numbers);

console.log(numbers);
