const getLastWordLength = sentence => {
    const words = [];
    let word = '';
    let state = null;
  
    const STATES = {
      IN_WORD: 'in word',
      OUT_OF_WORD: 'out of word',
    }
  
    if (sentence.length === 0) return 0;
  
    for (let i = 0; i < sentence.length; i++) {
      const symbol = sentence[i]
  
      if (symbol !== ' ') state = STATES.IN_WORD;
      if (symbol === ' ') state = STATES.OUT_OF_WORD;
  
      if (state === STATES.IN_WORD) {
        word = `${word}${symbol}`;
      }
  
      if ((word !== '' && word !== ' ') && (state === STATES.OUT_OF_WORD || i === sentence.length - 1)) {
        words.push(word);
        word = '';
      }
    }
  
    return words[words.length - 1].length;
  }
  
  console.log(
    // Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину последнего слова переданной на вход строки. Словом считается любая последовательность, не содержащая пробелов.
  
  // getLastWordLength('') // 0
  
  // getLastWordLength('man in BlacK') // 5
  
  // getLastWordLength('hello, world!  ') // 6
  
  // getLastWordLength(' , lorem,!') // 7
  
  // getLastWordLength(' , lorem,! 1') // 1
  )