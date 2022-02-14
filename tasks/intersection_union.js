// # Intersection

// ## Native
let firstArray = [
	{value: "Пользователь #5", label: "Пользователь #5"}
];
let secondArray = [
	{value: "Пользователь #5", label: "Пользователь #5"},
	{value: "Пользователь #6", label: "Пользователь #677777"}
];
const intersection = (firstArray, secondArray) => {
  let hashmap = {};
  let intersectionArray = [];

  firstArray.forEach(element => hashmap[element] = 1);

  secondArray.forEach(element => {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;
}
intersection(firstArray, secondArray); // => [ { value: 'Пользователь #5', label: 'Пользователь #5' } ]

// ## Native
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [2, 3];
function intersection(a, b) {
  return a.filter(Set.prototype.has, new Set(b));
}
intersection(arrayA, arrayB); // [2, 3]

// ## Underscore/Lodash
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [2, 3];
_.intersection(arrayA, arrayB);


// # Union

// ## Native
const arrayA = [1, 2, 3, 4];
const arrayB = [3, 4, 5, 6];
const unionArrays = (a, b) => Array.from(new Set([...a, ...b]));
unionArrays(arrayA, arrayB); // [1, 2, 3, 4, 5, 6]

// ## Underscore/Lodash
const arrayA = [1, 2, 3, 4];
const arrayB = [3, 4, 5, 6];
_.union(arrayA, arrayB);