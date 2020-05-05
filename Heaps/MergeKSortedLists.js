/*    
    23. Merge k Sorted Lists
    Hard

    4206

    267

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
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeap {
    constructor() {
        this.heap = [0];
    }

    getHeapSize() {
        return this.heap.length;
    }

    getMin() {
        return this.heap[1];
    }

    insert(val) {
        this.heap.push(val);
        let currentIdx = this.heap.length - 1;

        while (currentIdx > 1 && this.heap[currentIdx] < this.heap[Math.floor(currentIdx / 2)]) {
            let temp = this.heap[currentIdx];
            this.heap[currentIdx] = this.heap[Math.floor(currentIdx / 2)];
            this.heap[Math.floor(currentIdx / 2)] = temp;

            currentIdx = Math.floor(currentIdx / 2);
        }

    }

    remove() {
        let removed = this.heap[1]; // save val to return later
        this.heap[1] = this.heap[this.heap.length - 1]; // swap the last node with the root
        this.heap.pop(); // pop off the last node

        if (this.heap.length === 3) {
            if (this.heap[1] > this.heap[2]) {
                let temp = this.heap[1];
                this.heap[1] = this.heap[2];
                this.heap[2] = temp;
            }
            return;
        }

        let currentIdx = 1;

        let leftIdx = currentIdx * 2
        let rightIdx = (currentIdx * 2) + 1;

        // conditions to resort heap
        while ((this.heap[leftIdx] !== undefined && this.heap[rightIdx] !== undefined) && (this.heap[currentIdx] >= this.heap[leftIdx] || this.heap[currentIdx] >= this.heap[rightIdx])) {
            if (this.heap[leftIdx] < this.heap[rightIdx]) {
                let temp = this.heap[currentIdx]
                this.heap[currentIdx] = this.heap[leftIdx];
                this.heap[leftIdx] = temp;
                currentIdx = currentIdx * 2;
            } else {
                let temp = this.heap[currentIdx]
                this.heap[currentIdx] = this.heap[rightIdx];
                this.heap[rightIdx] = temp;
                currentIdx = (currentIdx * 2) + 1;
            }
            leftIdx = currentIdx * 2
            rightIdx = (currentIdx * 2) + 1;
        }
    }
}
var mergeKLists = function (lists) {
    /*
      First we create our minHeap and insert all our 
      node values from each linked list
    */
    let minHeap = new MinHeap();
    for (let i = 0; i < lists.length; i++) {
        let current = lists[i];
        while (current) {
            minHeap.insert(current.val);
            current = current.next;
        }
    }

    let returnedList = new ListNode(); // create our dummy node
    let currentNode = returnedList;

    /*
        Next we just rebuild our new list by popping off the min value from our minHeap 
    */
    while (minHeap.getHeapSize() > 1) {
        currentNode.next = new ListNode(minHeap.getMin());
        currentNode = currentNode.next;
        minHeap.remove();
    }

    return returnedList.next;
};