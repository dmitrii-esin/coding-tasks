// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

// Merge Intervals
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 1) return intervals;

  const mergeIntervals = (
    intervalA: number[],
    intervalB: number[]
  ): number[] => [
    Math.min(...intervalA, ...intervalB),
    Math.max(...intervalA, ...intervalB),
  ];

  const sortIntervals = (intervals: number[][]) => {
    const sorted = [...intervals].sort((intA, intB) => {
      if (intA[0] < intB[0]) return -1;
      if (intA[0] > intB[0]) return 1;
      return 0;
    });

    return sorted;
  };

  const sortedIntervals = sortIntervals(intervals);

  const ans = [];

  for (let i = 0; i < sortedIntervals.length; i++) {
    if (i === 0) {
      ans.push(sortedIntervals[i]);
      // has intersection
    } else if (ans[ans.length - 1][1] >= sortedIntervals[i][0]) {
      ans[ans.length - 1] = mergeIntervals(
        ans[ans.length - 1],
        sortedIntervals[i]
      );
    } else {
      ans.push(sortedIntervals[i]);
    }
  }

  return ans;
}

// older solution

function merge(intervals: number[][]): number[][] {
  const [startPoint] = intervals[0];
  const [, endPoint] = intervals[intervals.length - 1];
  const distance = endPoint - startPoint;

  // if (intervals.length === 1) return distance;

  intervals.sort(([fs], [ss]) => fs - ss);

  let processedIntervals = [];

  intervals.forEach((interval, index) => {
    if (index === 0) processedIntervals.push(interval);

    if (index > 0) {
      const [prevStart, prevEnd] =
        processedIntervals[processedIntervals.length - 1];
      const [currStart, currEnd] = interval;
      const hasIntersection = prevEnd >= currStart;

      if (!hasIntersection) processedIntervals.push(interval);

      if (hasIntersection) {
        const [start, end] = processedIntervals.pop();
        const newStart = start < currStart ? start : currStart;
        const newEnd = end > currEnd ? end : currEnd;

        processedIntervals.push([newStart, newEnd]);
      }
    }
  });

  return processedIntervals;
}
