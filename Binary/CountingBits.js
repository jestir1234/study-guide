/* 

    338. Counting Bits

    Given a non negative integer number num.For every numbers i in the range 0≤ i≤ num calculate the number of 1 's in their binary representation and return them as an array.

    Example 1:
    Input: 2
    Output: [0, 1, 1]

    Example 2:
    Input: 5
    Output: [0, 1, 1, 2, 1, 2]

*/

/**
 * @param {number} num
 * @return {number[]}
 */

// O(n * sizeOfInteger) solution
var countBits = function(num) {
    let result = [];
    let start = 0;
    while (start <= num) {
        result.push(calculateNumberOfOnes(start));
        start++;
    }
    return result;
};

const calculateNumberOfOnes = num => {
    let count = 0;
    while (num) {
        if (num & 1 === 1) {
            count++;
        }
        num = num >>> 1;
    }
    return count;
}

// O(n) time and space complexity implementation
/*
    Use bits of [i - 1] + 1 to find number of 1 bits for odd numbers
    Use bits of i / 2 to find number of 1 bits for even numbers
/*
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            result.push(0);
            continue;
        }

        if (i % 2 === 0) {
            const bitValue = result[i / 2];
            result.push(bitValue);
        } else {
            const bitValue = result[i - 1] + 1;
            result.push(bitValue);
        }
    }
    return result;
};


/*

    1 = 001  2^0
    2 = 010  2^1
    3 = 011 
    4 = 100  2^2
    5 = 101
    6 = 110
    7 = 111
    8 = 1000 2^2
    9 = 1001
    10 = 1010
    11 = 1011
    12 = 1100
    13 = 1101
    14 = 1110
    15 = 1111
    16 = 10000 2^3
    32 = 100000 2^4
    38 = 100110
    39 = 100111
*/
