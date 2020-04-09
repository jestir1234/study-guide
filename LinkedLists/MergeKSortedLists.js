/*

    23. Merge k Sorted Lists
    Hard

    4008

    258

    Add to List

    Share
    Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

    Example:

    Input:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    Output: 1->1->2->3->4->4->5->6

    source: https://leetcode.com/problems/merge-k-sorted-lists/

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/*
    Solution - Merge with Divide And Conquer
    
    - Leveraging the solution found for MergeTwoSortedLists, we loop through the collection of lists 
      popping off two lists at a time to call with mergeTwoLists. We push the result back on to the list and continue until
      there is only one list in the collection.

    
    Time Complexity - O(Nlogk) where k is the number of linked lists.
    Space complexity : O(1)
*/
var mergeKLists = function (lists) {
    if (!lists.length) {
        return null;
    }

    while (lists.length > 1) {
        lists.push(mergeTwoLists(lists.pop(), lists.pop()));
    }
    return lists[0];
};

const mergeTwoLists = (l1, l2) => {
    let node = new ListNode(0);
    let current = node;

    while (l1 && l2) {
        if (l1.val > l2.val) {
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


/*
    Solution - Use a Min Heap

    - This solution uses a min heap which is an abstract data structure resembling a balanced binary tree 
      (where at every level each node has 2 children except for the lowest level).
    - In O(N^2) time we insert our nodes into the Min Heap.
        - Each insertion takes log n time 
    
    - The Min heap maintains the minimum value at the root node.

    - To create our sorted List we call MinHeap.remove(), removing the root node and adding it to the list
      until there are no more nodes in the Min heap to remove.

    - Return the list

    Time Complexity - O(n * (n log n))
    Space Complexity - O(n)

*/

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    getHeap() {
        return this.heap[1];
    }

    insert(node) {
        this.heap.push(node);
        let current = this.heap.length - 1;
        while (current > 1 && this.heap[current] < this.heap[Math.floor(current / 2)]) {
            let temp = this.heap[current];
            this.heap[current] = this.heap[Math.floor(current / 2)];
            this.heap[Math.floor(current / 2)] = temp;
            current = Math.floor(current / 2);
        }
    }

    remove() {
        let removed = this.heap[1];
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.pop();

        if (this.heap.length > 2) {
            let current = 1;
            let child1 = this.heap[current * 2];
            let child2 = this.heap[(current * 2) + 1];
            let temp;

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    let temp = this.heap[1];
                    this.heap[1] = this.heap[2];
                    this.heap[2] = temp;
                }
                return removed;
            }
            while (child1 !== undefined && child2 !== undefined && (child1 < this.heap[current] || child2 < this.heap[current])) {
                if (child1 < child2) {
                    temp = this.heap[current * 2];
                    this.heap[current * 2] = this.heap[current];
                    this.heap[current] = temp;
                    current = current * 2;
                } else {
                    temp = this.heap[(current * 2) + 1];
                    this.heap[(current * 2) + 1] = this.heap[current];
                    this.heap[current] = temp;
                    current = (current * 2) + 1;
                }

                child1 = this.heap[current * 2];
                child2 = this.heap[(current * 2) + 1];
            }
        }

        return removed;
    }

}

var mergeKLists = function (lists) {
    let minHeap = new MinHeap();
    for (let i = 0; i < lists.length; i++) {
        let current = lists[i];
        while (current) {
            minHeap.insert(current.val);
            current = current.next;
        }
    }
    if (minHeap.heap.length === 1) {
        return null;
    }
    let node = new ListNode();
    let temp = node;
    while (minHeap.heap.length > 1) {
        temp.val = minHeap.remove();
        if (minHeap.heap.length > 1) {
            temp.next = new ListNode();
            temp = temp.next;
        }
    }
    return node;
};
