/*
    73. Set Matrix Zeroes
    Medium

    1715

    282

    Add to List

    Share
    Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

    Example 1:

    Input: 
    [
    [1,1,1],
    [1,0,1],
    [1,1,1]
    ]
    Output: 
    [
    [1,0,1],
    [0,0,0],
    [1,0,1]
    ]
    Example 2:

    Input: 
    [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
    ]
    Output: 
    [
    [0,0,0,0],
    [0,4,5,0],
    [0,3,1,0]
    ]
    Follow up:

    A straight forward solution using O(mn) space is probably a bad idea.
    A simple improvement uses O(m + n) space, but still not the best solution.
    Could you devise a constant space solution?

    source: https: //leetcode.com/problems/set-matrix-zeroes/
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


/*
    Solution - Brute Force O(1) space

    - Iterate over positions in matrix. When you find a 0, assign all cells in the row and column that DO NOT EQUAL ZERO 
      to some arbitrary value to replace later.

    - Iterate again over positions and replace the arbitrary values with 0.

    Time Complexity - O(m x n) * O(m + n)
    Space Complexity - O(1)
*/
var setZeroes = function (matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                for (let j = 0; j < matrix[row].length; j++) {
                    matrix[row][j] = matrix[row][j] === 0 ? matrix[row][j] : -1000000;
                }

                for (let y = 0; y < matrix.length; y++) {
                    matrix[y][col] = matrix[y][col] === 0 ? matrix[y][col] : -1000000;
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === -1000000) {
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;
};