/* 1143. Longest Common Subsequence
Medium

622

11

Add to List

Share
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

 

If there is no common subsequence, return 0.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

source: https://leetcode.com/problems/longest-common-subsequence/
guide: https: //www.youtube.com/watch?v=ASoaQq66foQ
*/

/* 
The idea of this problem is to create a dpTable which represents the recursive bottom up solutions
for every single string comparison between the two strings. If text1[i] === text2[j] then we can
reduce both strings by the common character.
    ex: 'ace' and 'abcde'
    
    - "a" === "a" so we reduce down to 'ce' and 'bcde'
    - we now call 1 + longestCommonSubsequence('ce', 'bcde'), with 1 being the common sequence we found

    Continuining on with this approach we break down the problem to its simplest solution and base case.
    - eventually we get to longestCommonSubsequence("", "de"), and when there is an empty string we know we can return 0

    The dpTable is built from the bottom up and we know the base case of longestCommonSubsequence("", "") = 0;
    We also know the base case of longestCommonSubsequence("", "anyString") = 0; Thus we have the default table below

       "" A C E
    "" 0  0 0 0
    A  0  
    B  0
    C  0
    D  0
    E  0

    We can then begin filling in the table, while leveraging the previously found solutions from previous recursive call 
    represented by dpTable[row - 1][col - 1].

    When text1[i] === text[j] we can add 1 + the previous recursive call so for "a" and "a" we fill in 1 + 0
       "" A C E
    "" 0  0 0 0
    A  0  1
    B  0
    C  0
    D  0
    E  0

    When text1[i] !== text[j] we take the MAX of each recursive call when one character is removed so for example 
    "a" !== c so we take Max(longestCommonSubsequence("abcde", "ace"), longestCommonSubsequence("abcde", "ce")) which is 1;
    We can continue on with this method until the table is filled out.
       "" A C E
    "" 0  0 0 0
    A  0  1 1 1
    B  0  1 1 1
    C  0  1 2 2
    D  0  1 2 2
    E  0  1 2 3
*/

var longestCommonSubsequence = function (text1, text2) {
    let dpTable = createDpTable(text1, text2);
    for (let row = 0; row < text1.length + 1; row++) {
        for (let col = 0; col < text2.length + 1; col++) {
            if (row === 0 || col === 0) {
                dpTable[row][col] = 0;
                continue;
            }
            if (text1[row - 1] === text2[col - 1]) {
                dpTable[row][col] = 1 + dpTable[row - 1][col - 1];
            } else {
                dpTable[row][col] = Math.max(dpTable[row - 1][col], dpTable[row][col - 1]);
            }
        }
    }

    return dpTable[dpTable.length - 1][text2.length];
};

const createDpTable = (text1, text2) => {
    let dp = Array.from(new Array(text1.length + 1));
    return dp.map(row => new Array(text2.length + 1).fill(0))
}
