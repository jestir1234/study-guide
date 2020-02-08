// 152. Maximum Product Subarray
/* 
Given an integer array nums, find the contiguous subarray within an array(containing at least one number) which has the largest product.

    Example 1:

    Input: [2, 3, -2, 4]
    Output: 6
    Explanation: [2, 3] has the largest product 6.

    Resources
    https: //www.programcreek.com/2014/03/leetcode-maximum-product-subarray-java/
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let largestProd = nums[0];
    let productsMax = [nums[0]];
    let productsMin = [nums[0]];
    /* 
        Similar to max sum subarray, we need to account for the positive and negative signs. So we keep two arrays to keep track of the minimum and maximum products. If nums[i] is negative than we find the max product by multiplying with productsMin[i - 1] which could be negative.
    */
    for (let i = 1; i < nums.length; i++){
        if (nums[i] > 0){
            productsMax[i] = Math.max(nums[i], nums[i] * productsMax[i - 1]);  
            productsMin[i] = Math.min(nums[i], nums[i] * productsMin[i - 1]);
        } else {
            productsMax[i] = Math.max(nums[i], nums[i] * productsMin[i - 1]);
            productsMin[i] = Math.min(nums[i], nums[i] * productsMax[i - 1]);
        }
        largestProd = Math.max(largestProd, productsMax[i], productsMin[i]);
    }
    console.log('productsMax', productsMax);
    console.log('productsMin', productsMin);
    
    return largestProd;
};