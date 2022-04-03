const A = true;
const B = false;

const originalCondition = ((!A && !B) || (B && !B)) || ((!A && A) || (B && A));

const simplifiedCondition = B && A;

console.log('!!originalCondition === simplifiedCondition', originalCondition === simplifiedCondition); // true

