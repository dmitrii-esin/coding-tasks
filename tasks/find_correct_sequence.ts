// find correct sequence
const findCorrectSequence = (nums: number[]): string => {
  if (nums.length < 2) return "";

  let pointA = 0;
  let pointB = 0;

  const sequences: number[][] = [];

  for (let i = 1; i < nums.length; i++) {
    const prevValue = nums[i - 1];
    const currentValue = nums[i];

    if (currentValue - 1 === prevValue) {
      pointB = i;
      sequences.push([nums[pointA], nums[pointB]]);
    } else {
      pointA = i;
      pointB = i;
    }
  }

  const [start, end] = getMaxSegment(sequences);

  return pointA !== pointB ? `${start}->${end}` : "";
};

function getMaxSegment(segments: number[][]): number[] {
  let maxSegment: number[] = [];

  segments.forEach((currentSegment) => {
    if (maxSegment.length === 0) {
      maxSegment = currentSegment;
    } else {
      const [maxStart, maxEnd] = maxSegment;
      const [start, end] = currentSegment;

      const newMaxSegment =
        maxEnd - maxStart > end - start ? maxSegment : currentSegment;

      maxSegment = newMaxSegment;
    }
  });

  return maxSegment;
}

console.log("!!findCorrectSequence([1,2,3])", findCorrectSequence([1, 2, 3])); // "1->3"
console.log(
  "!!findCorrectSequence([1,2,7,11,12,13])",
  findCorrectSequence([1, 2, 7, 11, 12, 13])
); // "11->13"
console.log("!!findCorrectSequence([])", findCorrectSequence([])); // ""
console.log("!!findCorrectSequence([1,7,0])", findCorrectSequence([1, 7, 0])); // ""
