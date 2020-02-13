/*

    190. Reverse Bits

    Reverse bits of a given 32 bits unsigned integer.



    Example 1:

    Input: 00000010100101000001111010011100
    Output: 00111001011110000010100101000000
    Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
    
    Example 2:
    Input: 11111111111111111111111111111101
    Output: 10111111111111111111111111111111
    Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.


    Note:
    Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
    In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above the input represents the signed integer -3 and the output represents the signed integer -1073741825.

    original: https://leetcode.com/problems/reverse-bits/
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

 /* 
    The idea is to initialize your result at 0. Loop through 32 bits because we know n has 32 bits.
    We left shift the result and set the new result, and if the least significant digit for n is 1 we add it to result.
    We right shift n and set the new n.
    Continue.
 */
var reverseBits = function (n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = result << 1;
        if (n & 1 === 1) {
            result += 1;
        }
        n = n >>> 1;
    }
    return result >>> 0;
};

/*
    Example: n = 13 (1101)

    First loop:
        result = 0 (0);

        shift result left (result << 1);

        result = 0;

        (13 & 1) === 1 so add 1

        result = 1;

        shift n right (13 >>> 1)

        n = 6 (110)
    
    Second loop:
        result = 1 (1);

        shift result left (result << 1);

        result = 2 (10); 

        (6 & 1) === 0 so skip

        result = 2 (10);

        shift n right (6 >>> 1);

        n = 3 (11);

    Third Loop:
        result = 2 (10);

        shift result left (result << 1);

        result = 4 (100);

        (3 & 1) === 1 so add 1;

        result = 5 (101);

        shift n right (3 >>> 1);

        n = 1;

    Fourth Loop:
        result = 5 (101);

        shift result left (result << 1);

        result = 10 (1010);

        (1 & 1 === 1) so add 1;

        result = 21 (1011)

        shift n right (1 >>> 1);

        n = 0;

    The rest of the 28 loops will be 0 so the final value for result will be 
    
    2952790016 (10110000000000000000000000000000)
*/
