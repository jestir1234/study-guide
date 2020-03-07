// 300. Longest Increasing Subsequence
// Medium

// 3749

// 85

// Add to List

// Share
// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10, 9, 2, 5, 3, 7, 101, 18]
// Output: 4

// Explanation: The longest increasing subsequence is[2, 3, 7, 101], therefore the length is 4.
// Note:

// There may be more than one LIS combination, it is only necessary
// for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity ?

// source: https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let dp = Array.from(new Array(nums.length)).fill(1);
    let i = 0;
    let j = 1;

    while (j < nums.length) {
        while (i < j) {
            if (nums[j] > nums[i]) {
                dp[j] = dp[j] > (dp[i] + 1) ? dp[j] : (dp[i] + 1);
            }
            i++;
        }
        i = 0;
        j++;
    }
    return Math.max(...dp);
};
