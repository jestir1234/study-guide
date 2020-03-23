/* 
    424. Longest Repeating Character Replacement
    Medium

    972

    64

    Add to List

    Share
    Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

    In one operation, you can choose any character of the string and change it to any other uppercase English character.

    Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

    Note:
    Both the string's length and k will not exceed 104.

    Example 1:

    Input:
    s = "ABAB", k = 2

    Output:
    4

    Explanation:
    Replace the two 'A's with two 'B's or vice versa.
    

    Example 2:

    Input:
    s = "AABABBA", k = 1

    Output:
    4

    Explanation:
    Replace the one 'A' in the middle with 'B' and form "AABBBBA".
    The substring "BBBB" has the longest repeating letters, which is 4.
*/

/*
    Solution - Sliding Window

    The idea is to track the letter counts with a hash, and create a sliding window using left and right.
    
    Expand right out until you've exhausted k replacements, meaning the length of your current window 
    minus the maximum count you have is greater than k. 
        ie: (right - left + 1) - Max(s[right], max) > k

    At this point, you slide the window forward by one and decrement s[left]-- to subtract the letter you just shifted away from.
    Continue this approach until you have reached the end while keeping track of the longest length.

    Time Complexity : O(n)
    Space Complexity: O(n)
/*

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const hash = {};
    let left = 0;
    let longest = 0;
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        hash[s[right]] = hash[s[right]] + 1 || 1;
        max = Math.max(hash[s[right]], max);

        let length = right - left + 1;
        if (length - max > k) {
            hash[s[left]]--;
            left++;
        } else {
            longest = length;
        }
    }
    return longest;
};