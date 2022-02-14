const obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.',
        },
      },
    },
  };
  
  
  function hash(path) {
    const keys = path.split('.');
    
    return keys.reduce((acc, item) =>
      (acc === undefined ? acc : acc[item]), this);
  };
  
  // obj.hash('car'); // undefined
  // obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
  // obj.hash('person.history.hometown'); // undefined
  // obj.hash('person.animal.pet.needNoseAntEater'); // undefined