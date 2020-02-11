/* 1. Two Sum
    Given an array of integers,
    return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:

        Given nums = [2, 7, 11, 15], target = 9,

        Because nums[0] + nums[1] = 2 + 7 = 9,
        return [0, 1].
    
    Original: https: //leetcode.com/problems/two-sum/

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numHash = {};
    let result;
    for (let i = 0; i < nums.length; i++){
        if (numHash[nums[i]]){
            return [numHash[nums[i]].idx, i];
        }
        numHash[target - nums[i]] = { val: nums[i], idx: i };
        
    }
    return result;
};