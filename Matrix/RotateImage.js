/*  
    48. Rotate Image
    Medium

    2562

    206

    Add to List

    Share
    You are given an n x n 2D matrix representing an image.

    Rotate the image by 90 degrees (clockwise).

    Note:

    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

    Example 1:

    Given input matrix = 
    [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ],

    rotate the input matrix in-place such that it becomes:
    [
    [7,4,1],
    [8,5,2],
    [9,6,3]
    ]
    Example 2:

    Given input matrix =
    [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
    ], 

    rotate the input matrix in-place such that it becomes:
    [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
    ]

    source: https://leetcode.com/problems/rotate-image/
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
    Solution 

    - Similar to spiral problem we spiral around the matrix, replacing each cell with it's previous side's counterpart
    - Save the cell values in temp variables so we don't lose them.
    - End loop execution when the topEnd is equal to half the distance of n (matrix length)

    Time Complexity - O(n) - we touch each cell just once
    Space Complexity - O(1) - since we're doing everything in place
/*
var rotate = function(matrix) {
    if (!matrix.length || !matrix[0].length){
        return matrix;
    }
    
    let topEnd = 0;
    let rightEnd = matrix[0].length - 1;
    let bottomEnd = matrix.length - 1;
    let leftEnd = 0;
    
    let temp1;
    let temp2;
    while (topEnd < matrix.length / 2){
        for (let i = 0; (i + leftEnd) < matrix.length - 1 - leftEnd; i++){
            // save right
            temp1 = matrix[topEnd + i][rightEnd]; 
            
            // Replace Right with Top
            matrix[topEnd + i][rightEnd] = matrix[topEnd][leftEnd + i];

            // save bottom
            temp2 = matrix[bottomEnd][rightEnd - i]; 
            
            // Replace Bottom with Right
            matrix[bottomEnd][rightEnd - i] = temp1;
            
            // save left
            temp1 = matrix[bottomEnd - i][leftEnd];
            
            // Replace Left with Bottom
            matrix[bottomEnd - i][leftEnd] = temp2;

            // Replace Top with Left
            matrix[topEnd][leftEnd + i] = temp1;
        }
        topEnd++;
        rightEnd--;
        bottomEnd--;
        leftEnd++;
    }
    return matrix;
};
