/*    
    124. Binary Tree Maximum Path Sum
    Hard

    2883

    243

    Add to List

    Share
    Given a non-empty binary tree, find the maximum path sum.

    For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

    Example 1:

    Input: [1,2,3]

        1
        / \
        2   3

    Output: 6
    Example 2:

    Input: [-10,9,20,null,null,15,7]

    -10
    / \
    9  20
        /  \
    15   7

    Output: 42

    source: https: //leetcode.com/problems/binary-tree-maximum-path-sum/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
    Solution

    The idea is to recursively drill down to the lowest leaf nodes and 
    on our way up we sum the maximum between left and right tree paths 
    If the value is negative we drop that side.

    Along the way we also take the max between the current path sum with our running max `maxPathSum`

    Finally returning the running max at the end

    Time Complexity - O(n) we touch every node
    Space Complexity - O(1)

*/

var maxPathSum = function (root) {
    let maxPathSum = -Infinity;

    const pathSum = function (node) {
        if (!node) {
            return 0;
        }

        let left = Math.max(pathSum(node.left), 0);
        let right = Math.max(pathSum(node.right), 0);
        maxPathSum = Math.max(maxPathSum, left + right + node.val);
        return Math.max(left, right) + node.val;
    };
    pathSum(root);
    return maxPathSum;
}
