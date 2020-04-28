/*
    105. Construct Binary Tree from Preorder and Inorder Traversal
    Medium

    2878

    83

    Add to List

    Share
    Given preorder and inorder traversal of a tree, construct the binary tree.

    Note:
    You may assume that duplicates do not exist in the tree.

    For example, given

    preorder = [3,9,20,15,7]
    inorder = [9,3,15,20,7]
    Return the following binary tree:

        3
    / \
    9  20
        /  \
    15   7

    Source: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/*

    Solution - DFS Recursion 

    * Remember 
        Preorder traversal is root - left -right
        Inorder traversal is left - root - right

    - Use the preorder traversed array to identify the root of the subtree
    - Use the inorder traversed array to identify the left and right subtrees

    - At each recursive call we shift off the first element in PREORDER and create the root node for that subtree
    - We search the index of the root value in INORDER
    - Using the index we can find the length of the left subtree and the right subtree like so:
        - Values to the left of the index belong to the left sub tree 
        - Values to the right of the index belong to the right sub tree
    - We set the root's left and right by calling build tree on the left subtree and right subtree respectively
    
*/
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null; // sanity check
    let root = preorder.shift(); // shift off the first value from preorder (this is always the root of the tree) 
    let node = new TreeNode(root); // create the node
    let index = inorder.indexOf(root); // find the index of the root

    /*
        We want to recursive call the left and right subtrees. 
        Since we know the length of the left and right sides (using the root index in the inorder array),
        we can pass the sliced left side down for BOTH preorder and inorder and sliced right side down for BOTH preorder and inorder
    */
    node.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
    node.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
    return node;
};
