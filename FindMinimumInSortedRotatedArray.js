/*
    153. Find Minimum in Rotated Sorted Array
    Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

    (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).

    Find the minimum element.

    You may assume no duplicate exists in the array.

    Example 1:

    Input: [3, 4, 5, 1, 2]
    Output: 1
    Example 2:

    Input: [4, 5, 6, 7, 0, 1, 2]
    Output: 0

*/

// Brute Force

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let pivot = null;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < nums[i - 1]){
            pivot = nums[i];
        }
    }
    if (pivot === null){
        return nums[0];
    }
    return pivot;
};

// Binary Search

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums[0] < nums[nums.length - 1]) {
        return nums[0];
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.min(nums[0], nums[1]); // base case
    }
    let mid = Math.ceil((nums.length - 1) / 2);
    if (nums[0] > nums[mid]) {
        return findMin(nums.slice(0, mid + 1));
    } else {
        return findMin(nums.slice(mid, nums.length));
    }
};