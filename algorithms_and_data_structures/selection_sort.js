// # I

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    
    return minIndex;
}; 

var selectionSort = function(array) {
    for (var i = 0; i < array.length; i++) {
        var currentMinIdx = indexOfMinimum(array, i);
        swap(array, i, currentMinIdx);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [0];
selectionSort(array);
Program.assertEqual(array, [0]);

var array = [100, -100, 0, 1, 9999];
selectionSort(array);
Program.assertEqual(array, [-100, 0, 1, 100, 9999]);

// # I

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var swap = function(array, firstIndex, secondIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    };

    var findMinIndex = function(array, startIndex) {
        var minValue = array[startIndex];
        var minIndex = startIndex;

        for(var i = minIndex + 1; i < array.length; i++) {
            if(array[i] < minValue) {
                minIndex = i;
                minValue = array[i];
            }
        }

        return minIndex;
    }; 
    
    
    for (var i = 0; i < nums.length; i++) {
        var currentMinIdx = findMinIndex(nums, i);
        swap(nums, i, currentMinIdx);
    }
};

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]