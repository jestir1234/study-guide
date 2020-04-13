/*   
    54. Spiral Matrix
    Medium

    1937

    522

    Add to List

    Share
    Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

    Example 1:

    Input:
    [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
    ]
    Output: [1,2,3,6,9,8,7,4,5]
    Example 2:

    Input:
    [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
    ]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]

    Source: https://leetcode.com/problems/spiral-matrix/
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/* 
    Solution O(n) space and time

    - Keep an incrementing buffer variable as you spiral around the matrix.
    - Trace through the top, right, bottom, and left sides of the matrix using the buffer to calculate the cell's position.
    - Stop when the result array has the same length as the original matrice's elements

*/
var spiralOrder = function(matrix) {
    if (!matrix.length){
        return [];
    }
    let result = [];
    let buffer = 0;
    let row;
    let col;
    while (result.length < matrix.length * matrix[0].length) {
        // Top
        row = buffer; 
        for (col = buffer; col < matrix[row].length - buffer; col++){
            if (result.length !== matrix.length * matrix[0].length){
                result.push(matrix[row][col]);   
            }
        }
        
        // Right
        col = matrix[row].length - 1 - buffer;
        for (row = buffer + 1; row < matrix.length - buffer; row++){
            if (result.length !== matrix.length * matrix[0].length){
                result.push(matrix[row][col]);
            }
        }
        
        // Bottom
        row = matrix.length - 1 - buffer; 
        for (col = matrix[row].length - 2 - buffer; col >= buffer; col--){
            if (result.length !== matrix.length * matrix[0].length){
                result.push(matrix[row][col]);
            }
        }
        
        // Left
        col = buffer;
        for (row = matrix.length - 2 - buffer; row > buffer; row--){
            if (result.length !== matrix.length * matrix[0].length){
                result.push(matrix[row][col]);
            }
        }

        buffer++; 
        
    }
    
    return result;

};