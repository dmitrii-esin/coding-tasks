const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    if (num <= 0) {
      return;
    }
    
  
    const iter = (current, acc) => {
      if (current % acc === 0) {
        return acc;
      } else {
      
      return iter(current, acc + 1);
      }
    }
    
    return iter(num, num === 1 ? 1 : 2);
    // END
  };
  
  export default smallestDivisor;