# Coding tasks

> This repo includes my efforts, notes and examples of cracking codings tasks, algorithms and data structures based on **[Leetcode](https://leetcode.com/sunndeath/)** and **[Cracking the coding interview](https://www.crackingthecodinginterview.com/)** book

## My notes

### stable / unstable (sorting by two or more different criteria)

### efficiency or complexity (what to track to check algorithm effectiveness): time and space

### How to solve algorithmic problems/exercises
- understand details, constraints and corner cases
- use whitebox/note for brainstorm
- find pattern
- try naive/brute-force -> optimizing
- try to look into problem intuitively (with real life objects context)
- find errors in corner cases (length - 2, i = 1, etc.)
- optimize: remove unnecessary work, caching repeatable steps, pre-compute initial data. modularize, think about time vs. space tradeoffs
- try use resolving small problem and apply to big problem
- choose appropriate technics or algorithm (iteration, recursion, two-pointer, fast & slow pointers, sliding window, sorting, swapping, divide and conquer, etc.)
- choose appropriate additional data-structures if needed (hash map, array, linked list, queue, stack, tree, additional constant or variable etc.)

### list of technics
- sliding window 
- two-pointer

```
function fn(arr):
    left = 0
    right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--
```
            
```
function fn(arr1, arr2):
    i = j = 0
    while i < arr1.length AND j < arr2.length:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. i++
            2. j++
            3. Both i++ and j++

    // Step 4: make sure both iterables are exhausted
    while i < arr1.length:
        Do some logic here depending on the problem
        i++

    while j < arr2.length:
        Do some logic here depending on the problem
        j++
 ```
- backtracking
- dp

*main advive - usin technics like sliding-widow - choose appropriate strategy for the window or changing pointers
