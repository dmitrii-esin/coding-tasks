const checkDublicationExistence = (...args: any[]): boolean => {
  const valsHash: Record<string, any> = {};

  for (let i = 0; i < args.length; i++) {
    const val = args[i];
    const hasValue = !!valsHash[val];

    if (hasValue) {
      return false;
    } else {
      valsHash[val] = true;
    }
  }

  return true;
};

console.log(
  "!!true checkDublicationExistence(1,2,3,4)",
  checkDublicationExistence(1, 2, 3, 4)
);

console.log(
  "!!false checkDublicationExistence(1,2,4,3,4)",
  checkDublicationExistence(1, 2, 4, 3, 4)
);

console.log(
  "!!false checkDublicationExistence(1,1,4,1,4)",
  checkDublicationExistence(1, 1, 4, 1, 4)
);

console.log(
  '!!true checkDublicationExistence("1", "2", "3", "4")',
  checkDublicationExistence("1", "2", "3", "4")
);
