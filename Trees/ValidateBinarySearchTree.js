/*
    98. Validate Binary Search Tree
    Medium

    3380

    480

    Add to List

    Share
    Given a binary tree, determine if it is a valid binary search tree (BST).

    Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.
    

    Example 1:

        2
    / \
    1   3

    Input: [2,1,3]
    Output: true
    Example 2:

        5
    / \
    1   4
        / \
        3   6

    Input: [5,1,4,null,null,3,6]
    Output: false
    Explanation: The root node's value is 5 but its right child's value is 4.

    source: https://leetcode.com/problems/validate-binary-search-tree/

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
 * @return {boolean}
 */

/*
    Solution 1 - Brute Force

    - Go through each node in the tree and call traceValueInTree on the node's value to determine if it 
      has been correctly placed. Save all seen nodes that are valid. Because it is a true BST, duplicate values will render
      the tree invalid. 

      Time complexity - O(n * logn) for each node we have to trace it down the tree which takes logn time
      Space complexity - O(n) for keeping track of seen nodes
*/

var isValidBST = function (root) {

    let queu = [root];
    let result = true;
    const seen = {};

    const traceValueInTree = (root, val) => {
        if (!root || seen[val]) {
            return false;
        }

        if (root.val === val) {
            seen[val] = true;
            return true;
        }
        if (val < root.val) {
            return traceValueInTree(root.left, val);
        }

        if (val > root.val) {
            return traceValueInTree(root.right, val);
        }
    }

    while (queu.length) {
        let currentNode = queu.shift();
        if (!currentNode) {
            continue;
        }
        queu.push(currentNode.left);
        queu.push(currentNode.right);
        if (!traceValueInTree(root, currentNode.val)) {
            result = false;
            break;
        }
    }



    return result;

};


/*
    Solution 2 - Min Max

    - Use min and max values at each level

    - Left subtree should have a max of the currentNode's value and the current min
    - Right subtree should have a max of the current max and a min of the currentNode's value
*/

var isValidBST = function (root) {

    const traceValueInTree = (root, min = -Infinity, max = Infinity) => {
        if (!root) {
            return true;
        }

        if (root.val && root.val <= min || root.val && root.val >= max) {
            return false;
        }

        return traceValueInTree(root.left, min, root.val) && traceValueInTree(root.right, root.val, max);
    }

    return traceValueInTree(root)

};

/*
    Solution 3 - Inorder traversal

    - Traverse the tree "Inorder" (left - node - right)
    
    - Instead of saving the inorder nodes, we will just assign the currentVal to save space

    - To traverse inorder - we traverse left DFS until the current node doesn't have a left 

    - We then visit the current node and compare it to the last visited node "currentVal" 

    - If it's greater than the last visited node we update result from true to false

    - If the inorder traversal goes smoothly, then we just return true

    Time Complexity - O(N) we must traverse every node at the worse
    Space Complexity - O(1) we are only saving currentVal here to save space


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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let currentVal;
    let result = true;
    const computeInorderTraversal = root => {
        if (!root) {
            return null;
        }
        
        if (root.left) {
            computeInorderTraversal(root.left);
        }
        
        if (currentVal >= root.val){
            result = false;
        } else {
            currentVal = root.val;
        }
        
        if (root.right){
            computeInorderTraversal(root.right);
        }
    }
    computeInorderTraversal(root);
    
    return result;
};