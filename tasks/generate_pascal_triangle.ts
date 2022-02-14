function generate(numRows: number): number[][] {
    const triangle = [];
    
    const builNextRow = (prevRow: number[]) => {
        if (prevRow.length === 1) return [1, 1];
        
        const nextRowBody = [];
                
        prevRow.forEach((item: number, idx: number): void => {
            if (idx > 0) nextRowBody.push(prevRow[idx - 1] + item);
        })
                                
        return [1,...nextRowBody,1];             
    }
    
    for (let i = 0; i < numRows; i++) {
        if (i === 0) triangle.push([1]);
        if (i > 0) triangle.push(builNextRow(triangle[triangle.length - 1]));
    }
    
    return triangle;
};
     
// <!-- Accepted
// Your input 5
// Output   [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Expected [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] -->