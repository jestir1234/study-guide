/*   
    295. Find Median from Data Stream
    Hard

    2260

    43

    Add to List

    Share
    Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

    For example,
    [2,3,4], the median is 3

    [2,3], the median is (2 + 3) / 2 = 2.5

    Design a data structure that supports the following two operations:

    void addNum(int num) - Add a integer number from the data stream to the data structure.
    double findMedian() - Return the median of all elements so far.
    

    Example:

    addNum(1)
    addNum(2)
    findMedian() -> 1.5
    addNum(3) 
    findMedian() -> 2

    Follow up:

    If all integer numbers from the stream are between 0 and 100, how would you optimize it?
    If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

    source: https: //leetcode.com/problems/find-median-from-data-stream/
*/


/**
 * initialize your data structure here.
 */

/*
    Solution - Use Max and Min heap

    The idea is to use a max and min heap to calculate the median of the data stream in O(n) time
    
    Added numbers greater than the median will be inserted in the MinHeap
    Added numbers less than the median will be inserted in the MaxHeap

    At all times, the MaxHeap's size can only be larger than the MinHeap by 1 
    At all times, the MinHeap's size can only be equal or less than the MaxHeap

    If any insertion breaks this condition, we create balance by offering the max/min from 
    the heap we just inserted into and giving it to the other

    We then calculate the median by either: 
        a. When the size of the datastream is even...
           taking the average of the Min value from our MinHeap of High Values 
           and the Max value from our MaxHeap of Low Values
        b. When the size of the datastream is odd...
           taking the max value from our Max Heap of Low values

    Time Complexity - 
        Inserting into our heaps O(log n) for n values so O(n * log n)
        Finding the median is O(1) time since we can access the min and max from our heaps in constant time
    
    Space Complexity - 
        O(n) for our heaps

*/

class Heap {
    constructor() {
        this.heap = [];
    }

    getSize() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    getParentIdx(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftIdx(i) {
        return (i * 2) + 1; // just need to remember this (need to offset when idx is 0)
    }

    getRightIdx(i) {
        return (i * 2) + 2; // just need to remember this (need to offset when idx is 0)
    }
}

class MinHeap extends Heap {
    insert(val) {
        this.heap.push(val);
        let currentIdx = this.heap.length - 1;

        while (currentIdx > 0 && this.heap[currentIdx] < this.heap[this.getParentIdx(currentIdx)]) {
            this.swap(currentIdx, this.getParentIdx(currentIdx));
            currentIdx = this.getParentIdx(currentIdx);
        }
    }

    remove() {
        let removed = this.heap[0];

        if (this.heap.length <= 1) {
            this.heap.pop();
        } else {
            this.heap[0] = this.heap.pop();
            this.heapify(0);
        }

        return removed;
    }

    heapify(i) {
        let leftIdx = this.getLeftIdx(i);
        let rightIdx = this.getRightIdx(i);

        let smallestIdx = i;

        if (leftIdx < this.getSize() && this.heap[leftIdx] < this.heap[smallestIdx]) {
            smallestIdx = leftIdx;
        }

        if (rightIdx < this.getSize() && this.heap[rightIdx] < this.heap[smallestIdx]) {
            smallestIdx = rightIdx;
        }

        if (smallestIdx !== i) {
            this.swap(i, smallestIdx);
            this.heapify(smallestIdx);
        }

    }
}

class MaxHeap extends Heap {
    insert(val) {
        this.heap.push(val);
        let currentIdx = this.heap.length - 1;

        while (currentIdx > 0 && this.heap[currentIdx] > this.heap[this.getParentIdx(currentIdx)]) {
            this.swap(currentIdx, this.getParentIdx(currentIdx));
            currentIdx = this.getParentIdx(currentIdx);
        }
    }

    remove() {
        let removed = this.heap[0];

        if (this.heap.length <= 1) {
            this.heap.pop();
        } else {
            this.heap[0] = this.heap.pop();
            this.heapify(0);
        }

        return removed;
    }

    heapify(i) {
        let leftIdx = this.getLeftIdx(i);
        let rightIdx = this.getRightIdx(i);

        let largestIdx = i;

        if (leftIdx < this.getSize() && this.heap[leftIdx] > this.heap[largestIdx]) {
            largestIdx = leftIdx;
        }

        if (rightIdx < this.getSize() && this.heap[rightIdx] > this.heap[largestIdx]) {
            largestIdx = rightIdx;
        }

        if (largestIdx !== i) {
            this.swap(i, largestIdx);
            this.heapify(largestIdx);
        }
    }
}
var MedianFinder = function () {
    this.maxHeapLow = new MaxHeap();
    this.minHeapHigh = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (num > this.findMedian()) {
        this.minHeapHigh.insert(num);
        this.balanceHigh();
    } else {
        this.maxHeapLow.insert(num);
        this.balanceLow();
    }
};

MedianFinder.prototype.balanceHigh = function () {
    if (this.minHeapHigh.getSize() > this.maxHeapLow.getSize()) {
        this.maxHeapLow.insert(this.minHeapHigh.remove())
    };
};

MedianFinder.prototype.balanceLow = function () {
    if (this.maxHeapLow.getSize() - this.minHeapHigh.getSize() >= 2) {
        this.minHeapHigh.insert(this.maxHeapLow.remove());
    };
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if ((this.maxHeapLow.getSize() + this.minHeapHigh.getSize()) % 2 === 0) {
        return (this.maxHeapLow.peek() + this.minHeapHigh.peek()) / 2;
    } else {
        return this.maxHeapLow.peek();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */