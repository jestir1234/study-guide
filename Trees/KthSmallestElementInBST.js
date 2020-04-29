/*
    230. Kth Smallest Element in a BST
    Medium

    2004

    54

    Add to List

    Share
    Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

    Note:
    You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

    Example 1:

    Input: root = [3,1,4,null,2], k = 1
    3
    / \
    1   4
    \
    2
    Output: 1
    Example 2:

    Input: root = [5,3,6,2,4,null,null,1], k = 3
        5
        / \
        3   6
        / \
    2   4
    /
    1
    Output: 3
    Follow up:
    What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

    source: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

/*
    Solution - Inorder traversal (left - node - right)

    - We traverse the tree inorder, decrementing k each time we arrive at the node 
    - Once K === 1 we assign the node's value to result

    - After result is assigned, any other recursive calls should return null instead of furthering the search

    Time Complexity - O(n) since we potentially need to visit every node
    Space Complexity - O(n)

*/
var kthSmallest = function (root, k) {

    let result;

    const helper = (root) => {
        if (!root || result) return null;

        if (root.left) {
            helper(root.left);
        }

        if (k === 1) {
            result = root.val;
        }
        k -= 1;

        if (root.right) {
            helper(root.right);
        }
    }

    helper(root);

    return result;
};