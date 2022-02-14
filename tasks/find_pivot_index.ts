function pivotIndex(nums: number[]): number {
    let left = 0;
    let right = nums.slice(1, nums.length).reduce((acc, curr) => acc + curr, 0);
    
    for (let i = 0; i < nums.length; i++) {
        if (left === right) return i;
        
        right = right - nums[i + 1];
        left = left + nums[i];
    }
    
    return -1;
};

console.log('!!pivotIndex([1,2,3,4,5,6,7])', pivotIndex([1,2,3,4,5,6,7])); // -1
console.log('!!pivotIndex([1,7,3,6,5,6])', pivotIndex([1,7,3,6,5,6])); // 3
console.log('!!pivotIndex([1,2,3])', pivotIndex([1,2,3])); // -1