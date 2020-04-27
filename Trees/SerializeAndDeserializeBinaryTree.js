/*
    297. Serialize and Deserialize Binary Tree
    Hard

    2625

    131

    Add to List

    Share
    Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

    Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

    Example: 

    You may serialize the following tree:

        1
    / \
    2   3
        / \
        4   5

    as "[1,2,3,null,null,4,5]"
    Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

    Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

    source: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

/*
    Solution 

    Step 1 - Serialize - BFS
    
    - Using a queu, add nodes through BFS order

    - Push node values into array

    - Return result as a string

    Step 2 - Deserialize - BFS

    - Need to split the serialized string to create an array of values "collection"

    - If the array is empty or the first value is not a valid number return null

    - Create the root node with the first value and add to a queu

    - Through BFS loop through each level and shift values from "collection", 
      then create and add the nodes as left and right children

    - Return root

*/

var serialize = function (root) {
    if (!root) {
        return `'[]'`;
    }

    let result = [];

    let queu = [root];

    while (queu.length) {
        let currentNode = queu.shift();
        if (!currentNode) {
            result.push('null');
            continue;
        }
        queu.push(currentNode.left);
        queu.push(currentNode.right);
        result.push(currentNode.val);
    };
    return `${result}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let collection = data.split(',').map(val => {
        if (val === 'null') {
            return null;
        }
        return parseInt(val);
    })
    if (!collection.length || !Number.isInteger(collection[0])) {
        return null;
    }

    let root = new TreeNode(parseInt(collection.shift()));
    let queu = [root];
    while (queu.length) {
        let count = queu.length;
        for (let i = 0; i < count; i++) {
            let currentNode = queu.shift();
            if (currentNode.val === null) {
                continue;
            }
            let leftNode = new TreeNode(collection.shift());
            let rightNode = new TreeNode(collection.shift());
            currentNode.left = leftNode.val !== null ? leftNode : null;
            currentNode.right = rightNode.val !== null ? rightNode : null;
            if (leftNode.val !== null) {
                queu.push(leftNode);
            }
            if (rightNode.val !== null) {
                queu.push(rightNode);
            }
        }
    }
    return root;

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */