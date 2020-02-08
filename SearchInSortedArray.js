/* 
    33. Search in Rotated Sorted Array
    Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

    (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).

    You are given a target value to search.If found in the array
    return its index, otherwise
    return -1.

    You may assume no duplicate exists in the array.

    Your algorithm 's runtime complexity must be in the order of O(log n).

    Example 1:

    Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
    Output: 4
    Example 2:

    Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
    Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // base for empty array or null inputs
    if (nums === null || nums.length === 0) return -1;
    
    /* 
        First we find the pivot point idx by using binary search. 
        
        1. initiate 2 pointers for indexes at the beginning and end of the array.
           to identify the midpoint, we want to converge the indexes onto the minimum value (aka the pivot) in the array
        2. find the midpoint between them.
        3. if the midpoint value is less than the right index (it's properly sorted), 
           so we need to search for the pivot on the left side. 
                - keep left index 
                - assign right index to midpoint
            
            if the midpoint value is greater than the right index (it's not sorted), 
            so we need to search for the pivot on the right side.
                - keep right index
                - assign left index to midpoint + 1 
        4. Once the left and right indexes converge, it'll exit the loop and we will have found our pivot index
    
    */
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let midpoint = Math.floor(left + (right - left) / 2);
        if (nums[midpoint] > nums[right]) {
            left = midpoint + 1;
        } else {
            right = midpoint;
        }
    }
    
    const pivot = left || right;

    /*
        Now that we have the pivot point, it should be simple to find the target because we know
        that the nums[pivot] => nums[nums.length - 1] is sorted and nums[0] => nums[pivot - 1] is sorted.
        We can use the same binary search strategy to find the index of the target. Once the loop exits, if the converged 
        points don't equal the target, then we know the target doesn't exist in the array.
    */
    
    if (pivot === 0) {
        left = 0;
        right = nums.length - 1;
    } else if (target >= nums[0] && target <= nums[pivot - 1])  {
        left = 0;
        right = pivot;
    } else {
        left = pivot;
        right = nums.length - 1;
    }
    
    while (left < right) {
        midpoint = Math.floor(left + (right - left) / 2);
        if (target > nums[midpoint]) {
            left = midpoint + 1;
        } else {
            right = midpoint;
        }
    }
    
    return nums[left] === target ? left : -1;
    
};
