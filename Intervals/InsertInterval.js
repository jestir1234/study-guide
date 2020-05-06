/*  
    57. Insert Interval
    Hard

    1420

    164

    Add to List

    Share
    Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

    You may assume that the intervals were initially sorted according to their start times.

    Example 1:

    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
    Output: [[1,5],[6,9]]
    Example 2:

    Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
    Output: [[1,2],[3,10],[12,16]]
    Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

    source: https://leetcode.com/problems/insert-interval/
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */


/*
    Solution - Insert, sort, iterate and compare

    Same solution as merge interval except you insert the new interval in the beginning;

*/

const hasOverlap = (interval1, interval2) => {
    if (interval2[0] <= interval1[1] || interval2[1] <= interval1[1]) {
        return true;
    }
}

const mergeIntervals = (interval1, interval2) => {
    return [
        interval1[0] < interval2[0] ? interval1[0] : interval2[0],
        interval1[1] > interval2[1] ? interval1[1] : interval2[1]
    ]
}

var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    let currentInterval = [];
    for (let i = 0; i < intervals.length; i++) {
        currentInterval = currentInterval.length ? currentInterval : intervals[i];

        if (i < intervals.length - 1 && hasOverlap(currentInterval, intervals[i + 1])) {
            currentInterval = mergeIntervals(currentInterval, intervals[i + 1]);
        } else {
            result.push(currentInterval);
            currentInterval = [];
        }
    }
    return result;
};