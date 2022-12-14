//TODO:!!! answer with errorrs !!!

function minimumAverageDifference(nums: number[]): number {
  const prefixSum: number[] = [];
  let totalSum = 0;
  let minDiff = Infinity;
  let answer = 0;

  // Step 1: Calculate prefix sum
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
    prefixSum[i] = totalSum;
  }

  // Step 2: Iterate through each possible split position
  for (let i = 0; i < nums.length - 1; i++) {
    // Step 3: Calculate sum of elements in left and right subarrays
    const leftSum = prefixSum[i];
    const rightSum = totalSum - leftSum;

    // Step 4: Calculate average difference
    const leftSize = i + 1;
    const rightSize = nums.length - leftSize;
    const leftAvg = leftSum / leftSize;
    const rightAvg = rightSum / rightSize;
    const diff = Math.abs(leftAvg - rightAvg);

    // Step 6: Update minDiff and answer if necessary
    if (diff < minDiff) {
      minDiff = diff;
      answer = i;
    }
  }

  // Step 7: Return index for the minimum average difference
  return answer;

  // if (nums.length === 0) return 0;
  // if (nums.length === 1) return 0;

  // const sums = nums.reduce((acc, curr, idx) => {
  //     if (idx === 0) return acc.concat(curr);
  //     return acc.concat(acc[idx - 1] + curr);
  // }, []);

  // let min = sums[0];
  // let answer = 0;

  // console.log('!!!sums, min', sums, min);

  // for (let i = 1; i < nums.length; i++) {
  //     const left = Math.floor(sums[i] / (i + 1));
  //     const right = Math.floor((sums[nums.length - 1] - sums[i]) / (nums.length - i));

  //     const currentMin = Math.abs(left - right);

  //     console.log('!!i, left, right, currentMin', i, left, right, currentMin);

  //     if (currentMin < min) {
  //         answer = i;
  //     }

  //     min = Math.min(min, currentMin);
  // }

  // return answer;
}

console.log(
  "!!minimumAverageDifference([0,1,0,1,0,1])",
  minimumAverageDifference([0, 1, 0, 1, 0, 1])
); // output: 1 expeced: 0
