/*
    226. Invert Binary Tree
    Easy

    2732

    43

    Add to List

    Share
    Invert a binary tree.

    Example:

    Input:

        4
    /   \
    2     7
    / \   / \
    1   3 6   9
    Output:

        4
    /   \
    7     2
    / \   / \
    9   6 3   1
    Trivia:
    This problem was inspired by this original tweet by Max Howell:

    Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

    source: https: //leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */

/* 
    Solution

    - Recursively drill down the tree and at each level swap the left and right nodes

    - Return the root node;

    Time Complexity - O(n) we need to visit every node to swap it
    Space Complexity - O(n) worst case we need to store n nodes in a temp variable
*/
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    let temp = root.left;
    root.left = root.right
    root.right = temp;
    invertTree(root.left)
    invertTree(root.right);
    return root;
};
