/*
    217. Contains Duplicate

    Given an array of integers, find if the array contains any duplicates.

    Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

    Example 1:

    Input: [1,2,3,1]
    Output: true

    Example 2:

    Input: [1,2,3,4]
    Output: false

    Example 3:

    Input: [1,1,1,3,3,4,3,2,4,2]
    Output: true

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const hashedNums = {};
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        if (hashedNums[nums[i]]) {
            result = true;
        }
        hashedNums[nums[i]] = true;
    }
    return result;
};

/* 

    Approach #2 (Sorting) [Accepted]
    Intuition

    If there are any duplicate integers, they will be consecutive after sorting.

    Algorithm

    This approach employs sorting algorithm. Since comparison sorting algorithm like heapsort is known to 
    provide O(n \log n)O(nlogn) worst-case performance, sorting is often a good preprocessing step. 
    After sorting, we can sweep the sorted array to find if there are any two consecutive duplicate elements.

*/

var containsDuplicate = function (nums) {
    nums.sort();
    let result = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            result = true;
            break;
        }
    }
    return result;
};
