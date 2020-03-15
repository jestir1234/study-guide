/* 

91. Decode Ways
Medium

2166

2415

Add to List

Share
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Source - https: //leetcode.com/problems/decode-ways/
*/

/**
 * @param {string} s
 * @return {number}
 */

/*
    Solution - Bottom Up approach

    The idea is to build a dp array of all the agrregate combinations at each length up to s.length;
    
    - We start with a base case of string "s" with length 0:
        - Fill dp[0] = 1 because any future string added to it will add 1.
        - Fill dp[1] = 1 because any string length 1 will have 1 mapping at least
    
    - We move up the string and at each index "i":
            We sliced the single digit string at "i", and if it has a mapping (not "0"), we add dp[i-1] to d[i]
            For example with the following filled dp array:
             0  2  2  6
            [1][1][2][i]
         
            We know know 6 is a valid mapping so the previous dp[i-1] (2) will carry forward when we add the 6:
             0  2  2  6
            [1][1][2][2]
                   x
            We also know 26 is a valid mapping so we add the previous dp[i-2] (1) to dp[i] to aggregate all the combos there.
             0  2  2  6
            [1][1][2][3]
                x   (2+1)
    
    - Continue until the dp array is filled and return the last element in the array.

    Time Complexity O(n) where n is the length of string s
    Space Complexity O(n) where n is the length of the dp array(s.length);
*/
var numDecodings = function (s) {
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === "0" ? 0 : 1;

    for (let i = 2; i < s.length + 1; i++) {
        const singleDigit = s.slice(i - 1, i);
        const doubleDigit = s.slice(i - 2, i);

        if (parseInt(singleDigit) > 0) {
            dp[i] += dp[i - 1];
        }

        if (parseInt(doubleDigit) >= 10 && parseInt(doubleDigit) <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp.pop();
};
