/*
198. House Robber
Easy

3872

120

Add to List

Share
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
            Total amount you can rob = 2 + 9 + 1 = 12.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
    Solution Dp Array - Buttom Up approach

    The idea is to start with 0 or 1 house and find the max robbed value.
    The second house we just take the max between the two houses.

    Afterwards, we fill the dp array by setting each index to the max value between the nums[i] + dp[i - 2] and dp[i - 1].
    Meaning we look at the current house value and decide if adding it to the max value calculated for 2 houses previous is 
    greater than the max value 1 house previous.


 */

var rob = function (nums) {
    if (!nums.length) {
        return 0;
    }
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[nums.length - 1];
};