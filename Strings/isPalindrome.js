/*
    125. Valid Palindrome
    Easy

    955

    2588

    Add to List

    Share
    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    Note: For the purpose of this problem, we define empty string as valid palindrome.

    Example 1:

    Input: "A man, a plan, a canal: Panama"
    Output: true
    Example 2:

    Input: "race a car"
    Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s.length){
        return true;
    }
    let isValid = true;
    let left = 0;
    let right = s.length - 1;
    let reg = /^[a-zA-Z0-9]+$/;
    let string = s.toLowerCase();

    while (left < right){
        if (!reg.test(string[left])){
            left++;
            continue;
        }
        if (!reg.test(string[right])){
            right--;
            continue;
        }
        
        if (string[left]!== string[right]){
            isValid = false;
            break;
        } else {
            left++;
            right--;  
        }
    }

    
    return isValid;
};