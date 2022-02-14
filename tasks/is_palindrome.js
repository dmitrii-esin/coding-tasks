const example = "радар";


const isPalindrome = (str) => {
  let acc = '';
  let counter = str.length;

  const isCharEquals = (acc, counter) => {
    
   if (!counter) {
     return acc === str ? true : false;
   }
   
   return isCharEquals(acc += str[counter - 1], counter - 1)
  }
  
  return isCharEquals(acc, counter);
}


isPalindrome(example);