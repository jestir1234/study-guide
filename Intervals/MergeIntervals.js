/* 
    56. Merge Intervals
    Medium

    3646

    266

    Add to List

    Share
    Given a collection of intervals, merge all overlapping intervals.

    Example 1:

    Input: [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
    Example 2:

    Input: [[1,4],[4,5]]
    Output: [[1,5]]
    Explanation: Intervals [1,4] and [4,5] are considered overlapping.

    source: https://leetcode.com/problems/merge-intervals/
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */


/*
    Solution - Sort, Iterate and compare

    The idea is to compare the "current" interval with the next one and see if there is an overlap...
    if so we merge the two intervals and continue - otherwise we add the current interval to the output array.
    However, this approach only works if the intervals are sorted so we need to sort first.

    1. Sort the intervals
    2. Iterate through, and assign a currentInterval to the current interval if it is empty (will always be assigned during first iteration)
    3. If the start or end value in the "next" interval is less than the currentInterval's 
       end then there is an overlap and we merge the two
    4. Continue iterating until there isn't an overlap, at which point we add the currentInterval to the output array and reset currentInterval

    Time Complexity - O(n * logn) for sorting and O(n) to iterate through each interval
    Space Complexity - O(n) for output array
*/

const hasOverlapping = (interval1, interval2) => {
    if (interval2[0] <= interval1[1] || interval2[1] <= interval1[1]) {
        return true;
    }
}

const getMergedInterval = (interval1, interval2) => {
    return [
        interval1[0] < interval2[0] ? interval1[0] : interval2[0],
        interval1[1] > interval2[1] ? interval1[1] : interval2[1]
    ]
}

var merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals = intervals.sort((a, b) => { // have to sort intervals in order to compare next
        return a[0] - b[0];
    });
    let output = [];
    let currentInterval = [];
    for (let i = 0; i < intervals.length; i++) {
        currentInterval = currentInterval.length ? currentInterval : intervals[i];
        if (i < intervals.length - 1 && hasOverlapping(currentInterval, intervals[i + 1])) {
            currentInterval = getMergedInterval(currentInterval, intervals[i + 1]);
        } else {
            output.push(currentInterval);
            currentInterval = [];
        }
    }
    return output;
};
