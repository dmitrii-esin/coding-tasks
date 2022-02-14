const bubbleSort = (arr) => {
    const size = arr.length;
    const newArr = arr;
    
    for (let i = 1; i < size; i++) {
       for (let j = size - 1; j >= i; j--) {
         if (newArr[j - 1] > newArr[j]) {
           let tmp = newArr[j - 1];
           newArr[j - 1] = newArr[j];
           newArr[j] = tmp;
         }
       }
     }
     return newArr;
   }