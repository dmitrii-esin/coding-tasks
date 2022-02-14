// BEGIN (write your solution here)
export const smallestDivisor = (n) => {
  
     
    const getNumber = (result, counter) => {
      
      if (result === counter) {
        return result;
      }
  
      if (result > counter) {
          if (result % counter === 0) {
            return counter;
          }
          
     
          return getNumber(result, counter + 1);
      }
      
      
      return result;
    }
    
   
    return getNumber(n, 2);
  }
  // END