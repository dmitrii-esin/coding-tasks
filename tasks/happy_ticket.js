const isHappyTicket = (num) => {
    const str = String(num).slice();
    const leftStr = str.slice(0,3);
    const rightStr = str.slice(3);
  
    
    const sumCharsToNumber = (substr) => {
      let result = 0;
    
      for (let i = 0; i < substr.length; i++) {
        result += Number(substr[i]);
      }
      
      
      return result;
    }
    
    
    return sumCharsToNumber(leftStr) === sumCharsToNumber(rightStr);
  }
  
  
  
  isHappyTicket(231002); // false