/* 
    377. Combination Sum IV
    Medium

    1144

    139

    Add to List

    Share
    Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

    Example:

    nums = [1, 2, 3]
    target = 4

    The possible combination ways are:
    (1, 1, 1, 1)
    (1, 1, 2)
    (1, 2, 1)
    (1, 3)
    (2, 1, 1)
    (2, 2)
    (3, 1)

    Note that different sequences are counted as different combinations.

    Therefore the output is 7.
    

    Follow up:
    What if negative numbers are allowed in the given array?
    How does it change the problem?
    What limitation we need to add to the question to allow negative numbers?

    source: https: //leetcode.com/problems/combination-sum-iv/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /*
    Recursive Solution

    Strategy
        - Loop through nums and at each iteration find all recursive solutions for combinationSum(nums, target - nums[i])
        - Our base cases will be either:
           1. Math.min(...nums) === target (Match and you can't drill down any further) 
           2. Math.min(...nums) > target OR nums.length === 0 (No match and you can't drill down any further)
        - Since we're looking for the count of combinations, we return either 1 or 0 representing the found target

        - We add the recursive solution "recursed" to "combos" and continue our loop
        - We return the number of "combos" found at this recursive call
        - Eventually all the combos will bubble up to aggregate the total number of combos
        
        Time Complexity - O(nm) where n is "nums" and m is target / Min(...nums)
        Space Complexity - O(mn) 

 */

var combinationSum4 = function (nums, target, memo = {}) {
    if (memo[target] !== undefined) {
        return memo[target];
    }
    const minNum = Math.min(...nums);
    if (!nums.length || target < minNum) {
        return 0;
    }

    if (minNum === target) {
        return 1;
    }

    let combos = 0;
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        if (currentNum === target) {
            combos++;
            continue;
        }
        if (currentNum > target) {
            continue;
        }

        if (currentNum - target === 0) {
            combo++;
        }
        let recursed = combinationSum4(nums, target - currentNum, memo);
        memo[target - currentNum] = recursed;
        combos += recursed;
    }
    return combos;
};