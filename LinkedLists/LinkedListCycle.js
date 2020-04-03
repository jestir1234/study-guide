/*    
    141. Linked List Cycle
    Easy

    2411

    373

    Add to List

    Share
    Given a linked list, determine if it has a cycle in it.

    To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

    

    Example 1:

    Input: head = [3,2,0,-4], pos = 1
    Output: true
    Explanation: There is a cycle in the linked list, where tail connects to the second node.


    Example 2:

    Input: head = [1,2], pos = 0
    Output: true
    Explanation: There is a cycle in the linked list, where tail connects to the first node.


    Example 3:

    Input: head = [1], pos = -1
    Output: false
    Explanation: There is no cycle in the linked list.


    

    Follow up:

    Can you solve it using O(1) (i.e. constant) memory?
    
    source: https://leetcode.com/problems/linked-list-cycle/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
    Solution 
    
    1. Loop through nodes, and at each node save the current node's next to a temporary variable
    2. Set the current node's next to -1 
    3. Set current node to be the temporary variable (node's original next)
    4. Check to see if the current node's next is -1. If it is then we've seen this node before and its a cycle.

    Time Complexity - O(n)
    Space Complexity - O(1) only variable we are storing is isCycle. 

*/
var hasCycle = function(head, pos) {
    if (!head){
        return false;
    }
    let temp;
    let isCycle = false;
    while (head.next) {
        temp = head.next;
        head.next = -1;
        head = temp;
        if (head.next === -1){
            isCycle = true;
            break;
        }
    }
    return isCycle;
};