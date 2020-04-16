/*
    104. Maximum Depth of Binary Tree
    Easy

    2145

    66

    Add to List

    Share
    Given a binary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

        3
    / \
    9  20
        /  \
    15   7
    return its depth = 3.

    source: https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
    Solution - Recursion

    - Keep recursively calling until you hit the leaf nodes.

    - At each level add one + the larger of left and right search results

*/


var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return 1 + (left > right ? left : right);
};