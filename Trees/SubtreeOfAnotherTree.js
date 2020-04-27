/*   
    572. Subtree of Another Tree
    Easy

    2001

    98

    Add to List

    Share
    Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

    Example 1:
    Given tree s:

        3
        / \
    4   5
    / \
    1   2
    Given tree t:
    4 
    / \
    1   2
    Return true, because t has the same structure and node values with a subtree of s.
    Example 2:
    Given tree s:

        3
        / \
    4   5
    / \
    1   2
        /
    0
    Given tree t:
    4
    / \
    1   2
    Return false.

    source: https: //leetcode.com/problems/subtree-of-another-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

/*
    Solution 

    - Through BFS visit each node and call "subTreeSearch" for that "root node" against the sub tree t.

    - In our subTreeSearch function we simply recurse over the two trees and compare values at each node

    - If a comparison yields false, it'll bubble up the call stack and return false
*/
var isSubtree = function (s, t) {
    let queu = [s];
    let result = false;
    while (queu.length) {
        let currentNode = queu.shift();
        if (currentNode.left) {
            queu.push(currentNode.left);
        }

        if (currentNode.right) {
            queu.push(currentNode.right);
        }
        if (subTreeSearch(currentNode, t)) {
            result = true;
        }
    }
    return result;
};

const subTreeSearch = (node, t) => {
    if (!node && !t) {
        return true;
    }
    if (!node && t || node && !t) {
        return false;
    }


    return node.val === t.val && subTreeSearch(node.left, t.left) && subTreeSearch(node.right, t.right);

}