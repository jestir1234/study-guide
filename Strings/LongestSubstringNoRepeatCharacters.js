/*
3. Longest Substring Without Repeating Characters
Medium

8049

492

Add to List

Share
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

 /*
    Naive Brute Force approach
    Time Complexity O(n^3) 
    Space Complexity O(min(m, n))
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) {
        return s.length;
    }

    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        let currentString = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (currentString.includes(s[j])) {
                longest = currentString.length > longest ? currentString.length : longest;
                break;
            } else {
                currentString += s[j];
                longest = currentString.length > longest ? currentString.length : longest;
            }
        }
    }

    return longest;
};

/*
    Solution - Sliding Window

    Have two pointers and increment "end" to create a "window". Saving accumulated chars in a Set along the way.

    If a repeat is found at s[end], remove characters from Set[start] and increment "start" until you have removed the repeat

    Keep track of the longest substring by taking the Max of the current longest with end - start.
    
/*

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    
    let longest = 0;
    let dict = new Set();
    let start = 0;
    let end = 0;
    
    while (start < s.length && end < s.length){
        if (!dict.has(s[end])){
            dict.add(s[end]);
            end++;
            longest = Math.max(longest, end - start);
        } else {
            dict.delete(s[start]);
            start++;
        }
    }
    
    return longest;
};