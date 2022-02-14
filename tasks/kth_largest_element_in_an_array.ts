function findKthLargest(nums: number[], k: number): number {
    let step = 1;
    let result = -Infinity;
    
    while (step <= k) {
        const currentMaxId = findMaxId(nums);
        result = nums[currentMaxId];
        nums[currentMaxId] = -Infinity;
        
        step++;
    }
    
    return result;
};

function findMaxId(collection: number[]): number {
    let maxId = 0;
    
    collection.forEach((item, index) => {
        if (item > collection[maxId]) maxId = index;
    })
    
    return maxId;
}

console.log('!!SHOULD BE 5 findKthLargest([3,2,1,5,6,4], 2)', findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log('!!SHOLD BE 4 findKthLargest([3,2,3,1,2,4,5,5,6], 4)', findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4