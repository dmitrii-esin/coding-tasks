const sumIntervals = (intervals) => {
    const [startPoint, ] = intervals[0];
    const [, endPoint] = intervals[intervals.length - 1];
    const distance = endPoint - startPoint;
  
    if (intervals.length === 1) return distance;
  
    intervals.sort(([fs, ], [ss, ]) => fs - ss);
  
    let processedIntervals = [];
  
    intervals.forEach((interval, index) => {
      if (index === 0) processedIntervals.push(interval);
      
      if (index > 0) {
        const [prevStart, prevEnd] = processedIntervals[processedIntervals.length - 1];
        const [currStart, currEnd] = interval;
        const hasIntersection = prevEnd > currStart;
  
        if (!hasIntersection) processedIntervals.push(interval);
  
        if (hasIntersection) {
          const [start, end] = processedIntervals.pop();
          const newStart = start < currStart ? start : currStart;
          const newEnd = end > currEnd ? end : currEnd;
  
          processedIntervals.push([newStart, newEnd]);
        }
      }
    })
  
    let sum = 0;
  
    processedIntervals.forEach((interval) => {
      const [start, end] = interval;
      sum = sum + (end - start);
    })
  
    return sum;
    }
  
  console.log(
  // sumIntervals([
  //    [5, 5]
  // ]) // 0
  // sumIntervals([
  //    [-100, 0]
  // ]) // 100
  
  // sumIntervals([
  //    [1, 2],
  //    [11, 12]
  // ]) // 2
  
  // sumIntervals([
  //    [2, 7],
  //    [6, 6]
  // ]) // 5
  
  // sumIntervals([
  //    [1, 9],
  //    [7, 12],
  //    [3, 4]
  // ]) // 11
  
  // sumIntervals([
  //    [1, 5],
  //    [-30, 19],
  //    [1, 7],
  //    [16, 19],
  //    [5, 100]
  // ]) // 130
  )