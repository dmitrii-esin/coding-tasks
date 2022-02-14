// v.0

var nod = (a, b) => {
    var iter = (currentA, currentB) => {
        if (currentA === 0 || currentB === 0) return null;
        if (currentA === 1 || currentB === 1) return 1;
  
        var guess = currentA <= currentB ? currentA : currentB;
  
        if (currentA % guess === 0 && currentB % guess === 0) return guess;
        if (currentA <= currentB) return iter(currentA - 1, currentB);
        if (currentA > currentB) return iter(currentA, currentB - 1);
    }
  
    return iter(a, b); 
  }
  
  nod(800, 400); // 400


  /// == === ==

  // v.1
export default (a, b) => {
    if (a === 0 && b === 0) {
      return;
    }
  
    let counter = 1;
    let result = 1;
    let biggestNum;
  
    if (a > b) {
      biggestNum = a;
    } else {
        biggestNum = b;
    }
   
    while (counter < biggestNum) {
      counter = counter + 1;
   
      if (a % counter === 0 && b % counter === 0) {
        result = counter;
      }
    }
    return result;
  }
  
  
  // v.2
  // Напишите функцию smallestDivisor. 
  // Она должна находить наименьший целый делитель числа. 
  // Поведение у функции должно быть таким же, как в предыдущем уроке, но реализация — код функции — должно быть другим. 
  // На этот раз реализуйте императивный итеративный процесс.
  const smallestDivisor = num => {
    if (num < 1) {
      return NaN;
    }
    if (num === 1) {
      return num;
    }
    
    let divisor = 2;
  
    while (num % divisor !== 0) {
      divisor = divisor + 1;
    }
  
    return divisor;
  };