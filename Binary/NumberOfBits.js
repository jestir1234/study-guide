/* 

    191. Number of 1 Bits

    Write a
    function that takes an unsigned integer and
    return the number of '1'
    bits it has(also known as the Hamming weight).



    Example 1:

    Input: 00000000000000000000000000001011
    Output: 3
    Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1'
    bits.
    
    Example 2:

    Input: 00000000000000000000000010000000
    Output: 1
    Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1'
    bit.

    Example 3:

    Input: 11111111111111111111111111111101
    Output: 31
    Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1'
    bits.

*/

/*
    For this problem we need to check the least significant bit of n by performing logical AND against 1 (001).
    If the AND operation yields 1, we know 1 & 1 = 1 so we count a 1 bit. We then 
    shift the bits right and set n to equal that number. We continue our search and shift again. Continue until n is 0.
    For example: 
        1. 11 is 1011 
        2. 1011 & 001 or (11 & 1) is equal to 1 because they both have 1 as the least significant bit so we count++ for the 1 bit.
        3. Shift right and set n equal to that number. 11 = 11 >>> 1
        4. After the shift we have 101 (5), and we do it again 5 & 1 = 1, so we count++ for the 1 bit.
        5. Shift again and we have 10 (2), no count because 2 & 1 = 0.
        6. Shift again and we have 1 (1), so we count++
        7. Total count is 3
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let bits = 0;
    while (n !== 0){
        if (n & 1 === 1){
            bits++;
        }
        
        n = n >>> 1;
    }
    return bits;
};