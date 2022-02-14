// Реализуйте и экспортируйте по умолчанию функцию, 
// которая делает заглавной первую букву каждого слова в предложении.

// BEGIN
export default (str) => {
    let result = '';
    for (let i = 0; i < strings.length(str); i += 1) {
      const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
      result += shouldBeBig ? strings.toUpperCase(str[i]) : str[i];
    }
  
    return result;
  };
  // END