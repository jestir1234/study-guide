/*    
    19. Remove Nth Node From End of List
    Medium

    2793

    201

    Add to List

    Share
    Given a linked list, remove the n-th node from the end of list and return its head.

    Example:

    Given linked list: 1->2->3->4->5, and n = 2.

    After removing the second node from the end, the linked list becomes 1->2->3->5.
    Note:

    Given n will always be valid.

    Follow up:

    Could you do this in one pass?

    source: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {number} n
 * @return {ListNode}
 */

/*
    Solution 

    1. Need to find the length of the list by looping through List with a pointer "temp" and incrementing "length";

    2. Once we have the length, we subtract n from it to determine the nth node we need to remove

    3. We loop again through our list starting from head. We create another pointer "prev" to keep track of the previous pointer.

    4. Once we reach our node, we set prev.next = temp.next to remove the nth node.
    
    5. For edge cases where we need to remove the first node, we create a "dummy" node and place it before our head.

    6. If we need to remove the first node (i.e. length === 0) we set the dummy.next = dummy.next.next to remove the first node.

*/
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let temp = head;
    let length = 0;
    while (temp) {
        length++;
        temp = temp.next;
    };
    length -= n;
    temp = head;
    let prev = head;
    
    if (length === 0) {
        dummy.next = dummy.next.next;
        return dummy.next;
    }
    while (length > 0) {
        length--;
        prev = temp;
        temp = temp.next;
    }

    prev.next = temp.next;
    return head; 
};

/* OPTIMIZED MEMORY VERSION */

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(); 
    dummy.next = head; /* create dummy node and set before our list */
    let temp = head;
    let length = 0;
    while (temp) { /* Find the length of our list */
        length++;
        temp = temp.next;
    };
    length -= n; /* This is the nth position we need to remove */

    temp = dummy; /* Start back at the dummy node. You'll see why */

    while (length > 0) { /* We want to stop right before our target nth node */
        length--;
        temp = temp.next;
    }

    temp.next = temp.next.next; 
                                /* Our current node is our target - 1. 
                                So we assign it's next to be it's next.next thus (removing it)*/
    return dummy.next; /* return dummy.next to skip the dummy and just return our head*/ 
};