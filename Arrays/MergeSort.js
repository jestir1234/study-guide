/*    
    912. Sort an Array
    Medium

    312

    215

    Add to List

    Share
    Given an array of integers nums, sort the array in ascending order.

    

    Example 1:

    Input: nums = [5,2,3,1]
    Output: [1,2,3,5]
    Example 2:

    Input: nums = [5,1,1,2,0,0]
    Output: [0,0,1,1,2,5]
    

    Constraints:

    1 <= nums.length <= 50000
    -50000 <= nums[i] <= 50000

    */

/*
    Solution - Mergesort

    Time Complexity - O(n * logn)
    Space Complexity - O(n)
*/

const mergeSort = array => {
    if (array.length <= 1) {
        return [array[0]];
    }
    let midPoint = Math.ceil((array.length - 1) / 2);
    let left = mergeSort(array.slice(0, midPoint)); 
    let right = mergeSort(array.slice(midPoint));

    return merge(left, right);
}

const merge = (left, right) => {
    let result = [];
    while (left.length || right.length) {
        if (!left.length) {
            result = result.concat(right);
            right = [];
            continue;
        } else if (!right.length) {
            result = result.concat(left);
            left = [];
            continue;
        }
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result;
}