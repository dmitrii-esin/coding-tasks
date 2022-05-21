// I. Naive
// function removeInterval1(intervals: number[][], toBeRemoved: number[]): number[][] {
//     const [startRemovable, endRemovable] = toBeRemoved;

//     const [firstInterval, ...restIntervals] = intervals;
//     const lastInterval = intervals[intervals.length - 1];

//     const [startFirst, endFirst] = firstInterval;
//     const [startLast, endLast] = lastInterval;

//    if (startFirst === startRemovable && endLast === endRemovable) return [];

//     const intervalsStartedBefore = intervals.filter(([start, end]) => start < startRemovable);
//     const intervalsStartedAfter = intervals.filter(([start, end]) => end >= endRemovable);

//     const processedStart = intervalsStartedBefore.map(([start, end]) => {
//         if (end >= startRemovable) return [start, startRemovable];
//         return [start, end];
//     })

//    const processedEnd = intervalsStartedAfter.map(([start, end]) => {
//         if (start <= endRemovable) return [endRemovable, end];
//         return [start, end];
//     })

//      console.log('!!processedStart, processedEnd', processedStart, processedEnd);

//      return [...processedStart, ...processedEnd];
//  };
//  <!-- Accepted
//  Runtime: 130 ms
//  Your input
//  [[0,2],[3,4],[5,7]]
//  [1,6]
//  Output
//  [[0,1],[6,7]]
//  Expected
//  [[0,1],[6,7]] -->

// II. One pass
//  function removeInterval2(intervals: number[][], toBeRemoved: number[]): number[][] {
//      const result = [];

//      const [removeStart, removeEnd] = toBeRemoved;

//      for (let i = 0; i < intervals.length; i++) {
//          const [currentStart, currrentEnd] = intervals[i];

//          if (currentStart < removeStart && currrentEnd <= removeStart) result.push([currentStart, currrentEnd]);
//          if (currentStart < removeStart && currrentEnd > removeStart) result.push([currentStart, removeStart]);
//          if (currentStart < removeEnd && currrentEnd > removeEnd) result.push([removeEnd, currrentEnd]);
//          if (currentStart >= removeEnd && currrentEnd > removeEnd) result.push([currentStart, currrentEnd]);
//      }

//      return result;
//  };
//  <!-- Accepted
//  Runtime: 130 ms
//  Your input
//  [[0,2],[3,4],[5,7]]
//  [1,6]
//  Output
//  [[0,1],[6,7]]
//  Expected
//  [[0,1],[6,7]] -->
