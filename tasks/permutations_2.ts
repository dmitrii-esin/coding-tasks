function permuteUnique(nums: number[]): number[][] {   
    // count the occurrence of each number
    const memo = new Set();

    return iter(memo, [], nums, 0, nums.length);
}

function iter(cash, acc: number[][], current: number[], first: number, n: number): number[][] {  
    if (first === n) {
        if (!cash.has(String(current))) {
            acc.push([...current]); 
            cash.add(String(current));
        }
    }
    
    for (let i = first; i < n; i++) {
        swap(current, first, i);
        iter(cash, acc, current, first + 1, n);
        swap(current, first, i);
    }
    
    return acc;
}

function swap(arr: any[], firstIndex: number, secondIndex: number): void {
    const temp = arr[firstIndex];

    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

console.log(
    permuteUnique([1,1,2]), // [[1,1,2],[1,2,1],[2,1,1]]
    permuteUnique([1]), // [ [ 1 ] ]
    permuteUnique([0,3,1,2,3]), // [ 
    //     [ 0, 3, 1, 2, 3 ], [ 0, 3, 1, 3, 2 ], [ 0, 3, 2, 1, 3 ],
    //     [ 0, 3, 2, 3, 1 ], [ 0, 3, 3, 2, 1 ], [ 0, 3, 3, 1, 2 ],
    //     [ 0, 1, 3, 2, 3 ], [ 0, 1, 3, 3, 2 ], [ 0, 1, 2, 3, 3 ],
    //     [ 0, 2, 1, 3, 3 ], [ 0, 2, 3, 1, 3 ], [ 0, 2, 3, 3, 1 ],
    //     [ 3, 0, 1, 2, 3 ], [ 3, 0, 1, 3, 2 ], [ 3, 0, 2, 1, 3 ],
    //     [ 3, 0, 2, 3, 1 ], [ 3, 0, 3, 2, 1 ], [ 3, 0, 3, 1, 2 ],
    //     [ 3, 1, 0, 2, 3 ], [ 3, 1, 0, 3, 2 ], [ 3, 1, 2, 0, 3 ],
    //     [ 3, 1, 2, 3, 0 ], [ 3, 1, 3, 2, 0 ], [ 3, 1, 3, 0, 2 ],
    //     [ 3, 2, 1, 0, 3 ], [ 3, 2, 1, 3, 0 ], [ 3, 2, 0, 1, 3 ],
    //     [ 3, 2, 0, 3, 1 ], [ 3, 2, 3, 0, 1 ], [ 3, 2, 3, 1, 0 ],
    //     [ 3, 3, 1, 2, 0 ], [ 3, 3, 1, 0, 2 ], [ 3, 3, 2, 1, 0 ],
    //     [ 3, 3, 2, 0, 1 ], [ 3, 3, 0, 2, 1 ], [ 3, 3, 0, 1, 2 ],
    //     [ 1, 3, 0, 2, 3 ], [ 1, 3, 0, 3, 2 ], [ 1, 3, 2, 0, 3 ],
    //     [ 1, 3, 2, 3, 0 ], [ 1, 3, 3, 2, 0 ], [ 1, 3, 3, 0, 2 ],
    //     [ 1, 0, 3, 2, 3 ], [ 1, 0, 3, 3, 2 ], [ 1, 0, 2, 3, 3 ],
    //     [ 1, 2, 0, 3, 3 ], [ 1, 2, 3, 0, 3 ], [ 1, 2, 3, 3, 0 ],
    //     [ 2, 3, 1, 0, 3 ], [ 2, 3, 1, 3, 0 ], [ 2, 3, 0, 1, 3 ],
    //     [ 2, 3, 0, 3, 1 ], [ 2, 3, 3, 0, 1 ], [ 2, 3, 3, 1, 0 ],
    //     [ 2, 1, 3, 0, 3 ], [ 2, 1, 3, 3, 0 ], [ 2, 1, 0, 3, 3 ],
    //     [ 2, 0, 1, 3, 3 ], [ 2, 0, 3, 1, 3 ], [ 2, 0, 3, 3, 1 ]
    //   ]
);

