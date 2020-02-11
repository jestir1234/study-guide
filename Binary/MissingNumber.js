/*
    268. Missing Number
    Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

    Example 1:
    Input: [3, 0, 1]
    Output: 2

    Example 2:
    Input: [9, 6, 4, 2, 3, 5, 7, 0, 1]
    Output: 8

    Note:
    Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity ?

*/

// [0, 3, 2, 5, 1]
// [0, 1, 2, 3, 4]
// [0, 2, 2, 6, 5]

/*
    Idea behind this problem is to use the relationship between the indexes and nums. 
    Because they should almost be 1 for 1 and A^A = 0, we should get 0 if all nums between 0...n are included.
    However, because there is a missing number, we can XoR all values and indexes and arrive at the missing number because 
    that number hasn't been cancelled out in the XORs.

    Similarly, you can sum the indexes and find the difference between the actual sum of values and the sum of indexes.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// Using bitwise operation
var missingNumber = function (nums) {
    let val = 0;
    for (let i = 0; i < nums.length; i++) {
        val = val ^ (i ^ nums[i]);
    }

    return val ^ nums.length;
};

// Using integer addition
var missingNumber = function (nums) {
    let indexSum = 0;
    let actualSum = 0;

    for (let i = 0; i < nums.length; i++) {
        indexSum += i;
        actualSum += nums[i];
    }

    indexSum += nums.length;
    return indexSum - actualSum;
};