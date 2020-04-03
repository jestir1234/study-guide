 /*
    21. Merge Two Sorted Lists
    Easy

    3555

    527

    Add to List

    Share
    Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

    Example:

    Input: 1->2->4, 1->3->4
    Output: 1->1->2->3->4->4

    source: https: //leetcode.com/problems/merge-two-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


/*
    Solution

    - Create a new node. 
    - Set a pointer "current" to node to move up the new linked list, while node will remain the head (we need to return this at the end).
    - loop through list1 and list2 until either is on their last node, evaluating the values between each lists current node
      and set the "current" pointer's next to be the lesser of the two lists.

    - Once one list ends we know that we can just add the other list with remaining nodes (if it exists) to current

    - Return node at the end.

*/
var mergeTwoLists = function(l1, l2) {    
    let node = new ListNode(-1);
    let current = node;

    while (l1 && l2){
        if (l1.val > l2.val){
            current.next = l2;
            l2 = l2.next;
        } else {
            current.next = l1;
            l1 = l1.next;
        }
        current = current.next;
    }
    
    if (!l1 && l2) {
        current.next = l2;
    } 
    
    if (!l2 && l1) {
        current.next = l1;
    }

    
    return node.next;
        
};