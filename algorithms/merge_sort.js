// I.

const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = (j = 0);

  // сравниваем два массива, поочередно сдвигая указатели
  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++]);
  }

  // обрабатываем последний элемент при разной длине массивов
  // и возвращаем один отсортированный массив
  return [...arrSort, ...arrFirst.slice(i), ...arrSecond.slice(j)];
};

const mergeSort = (arr) => {
  // Проверяем корректность переданных данных
  if (!arr || !arr.length) {
    return null;
  }

  //Если массив содержит один элемент просто возвращаем его
  if (arr.length <= 1) {
    return arr;
  }

  // Находим середину массива и делим его на два
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  // Для новых массивов снова вызываем сортировку,
  // сливаем их и возвращаем снова единый массив
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

// II.

const data = [7, 0, 180, 11, 2, 3, 99, -5, 4, 5];

const merge = (leftArr, rightArr) => {
  const arr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      arr.push(leftArr.shift());
    } else {
      arr.push(rightArr.shift());
    }
  }

  return arr.concat(leftArr).concat(rightArr);
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const leftIndex = 0;
  const rightIndex = arr.length - 1;
  const midIndex = Math.floor(arr.length / 2);

  const leftArr = arr.slice(leftIndex, midIndex);
  const rightArr = arr.slice(midIndex, rightIndex + 1);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

mergeSort(data);
// [ -5, 0, 2, 3, 4, 5, 7, 11, 99, 180 ]

// ==== ========

// merge arrays + insertion sort
export const mergeSort = (xs) => {
  const pivot = Math.floor(xs.length / 2);
  if (pivot === 0) {
    return xs;
  }
  const left = xs.slice(0, pivot);
  const right = xs.slice(pivot);

  return merge(mergeSort(left), mergeSort(right));
};

// merge arrays
const merge = (first, second) => {
  const iter = (current, another, result) => {
    if (current.length === 0) {
      return [...result, ...another];
    } else if (another.length === 0) {
      return [...result, ...current];
    }

    let newCurrent, newAnother;

    if (current[0] >= another[0]) {
      newCurrent = another;
      newAnother = current;
    } else {
      newCurrent = current;
      newAnother = another;
    }

    return iter(newCurrent.slice(1), newAnother, [...result, newCurrent[0]]);
  };
  return iter(first, second, []);
};

//TODO: another way (EPAM)

function merge(left: number[], right: number[]) {
  const result = [];
  const leftLenght = left.length;
  const rightLength = right.length;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftLenght && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  while (leftIndex < leftLenght) {
    result.push(left[leftIndex++]);
  }

  while (rightIndex < rightLength) {
    result.push(right[rightIndex++]);
  }

  return result;
}

function mergeSort(numbers: number[]): number[] {
  const length = numbers.length;
  const mid = Math.floor(length * 0.5);
  const left = numbers.slice(0, mid);
  const right = numbers.slice(mid, length);

  if (length === 1) {
    return numbers;
  }

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1, 600, 199, 20, 7, 6, 8, 1300, 12, 601]));
