/*
   20. Valid Parentheses
    Easy

    4317

    202

    Add to List

    Share
    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:

    Input: "()"
    Output: true
    Example 2:

    Input: "()[]{}"
    Output: true
    Example 3:

    Input: "(]"
    Output: false
    Example 4:

    Input: "([)]"
    Output: false
    Example 5:

    Input: "{[]}"
    Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 1) {
        return false;
    }
    let open = ['(', '[', '{'];
    let close = [')', ']', '}'];
    let stack = [];
    let valid = true;
    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        }

        if (close.includes(s[i])) {
            let charIdx = close.findIndex(val => val === s[i]);
            if (stack[stack.length - 1] === open[charIdx]) {
                stack.pop();
            } else {
                valid = false;
                break;
            }
        }
    }
    return valid && stack.length === 0;
};