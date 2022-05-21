// Find student with max average grade

const students = [
  ["John", 96],
  ["Bob", 77],
  ["Alex", 87],
  ["Bob", 3],
  ["Peter", 89],
  ["Bob", 11],
  ["John", 122],
  ["Alex", 1],
];

const findMaximumAverage = (list) => {
  const [head, ...tail] = list;

  const quantityMap = {};
  const gradeMap = {};

  list.forEach((student) => {
    const [name, grade] = student;
    if (quantityMap[name]) {
      quantityMap[name]++;
    } else {
      quantityMap[name] = 1;
    }
  });

  list.forEach((student) => {
    const [currentName, currentGrade] = student;

    if (gradeMap[currentName]) {
      gradeMap[currentName] = gradeMap[currentName] + currentGrade;
    } else {
      gradeMap[currentName] = currentGrade;
    }
  });

  let max = head;

  for (let currentName in gradeMap) {
    const [, maxGrade] = max;
    const currentMaxGrade = gradeMap[currentName] / quantityMap[currentName];

    if (currentMaxGrade > maxGrade) {
      max = [currentName, currentMaxGrade];
    }
  }

  return max;
};

// const findMaximumAverage = (list) => {
//   const quantityMap = {};
//   const gradeMap = {};

//   list.forEach(([name]) => {
//     const count = quantityMap[name];

//     if (!count) quantityMap[name] = 1;
//     if (count) quantityMap[name] = count + 1;
//   });

//   list.forEach(([name, grade]) => {
//     const currentGrade = gradeMap[name];

//     if (!currentGrade) gradeMap[name] = grade;
//     if (currentGrade) gradeMap[name] = currentGrade + grade;
//   });

//   let max = ["", 0];

//   for (let name in gradeMap) {
//     const [, currentBestGrade] = max;

//     const currentQuantity = quantityMap[name];
//     let currentMax = 0;

//     if (currentQuantity === 1) {
//       currentMax = gradeMap[name];
//     } else {
//       currentMax = gradeMap[name] / currentQuantity;
//     }

//     if (currentMax > currentBestGrade) {
//       max = [name, currentMax];
//     }
//   }

//   return max;
// };

console.log(findMaximumAverage(students)); // ['John', 109]

// const findMaximumAverage = (list) => {
//   const quantityMap = {};
//   const gradeMap = {};

//   // fill quantity map
//   for (var i = 0; i < list.length; i++) {
//     const [name, grade] = list[i];
//     const count = quantityMap[name];

//     if (!count) quantityMap[name] = 1;
//     if (count) quantityMap[name] = count + 1;
//   }

//   // fill weights map
//   for (var i = 0; i < list.length; i++) {
//     const [name, grade] = list[i];
//     const count = gradeMap[name];

//     if (!count) gradeMap[name] = grade;
//     if (count) gradeMap[name] = count + grade;
//   }

//   // find student with max average grade
//   let student = ['', 0];

//   for (let name in gradeMap) {
//     const [, grade] = student;
//     const currentGrade = gradeMap[name] / quantityMap[name];

//     if (currentGrade > grade) student = [name, currentGrade];
//   }

//   return student;
// }

// console.log(findMaximumAverage(students)) // ['John', 109]
