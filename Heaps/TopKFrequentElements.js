/*
   347. Top K Frequent Elements
    Medium

    2648

    194

    Add to List

    Share
    Given a non-empty array of integers, return the k most frequent elements.

    Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
    Example 2:

    Input: nums = [1], k = 1
    Output: [1]
    Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
    It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
    You can return the answer in any order.

    source: https://leetcode.com/problems/top-k-frequent-elements/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
    Solution - MaxHeap

    1. Create hashmap of number frequencies

    2. Insert the key values in to the modified MaxHeap

    3. Loop through k, popping off and adding the Max key from the MaxHeap to output

    Time Complexity: 
        -   Adding to Frequency Hashmap is O(n)
        -   Inserting into Hashmap is O(n * logn) - n numbers * logn insertion time for each number
        -   Removing Max value from heap k times is O(k * logn)
    
    Space Complexity:
        - O(n) to store Hashmap and MaxHeap

*/

class MaxHeap {
    constructor() {
        this.heap = [{
            key: null,
            val: 0
        }];
    }

    getMax() {
        return this.heap[1];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    remove() {
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.bubbleDown();
    }

    bubbleUp() {
        let currentIdx = this.heap.length - 1;
        while (currentIdx > 1 && this.heap[currentIdx].val > this.heap[Math.floor(currentIdx / 2)].val) {
            let temp = this.heap[currentIdx];
            this.heap[currentIdx] = this.heap[Math.floor(currentIdx / 2)];
            this.heap[Math.floor(currentIdx / 2)] = temp;
            currentIdx = Math.floor(currentIdx / 2);
        }
    }

    bubbleDown() {
        if (this.heap.length === 3) {
            if (this.heap[1].val < this.heap[2].val) {
                let temp = this.heap[1];
                this.heap[1] = this.heap[2];
                this.heap[2] = temp;
            }
            return;
        }

        let currentIdx = 1;
        let leftIdx = currentIdx * 2;
        let rightIdx = (currentIdx * 2) + 1;

        while (this.heap[leftIdx] !== undefined && this.heap[rightIdx] !== undefined && (this.heap[currentIdx].val <= this.heap[leftIdx].val || this.heap[currentIdx].val <= this.heap[rightIdx].val)) {
            if (this.heap[leftIdx].val >= this.heap[rightIdx].val) {
                let temp = this.heap[currentIdx];
                this.heap[currentIdx] = this.heap[leftIdx];
                this.heap[leftIdx] = temp;
                currentIdx = leftIdx;
            } else {
                let temp = this.heap[currentIdx];
                this.heap[currentIdx] = this.heap[rightIdx];
                this.heap[rightIdx] = temp;
                currentIdx = rightIdx;
            }
            leftIdx = currentIdx * 2;
            rightIdx = (currentIdx * 2) + 1;
        }
    }

}
var topKFrequent = function (nums, k) {
    let hash = {}
    let maxHeap = new MaxHeap();
    let output = [];
    nums.forEach(num => {
        if (hash[num]) {
            hash[num] += 1;
        } else {
            hash[num] = 1;
        }
    });

    Object.keys(hash).forEach(val => {
        maxHeap.insert({
            key: val,
            val: hash[val]
        });
    })

    for (let i = 0; i < k; i++) {
        output.push(maxHeap.getMax().key);
        maxHeap.remove();
    }

    return output;


};