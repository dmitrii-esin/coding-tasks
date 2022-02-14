// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Approach 1: Backtracking

function permute(nums: number[]): number[][] { 
    // init output list
    const acc: number[][] = [];
    iter(acc, nums, 0, nums.length);
    return acc;
}

function iter(acc: number[][], current: number[], first: number, n: number): void {    
    // if all integers are used up
    if (first === n) acc.push([...current]);
    
    for (let i = first; i < n; i++) {
        // place i-th integer first 
         // in the current permutation
        swap(current, first, i);
        // use next integers to complete the permutations
        iter(acc, current, first + 1, n);
        // backtrack
        swap(current, first, i);
    }
}

function swap(arr: any[], firstIndex: number, secondIndex: number): void {
    const temp = arr[firstIndex];

    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

console.log(
    permute([1,2,3]), // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]
);