 /*
    647. Palindromic Substrings
    Medium

    2123

    101

    Add to List

    Share
    Given a string, your task is to count how many palindromic substrings in this string.

    The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

    Example 1:

    Input: "abc"
    Output: 3
    Explanation: Three palindromic strings: "a", "b", "c".
    

    Example 2:

    Input: "aaa"
    Output: 6
    Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
    

    Note:

    The input string length won't exceed 1000.
    
*/

/*
    Solution - variation of expanding window

    - Loop through each index and at each index expand a palindrome window for both a single and double midpoint
    - track palindromes with counter that increments every loop that satisfies the condition
    - Add to tallying total in original function call and return at the end

    Time Complexity - O(n^2)
        - Looping through n indices
        - At each index, expand window to maximum n length
    
    Space Complexity - O(1)
        - We pass s to function expandFromMid and return a constant "count" for single and double
        - total is a constant
        - thus our entire function uses constant memory
/*


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let single = expandFromMid(s, i, i);
        let double = expandFromMid(s, i, i + 1);
        total += (single + double);
    }

    return total;
};

const expandFromMid = (s, left, right) => {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    return count;
}