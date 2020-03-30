/*
    5. Longest Palindromic Substring
    Medium

    5771

    481

    Add to List

    Share
    Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

    Example 1:

    Input: "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.
    Example 2:

    Input: "cbbd"
    Output: "bb"

*/

/*
    Solution

    - Loop through and expand a window at each index

    - Need two while loops in expand function to capture a single midpoint or double midpoint ex ('aba') or ('bb');

    - While loops end when end/beginning of string is reached or palindrome is not satisfied

    - keep track of the longest string in original function and return
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    if (s.length <= 1) {
        return s;
    }

    let longest = '';
    for (let i = 0; i < s.length; i++) {
        let substring = expandFromMiddle(s, i);
        longest = longest.length > substring.length ? longest : substring;
    }

    return longest;
};


const expandFromMiddle = (s, pos) => {

    // First pass for single midpoint (ex: 'aba')
    let left = pos;
    let right = pos;

    let longest = s[pos];
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        longest = s.slice(left, right + 1);
        left--;
        right++;
    }
    left = pos;
    right = pos + 1;

    // Second pass for double midpoint (ex: 'bb')

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        let str = s.slice(left, right + 1);
        longest = longest.length > str.length ? longest : str;
        left--;
        right++;
    }

    return longest;
}