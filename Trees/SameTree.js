/*
    100. Same Tree
    Easy

    1797

    53

    Add to List

    Share
    Given two binary trees, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

    Example 1:

    Input:     1         1
            / \       / \
            2   3     2   3

            [1,2,3],   [1,2,3]

    Output: true
    Example 2:

    Input:     1         1
            /           \
            2             2

            [1,2],     [1,null,2]

    Output: false
    Example 3:

    Input:     1         1
            / \       / \
            2   1     1   2

            [1,2,1],   [1,1,2]

    Output: false

    source: https: //leetcode.com/problems/same-tree/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/*
    Solution - Recursion

    - Keep recursively calling until you hit the leaf nodes.

    - At each level return the comparitor of the current nodes values && the recursive calls to their respective child nodes

    Time Complexity - O(log n)
    Space Complexity - O(1)
*/

var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p && q || p && !q) return false;

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};