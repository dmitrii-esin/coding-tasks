const text = '  what who   \nhellomy\n hello who are you\n';


const solution = (str) => {
  let result = [];
  let word = '';
  let state = 'outside';
  
  for (let i = 0; i < str.length; i++) {
    
    switch (state) {
      case 'outside':
        if ((str[i] !== '\n') && (str[i] !== ' ')) {
          word += str[i];
          state = 'inside';
        }
      break;
        
      case 'inside':
         if ((str[i] !== '\n') && (str[i] !== ' ')) {
          word += str[i];
         } else {
          result.push(word);
          word = '';
          state = str[i] === ' ' ? 'after' : 'outside';
         }
      break;
      
      case 'after':
        if (str[i] === '\n') {
          state = 'outside';
        }
      break;
    }
  }

  return result;
};


solution(text);
// => [ 'what', 'hellomy, 'hello' ]