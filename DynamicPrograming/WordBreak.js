/* Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false


source: https: //leetcode.com/problems/word-break/
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


/* 

Recursive Method

    1. Loop through string sizes "len" (0 to string.length)
    2. Loop through all string indices to check each substring "str"
    3. Check for substring "str" in "wordDict"
        - if false break and continue onto the next string size "len". 
          End recursive call completely and return false if len === s.length (meaning no substring of length "len" exists in wordDict)
        
        - if it exists (true), we need to recursively call wordBreak on string - "str" (the rest of the string). 
          For example "leetcode", we find "leet" in "wordDict" so we need to call wordBreak("code").
          If the recursive call returns true, we can break completely from the loops and return true

    4. Optimization and base case
        - We use a memo hash to cache our results from each recursive call and return the cached results when available
        - If the length of string "s" for the current recursive is less than the smallest string in wordDict we can return false
            example: 'ca', ['cats', 'cat'] return false
        - If string "s" exists in wordDict we can return true.

*/
var wordBreak = function(s, wordDict, memo = {}) {
    if (memo[s] !== undefined) return memo[s];
    
    const minLength = Math.min(...wordDict.map(word => word.length));
    
    if (s.length < minLength) return false;

    if (wordDict.includes(s)) return true;
  
    let result = true;
    for (let len = 1; len < s.length + 1; len++){
        let i = 0;
        while (i < s.length){
            let str = s.slice(i, i + len);
            let remain = s.slice(i + len);
            if (wordDict.includes(str)){
                memo[remain] = wordBreak(remain, wordDict, memo);
                result = memo[remain];
                if (memo[remain]){
                  len = s.length;
                }
                break;
            } else {
                if (len === s.length){
                  result = false;
                }
                break;
            }
            i++;
        }
    }
    return result
};