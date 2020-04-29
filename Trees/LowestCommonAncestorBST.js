/*   
   235. Lowest Common Ancestor of a Binary Search Tree
    Easy

    1768

    96

    Add to List

    Share
    Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

    According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

    Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]


    

    Example 1:

    Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
    Output: 6
    Explanation: The LCA of nodes 2 and 8 is 6.
    Example 2:

    Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
    Output: 2
    Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
    

    Note:

    All of the nodes' values will be unique.
    p and q are different and both values will exist in the BST.

    source: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
    Solution - recursion using structure of the BST

    - At each recursive call we want to see if p and q are BOTH greater than or BOTH less than the current node
    - If they are BOTH greater than the current node we continue traversing the RIGHT subtree
    - If they are BOTH less than the current node we continue traversing the LEFT subtree
    - When p and q are split into two subtrees, for example q is greater than root and p is less than root then we 
      know we found our Least Common Ancestor (LCA).

      Time Complexity - O(n) could potentially visit all nodes
      Space Complexity: O(N).
        - This is because the maximum amount of space utilized by the 
          recursion stack would be N since the height of a skewed BST could be N.
*/
var lowestCommonAncestor = function (root, p, q) {

    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;

};