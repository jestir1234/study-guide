/*
    143. Reorder List
    Medium

    1516

    100

    Add to List

    Share
    Given a singly linked list L: L0→L1→…→Ln-1→Ln,
    reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

    You may not modify the values in the list's nodes, only nodes itself may be changed.

    Example 1:

    Given 1->2->3->4, reorder it to 1->4->2->3.
    Example 2:

    Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

    source: https: //leetcode.com/problems/reorder-list/
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
 * @return {void} Do not return anything, modify head in-place instead.
 */

/*
    Solution

    1. Idea is to merge two lists - First half of the list and second half reversed.

    2. We need to find the mid point so we use the slow fast pointer technique (fast increments by two, slow by 1);

    3. After we get our mid point we reverse the list (this will be our second half)

    4. Then we merge the lists starting from the head of the first list and the head of the reversed list.
*/

var reorderList = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let mid = middleOfLinkedList(head);

    mid = reverseList(mid);

    mergeList(head, mid);
};

function middleOfLinkedList(head) {
    let fast = head,
        slow = head,
        prev = head;
    while (fast) {
        prev = slow;
        fast = fast.next;
        slow = slow.next;
        if (fast) {
            fast = fast.next;
        }
    }
    prev.next = null;
    return slow;
}

const reverseList = (head) => {
    if (!head.next) {
        return head;
    }

    let reverse = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reverse;

}

const mergeList = (l1, l2) => { 
    while (l1 && l2) {
        const next1 = l1.next;
        const next2 = l2.next;
        l1.next = l2;
        l2.next = next1;
        l1 = next1; 2
        l2 = next2; 3
    }
}

/* 
EX:
l1
1 - 2 - 3 - 4
l2
8 - 7 - 6 - 5

FIRST LOOP ------------------------
l1
1 - 2 - 3 - 4
l2
8 - 7 - 6 - 5

next1 = 2 - 3 - 4
next2 = 7 - 6 - 5

l1.next = l2
l1  l2
1 - 8 - 7 - 6 - 5

l2.next = next1;
    l2
1 - 8 - 2 - 3 - 4

l1 = next1;
l1 ---> l1
1 - 8 - 2 - 3 - 4

l2 = next2;
l2
7 - 6 - 5

SECOND LOOP ------------------------
        l1
1 - 8 - 2 - 3 - 4
l2
7 - 6 - 5

next1 = 3 - 4
next2 = 6 - 5

l1.next = l2
        l1  l2
1 - 8 - 2 - 7 - 6 - 5

l2.next = next1;
            l2
1 - 8 - 2 - 7 - 3 - 4

l1 = next1;
        l1 ---> l1
1 - 8 - 2 - 7 - 3 - 4

l2 = next2;
l2
6 - 5

THIRD LOOP --------------------------
                l1
1 - 8 - 2 - 7 - 3 - 4
l2
6 - 5

next1 = 4;
next2 = 5;

l1.next = l2;
                l1  l2
1 - 8 - 2 - 7 - 3 - 6 - 5

l2.next = next1;
                    l2
1 - 8 - 2 - 7 - 3 - 6 - 4

l1 = next1;
                l1 ---> l1
1 - 8 - 2 - 7 - 3 - 6 - 4

l2 = next2;

l2
5

FOURTH LOOP --------------------------
                        l1
1 - 8 - 2 - 7 - 3 - 6 - 4
l2
5

next1 = null;
next2 = null;

l1.next = l2;
                        l1  l2
1 - 8 - 2 - 7 - 3 - 6 - 4 - 5

l2.next = next1;
null

l1 = next1; null
l2 = next2; null

*/