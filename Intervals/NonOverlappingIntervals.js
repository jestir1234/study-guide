/*    
    435. Non-overlapping Intervals
    Medium

    876

    30

    Add to List

    Share
    Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

    

    Example 1:

    Input: [[1,2],[2,3],[3,4],[1,3]]
    Output: 1
    Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
    Example 2:

    Input: [[1,2],[1,2],[1,2]]
    Output: 2
    Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
    Example 3:

    Input: [[1,2],[2,3]]
    Output: 0
    Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
    

    Note:

    You may assume the interval's end point is always bigger than its start point.
    Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.


    source: https://leetcode.com/problems/non-overlapping-intervals/
    greedy algorithm explanation - https://www.reddit.com/r/explainlikeimfive/comments/42ijii/eli5what_is_a_greedy_algorithm/
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

/*
    Solution - greedy approach

    1. The idea is the sort the intervals by the end value in ascending order
    2. We can then use a greedy approach assigning a smallestEnd variable to the first interval and discarding (or counting)
       all intervals that overlap (their start value < the smallestEnd)
    3. If the intervals don't overlap we reassign the smallestEnd to the current interval
    4. Return the count of discarded intervals

    Time Complexity - O(n * logn) + O(n) for the sorting and the iteration
    Space Complexity - O(1) 
*/

var eraseOverlapIntervals = function (intervals) {
    if (intervals.length <= 1) {
        return 0;
    }
    let count = 0;
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let smallestEnd = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < smallestEnd) {
            count++;
        } else {
            smallestEnd = intervals[i][1];
        }

    }
    return count;
};