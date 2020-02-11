/*
    11. Container With Most Water

    Given n non - negative integers a1, a2, ..., an, where each represents a point at 
    coordinate(i, ai).n vertical lines are drawn such that the two endpoints of line i 
    is at(i, ai) and(i, 0).Find two lines, which together with x - axis forms a container, 
    such that the container contains the most water.

    Note: You may not slant the container and n is at least 2.


    The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].In this
    case, the max area of water(blue section) the container can contain is 49.



    Example:

    Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
    Output: 49

    original: https: //leetcode.com/problems/container-with-most-water/
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// For this problem we set left and right pointers to converge into the array, calculating the 
// area by multiplying the minimum height between the two pointer elements height[left] and height[right].
// We multiply that minimum height by the distance between left and right to find the area. Pointers are useful 
// here because we want to remain on the highest height (either left or right) and decrement/increment the other

var maxArea = function (height) {
    let maxArea = Math.min(...height);
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let currentArea = Math.min(height[left], height[right]) * (right - left);
        if (currentArea > maxArea) {
            maxArea = currentArea;
        }
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return maxArea;
};