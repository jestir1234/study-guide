/* 
    15. 3 Sum

    Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

    Note:

        The solution set must not contain duplicate triplets.

    Example:

        Given array nums = [-1, 0, 1, 2, -1, -4],

        A solution set is: [
            [-1, 0, 1],
            [-1, -1, 2]
        ]

        original: https: //leetcode.com/problems/3sum/
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* The idea is to iterate through a sorted array and with each element perform a 2sum search with 0 being the 
    target. 
*/
var threeSum = function (nums) {
    
    // First we must sort the array in ascending order. This way we can skip duplicates nums[i] and nums[i + 1]
    // and increment and decrement left and right by comparing the target sum with the actual sum
    nums.sort((a, b) => a - b);

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let sum = 0 - nums[i]; // the target sum will be 0 minus the current value
        let left = i + 1; // set our left pointer
        let right = nums.length - 1; // set our right pointer;

        while (left < right) {
            if (nums[left] + nums[right] === sum) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) { // if the next left element is the same we increment left
                    left++;
                }
                while (nums[right] === nums[right - 1]) { // if the next right element is the same we decrement right
                    right--;
                }
                left++; // we need to increment and decrement to move along in the array
                right--;
                continue;
            } else if (nums[right] + nums[left] < sum) { // if the actual sum is less than the target then we increment left to make the sum bigger
                left++;
            } else { // if the actual sum is greater than the target then we decrement right to make the sum smaller
                right--;
            }
        }

        // In our iteration we want to skip duplicates since we have already performed 2 sum on it.
        while (nums[i] === nums[i + 1]) {
            i++;
        }
    }

    return result;
};
