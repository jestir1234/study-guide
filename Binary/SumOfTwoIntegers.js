/*

    371. Sum of Two Integers

    Calculate the sum of two integers a and b, but you are not allowed to use the operator + and - .

    Example 1:
    Input: a = 1, b = 2
    Output: 3

    Example 2:
    Input: a = -2, b = 3
    Output: 1
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */


 /* 
 Remember base 2  
 2^0 = 1
 2^1 = 2
 2^2 = 4
 2^3 = 8
 2^4 = 16
 2^5 = 32

 We need to perform bitwise operations - https://www.youtube.com/watch?v=qq64FrA2UXQ

 '&' is to determine the carry between two bits. For example 3 + 1. 3 in bits is 011 and 1 is 001:
 011
 001
 ---
 001 because both values have to be true and 1 and 1 are both true so the carry is one.

'^' or XoR is to perform "addition" on the two bits. For example 3 + 1. 3 in bits is 011 and 1 is 001:
011
001
---
010 here 1 + 1 is 2 in bits so 010 so you put "0" in the first position.

'<<' is to shift the bits left. So 1 << 1 is shifting 001 by 1 position so 010 which is 2.

In order to perform a complete addition operation, we have to first determine the carries like in normal addition with "&".
Then we perform the addition with "^" between the carries shifted left by 1 and the added value. For example if we want to add 
1 and 3, 001 and 011:
    1. We find the carry first with 1 & 3 = 001
    2. We shift 001 by 1 so (1 & 3) << 1
    3. We perform the addition with XoR, (1 ^ 3) and "&" again with the carry to find any more carries (1 ^ 3) & ((1 & 3) << 1)
    4. In this solution we use recursion. So if there are no more carries (b) then the final sum is a.
 */ 


var getSum = function (a, b) {
    if (b === 0) {
        return a;
    }

    return getSum((a ^ b), (a & b) << 1);
};