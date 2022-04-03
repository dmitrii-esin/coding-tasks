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

const select = (obj, path) => {
  const list = path.split(".");

  let target = { ...obj };

  for (field of list) {
    const nextField = target[field];

    if (!nextField) return null;

    target = nextField;
  }

  return target;
};

console.log(select(obj, "car")); // null
console.log(select(obj, "person.history.bio")); // { funFact: 'I like fishing.' }
console.log(select(obj, "person.history.hometown")); // "bratislava"
console.log(select(obj, "person.animal.pet.needNoseAntEater")); // null
