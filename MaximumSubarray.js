/* 
    53. Maximum Subarray

    Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and
    return its sum.

    Example:

    Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    Output: 6
    Explanation: [4, -1, 2, 1] has the largest sum = 6.
    Follow up:

    If you have figured out the O(n) solution,
    try coding another solution using the divide and conquer approach, which is more subtle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let largestSum = nums[0];
    let sums = [nums[0]];
    // The idea is to store the highest sum at each idx by comparing the previous
    // idx's highest sum + nums[idx] and setting the higher value as that idx's             highest sum
    for (let i = 1; i < nums.length; i++) {
        sums[i] = Math.max(nums[i], sums[i - 1] + nums[i]);
        largestSum = largestSum > sums[i] ? largestSum : sums[i];
    }
    return largestSum;
};