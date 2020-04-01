/*
    206. Reverse Linked List
    Easy

    3761

    82

    Add to List

    Share
    Reverse a singly linked list.

    Example:

    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL
    Follow up:

    A linked list can be reversed either iteratively or recursively. Could you implement both?

    source: https://leetcode.com/problems/reverse-linked-list/
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
 * @return {ListNode}
 */

/*
    Iterative Solution
    - Set "temp" and "previous" to null to initiate.
    - Iterate through each node of the linked list 
    - Save the current node's next in the "temp" variable because we are going to need it later.
    - Assign the current node's next to "previous" (which in the first iteration sets the first node's next to null)
        Ex: 1 2 3 4 5
        1 => null
    - Assign previous to the current node 
    - Assign current node to "temp" which is 2 in the first iteration
        Ex: 
        1 => null
        2
    
    In the next iteration we do the same, 
        - assign "temp" to the current node's next (3)
        - assign current node's next to previous.
        Ex:
        2 => 1 => null
        - Assign previous to current node
        - Assign current node to temp

    Time Complexity = O(n)
    Space Complexity = O(1)
*/
var reverseList = function (head) {
    if (!head) {
        return head;
    }
    let temp;
    let previous;

    while (head) {
        temp = head.next;

        head.next = previous;
        previous = head;
        head = temp;
    }

    return previous;
};


/*
    Recursive Solution

    - Set base case where head is null or head.next is null to return the last node
    - Recursively call the function with head.next until you hit base case
        EX) 1 => 2 => 3 => 4 => 5
        5 is base case and is returned to the previous level
        reversed = 5 => null | head = 4 => 5
    - Save pointer for reversed node and set the current call's head.next.next to the current head
        5 => 4 
    - set head.next.next to null to remove old link
        5 => 4 => null
    - return reversed  


*/

var reverseLinkedListRecursive = function(head){
    if (!head){
        return null;
    }

    if (!head.next){
        return head;
    }

    let reversed = reverseLinkedListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return reversed;
}