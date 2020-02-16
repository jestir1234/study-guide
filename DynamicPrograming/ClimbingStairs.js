/* 

    70. Climbing Stairs

    You are climbing a stair
    case.It takes n steps to reach to the top.

    Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?

    Note : Given n will be a positive integer.

    Example 1:
    Input: 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps
    
    
    Example 2:
    Input: 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

*/

/**
 * @param {number} n
 * @return {number}
 */

// Testing out inputs for n we can see the results resemble the fibonnaci pattern. So we can just implement that solution
// in O(n) time and space complexity

var climbStairs = function(n) {
    let results = [];
    for (let i = 0; i < n + 1; i++){
        if (i === 0){
            results.push(0);
            continue;
        }
        
        if (i === 1){
            results.push(i)
            continue;
        }
        
        results.push(results[i - 1] + results[i - 2]);
    }
    return results[results.length - 1] + results[results.length - 2];
};

/*

    This solution is optimized with recursion and memory caching
    The base case is 3 because n <= 3 always returns n;
    With each recursive step, we check for the cache for n-1 and n-2.
    Use the cache if it exists otherwise make a recursive call for n-1 or n-2 or both.
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memCache = {}) {
    
    if (n <= 3) {
        return n;
    }
    
    let first = memCache[n - 1];
    let second = memCache[n - 2];
    if (!first){
        first = climbStairs(n - 1, memCache);
        memCache[n - 1] = first;
    }
    
    if (!second){
        second = climbStairs(n - 2, memCache);
        memCache[n - 2] = second;
    }
    
    return first + second;
};
