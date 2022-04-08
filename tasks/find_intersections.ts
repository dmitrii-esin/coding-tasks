const findIntersections = (...arrs: any[][]): any[] => {
  if (arrs.length === 0) return [];
  if (arrs.length === 1) return [];

  let result = [...new Set(arrs.flat())];

  arrs.forEach((arr) => {
    result = result.filter((el) => arr.includes(el));
  });

  return result;
};

const a = ["foo", "bar", "lol"];
const b = ["aaa", "bar"];
const c = ["ee", "bar", "foo"];
const d = ["aaa", "bbb", "ccc", "lol", "bar"];
const e = ["aaa", "ccc"];
console.log('!!["bar"] findIntersections(a,b,c)', findIntersections(a, b, c));
console.log('["bar", "lol"] !!findIntersections(a,d)', findIntersections(a, d));
console.log("[] !!findIntersections(a,e)", findIntersections(a, e));
