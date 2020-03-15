/* 

62. Unique Paths
Medium

2485

180

Add to List

Share
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

 

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
 

Constraints:

1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.

https: //leetcode.com/problems/unique-paths/

*/ 

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 /*
    Solution - Dp Table Approach

    The idea is to build a dp table for all unique paths at dpTable[m][n].

    - We know that any dpTable[x][1] and dpTable[1][y] has only 1 unique path 
      (straight across or straight down) so we can set those to 1.

    - As we increment x and m we leverage our dpTable to calculate the number of unique paths for dpTable[x][y] 
      by adding dpTable[x - 1][y] + dpTable[y - 1][x]

      For example below, the robot starts at top left. We already know going right yields a 1 x 2 rectangle which in our
      dpTable[1][2] = 1. Same with going down, it yields 2 x 1 which in your dpTable[2][1] = 1. So 1 + 1 = 2, we can fill that in
      our dpTable[2][2] = 2;
      [o][o] 
      [o][x]

      We continue on:
      - Going right yields 1 x 3, thus dpTable[1][3] = 1 and going down yields 2 x 2, thus dpTable[2][2] = 2 
      - So 2 + 1 = 3, so we can fill in our dpTable[2][3] = 3.
      [o][o]
      [o][o]
      [o][x]

      Keep going until you have filled out the table up to m and n.
      Return the final element in the matrix.

      Time Complexity = O(nm) 
      Space Complexity = O(mn)

 */

var uniquePaths = function (m, n) {
    let dpTable = Array.from(new Array(m + 1));
    dpTable = dpTable.map(row => new Array(n + 1).fill(0));
    for (let x = 1; x <= m; x++) {
        for (let y = 1; y <= n; y++) {
            if (x === 1 || y === 1) {
                dpTable[x][y] = 1;
            } else {
                dpTable[x][y] = dpTable[x - 1][y] + dpTable[x][y - 1];
            }
        }
    }
    return dpTable.pop().pop();

};
