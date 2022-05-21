// Object path finder

const obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

// const select = (obj, path) => {
//   const list = path.split(".");

//   let target = { ...obj };

//   for (field of list) {
//     const nextField = target[field];

//     if (!nextField) return null;

//     target = nextField;
//   }

//   return target;
// };

const select = (obj, path) => {
  const pathList = path.split(".");
  let currentField = obj;

  for (let i = 0; i < pathList.length; i++) {
    if (!currentField[pathList[i]]) {
      return null;
    } else {
      currentField = currentField[pathList[i]];
    }
  }

  return currentField;
};

console.log(select(obj, "car")); // null
console.log(select(obj, "person.history.bio")); // { funFact: 'I like fishing.' }
console.log(select(obj, "person.history.hometown")); // "bratislava"
console.log(select(obj, "person.animal.pet.needNoseAntEater")); // null
