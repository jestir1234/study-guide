/*  
    102. Binary Tree Level Order Traversal
    Medium

    2549

    65

    Add to List

    Share
    Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

    For example:
    Given binary tree [3,9,20,null,null,15,7],
        3
    / \
    9  20
        /  \
    15   7
    return its level order traversal as:
    [
    [3],
    [9,20],
    [15,7]
    ]

    source: https: //leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */

/*
    Solution - BFS

    Use breadth first search to traverse the tree

    Create a queu

    Add root to the queu

    At each level we find the current length of the queu "currentLevelNodeCount" which is the amount of nodes at that level

    Loop through the count and shift off nodes from the queu, adding each nodes left and right children to the queu for the next
    level's iteration.

    Push node.val to current collection and at the end of the loop push the collection to result. Reset collection for next level iteration

*/
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const result = [];

    let queu = [root];
    while (queu.length) {
        let current = [];
        let currentLevelNodeCount = queu.length;

        for (let i = 0; i < currentLevelNodeCount; i++) {
            let currentNode = queu.shift();
            if (currentNode.left) {
                queu.push(currentNode.left);
            }
            if (currentNode.right) {
                queu.push(currentNode.right);
            }
            current.push(currentNode.val);
        }
        result.push(current);
        current = [];
    }

    return result;

};