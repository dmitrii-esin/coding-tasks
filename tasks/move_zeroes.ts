function moveZeroes(nums: number[]): void {
    let writePointer = 0;
    let zeroes = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zeroes++;
    }
    
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {        
        if (nums[readPointer] !== 0) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
        
        if (readPointer === (nums.length - 1 - zeroes)) {
            nums[readPointer] = 0; 
            zeroes--;
        }
    }

    console.log('!!nums', nums);
};

console.log(
moveZeroes([1]), // [1]
moveZeroes([0,1,0,3,12]), // [1,3,12,0,0]
);