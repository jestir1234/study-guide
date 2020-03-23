/*
55. Jump Game
Medium

3148

283

Add to List

Share
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 /*
    Solution

    The idea is to look at the most basic case where the result is true at nums length 1.

    Work backwards to find the index position that can reach the end and then set that as the lastGoodIndexPos. 

    If we're able to work our way backwards to index 0 and have that be the lastGoodIndexPos then we know the answer is true.
 */


var canJump = function (nums) {
    let lastGoodIndexPos = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i === nums.length - 1 || nums[i] + i >= lastGoodIndexPos) {
            lastGoodIndexPos = i;
        }
    }
    return lastGoodIndexPos === 0;
};