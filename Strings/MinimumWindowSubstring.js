/*
    76. Minimum Window Substring
    Hard

    3677

    258

    Add to List

    Share
    Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

    Example:

    Input: S = "ADOBECODEBANC", T = "ABC"
    Output: "BANC"
    Note:

    If there is no such window in S that covers all characters in T, return the empty string "".
    If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

*/



/*
    Solution - Sliding Window Variation "figured it out myself :D"

    s = "ADOBECODEBANC"
    t = "ABC"

    Create hash to keep track of letters in t.
    {
        a: 1,
        b: 1,
        c: 1
    }

    Create 'counter' variable to keep track of how many letters you need to find.

    Move 'right' pointer: 
        - decrement from the hash if you find a match
        - decrement from counter if you find a match AND ONLY if the current hash value is above 0 (don't want to count negatives)
    
    If and when counter becomes 0, set "result" to the current sliced string between left and right.
    
    Now we want to minimize the string by moving the 'left' pointer:
        - increment from the hash if you have a match (remember we're going to move the left pointer off this character)
        - increment counter if it's a match AND ONLY if the current hash value is above/equal to 0 (don't want to count negatives)
    
    Continue down the string
        - moving the right pointer if counter > 0 and less than s.length - 1 
        - moving the left pointer if counter === 0
            - saving the result of the sliced string if its shorter than the previous result
    
    Exit the loop if counter is greater than 0 and we have reached the end of the string on the right (no matches left to be found)
    
    Time Complexity O(n)
    Space Complexity O(n^2)

/*

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function(s, t) {
    let hash = t.split('').reduce((acc, val) => {
        acc[val] = acc[val] + 1 || 1;
        return acc;
    }, {});
    
    let left = 0;
    let right = 0;
    let counter = t.length;
    let res = '';
    
    while (left < s.length){
        let current = s.slice(left, right + 1);
        if (counter === 0){
            res = res.length ? (res.length < current.length ? res : current) : current;
            if (hash[s[left]] !== undefined){
                if (hash[s[left]] >= 0) counter++;
                hash[s[left]]++;
            }
            left++;
        } else {
            if (hash[s[right]] !== undefined){
                if (hash[s[right]] > 0) counter--;
                hash[s[right]]--;
            };  
        }
        
        if (counter > 0 && right < s.length - 1){
            right++;
        } else if (counter > 0 && right === s.length - 1){
          break;
        }
    }
    return res;

};

/*

    Solution below is optimized for speed and memory by eliminating the variable current and slice operation,
    replacing with index arithmetic and storing the indices in result as a tuple.

*/

var minWindow = function (s, t) {
    let hash = t.split('').reduce((acc, val) => {
        acc[val] = acc[val] + 1 || 1;
        return acc;
    }, {});

    let left = 0;
    let right = 0;
    let counter = t.length;
    let res = [];

    while (left < s.length) {
        if (counter === 0) {
            res = res.length ? (res[1] - res[0] < right + 1 - left ? res : [left, right + 1]) : [left, right + 1];
            if (hash[s[left]] !== undefined) {
                if (hash[s[left]] >= 0) counter++;
                hash[s[left]]++;
            }
            left++;
        } else {
            if (hash[s[right]] !== undefined) {
                if (hash[s[right]] > 0) counter--;
                hash[s[right]]--;
            };
        }

        if (counter > 0 && right < s.length - 1) {
            right++;
        } else if (counter > 0 && right === s.length - 1) {
            break;
        }
    }
    return res.length ? s.slice(res[0], res[1]) : '';

};