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

        Follow up:
        If negative numbers were allowed in the array it would lead to infinite combinations.
        For example [3, 2, 4, 1, -1]. Here -1 could be used infinitely to reduce to value and 1 could be used to increase it.
        We would need to add the limitation that each number can only be used once in a combination.

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


/*
    DP Solution

    Strategy - Bottom up approach
        - Build a dp array starting from 0 to the target. 
        - At each index or sub target "i" we calculate the # of combos by 
          looping through nums and for each num "j" find and aggregate previously 
          stored solutions at dp[i - nums[j]].

          The idea is looking at the relationship between the current sub-target i
          and nums[j]. i - nums[j] = some number "k". We look up "k" in the dp table to find
          the # of combos that add up to "k". Since "k" + nums[j] = i, we add it to the aggregate of combos.
          
          For example let's say i = 5 and nums = [1, 3]:
          5 - 1 = 4
          We know we have a 1 to use to add up to 5 so we look for dp[4].
          dp[4] should have all the combinations using nums [1, 3] that add up to 4.
          So we can add that to our aggregate since we can use those combos and just add 1.

          Moving on we have
          5 - 3 = 2
          We know we have a 3 to use to add up to 5 so we look for dp[2].
          All combos that add up to 2 can be used since we'll add 3 to them to get 5.
        
        - We start with dp[0] = 1 because we know at any index i if nums contains i we can count it by itself as a combo

        Time complexity is O(mn) where m is the target and n is nums
        Space complexity is O(m) where m is the target
*/

var combinationSum4 = function (nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i < target + 1; i++) {
        dp[i] = nums.reduce((acc, val) => {
            if (i - val >= 0) {
                acc = acc + dp[i - val];
            }
            return acc;
        }, 0);
    }

    return dp[target];
};