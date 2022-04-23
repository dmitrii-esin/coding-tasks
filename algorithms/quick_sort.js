// I. Classic 'hard' iterative quick sort, in-place: 

var quickSort = function(array, p, r) {
    if (p < r) {
        var pivot = partition(array, p, r);
        quickSort(array, p, pivot - 1);
        quickSort(array, pivot + 1, r);
    }
};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    var q = p;
    
    for (var j = p; j < r; j++) {
        if (array[j] <= array[r]) {
            swap(array, j, q);
            q++;
        }
    }
    
    swap(array, r, q);
    
    return q;
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];

var q = partition(array, 0, array.length-1);

console.log(
  '!!!!!!!!q, array', q, array
);


// !!!!!!!!q, array 4 [
//    5,  2, 3,  4,  6,
//    7, 14, 9, 10, 11,
//   12
// ]

// II. Recuresive and cute quicksort, not in-place:

const arr = [2, 7, 3, -1, 5, 0, 4];

const quicksort = list => {
  if (list.length < 2) return list;
  
  const pivot = Math.floor(list.length / 2);
  const left = list.filter(i => i < list[pivot]);
  const right = list.filter(i => i > list[pivot]);
  
  console.log('!!left', left);
  console.log('!!right', right);

//   return null;

  return quicksort(left).concat(list[pivot]).concat(quicksort(right));
}

quicksort(arr);