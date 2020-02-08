/* 
    238. Product of Array Except Self

    Given an array nums of n integers where n > 1,
    return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

    Example:

    Input: [1, 2, 3, 4]
    Output: [24, 12, 8, 6]
    Note: Please solve it without division and in O(n).

    Follow up:
    Could you solve it with constant space complexity ? (The output array does not count as extra space
    for the purpose of space complexity analysis.)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const left = [];
    const right = [];
    const result = [];
    let lProd = 1;
    let rProd = 1;
    /* 
        Idea is to create two arrays, one accumulating the products from left to right 
        and the other accumulating products from right to left. 
        That way you can just multiply the left[i - 1] * right[i + 1] (skipping the excluded nums[i]) 
        to get the total product for all the numbers.
    */
    for (let i = 0; i < nums.length; i++) {
        lProd *= nums[i];
        left[i] = lProd;
    }
    console.log('left', left);
    for (let i = nums.length - 1; i >= 0; i--) {
        rProd *= nums[i];
        right[i] = rProd;
    }
    console.log('right', right);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            result[i] = right[i + 1];
        } else if (i === nums.length - 1) {
            result[i] = left[i - 1];
        } else {
            result[i] = left[i - 1] * right[i + 1];
        }
    }
    return result;
};

// @TODO ----------------------------------------------------------------------------------------------
/*
    Follow up:
    Could you solve it with constant space complexity ? (The output array does not count as extra space
    for the purpose of space complexity analysis.)

*/