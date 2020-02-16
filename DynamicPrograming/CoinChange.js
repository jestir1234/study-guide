/*

    322. Coin Change

    You are given coins of different denominations and a total amount of money amount.Write a
    function to compute the fewest number of coins that you need to make up that amount.
    If that amount of money cannot be made up by any combination of the coins, return -1.

    Example 1:

    Input: coins = [1, 2, 5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1


    Example 2:

    Input: coins = [2], amount = 3
    Output: -1

    Note:
    You may assume that you have an infinite number of each kind of coin.

*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*

    Bottom up dp table solution.

    The idea is to find the solution to the target amount by finding and leveraging the answers for 
    all sub problems (0 to n). At each target amount n, we use the previously calculated minimum coins 
    at n - coin, where we need to loop through all coins to find the minimum number of coins. We add (n - coin) + 1
    for the assigned dp value at current target amount n because n - coin represents the additional 1 coin that is added
    from n - coin to get to our current target.

        For example[1, 2, 5] | target 11: we build a dpTable [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3];
*/
var coinChange = function (coins, amount) {
    let dpTable = new Array(amount + 1).fill(amount + 1);

    dpTable[0] = 0;

    for (let i = 1; i < dpTable.length; i++) {
        for (let c = 0; c < coins.length; c++) {
            let coin = coins[c];
            if (coin <= i) {
                dpTable[i] = Math.min(dpTable[i - coin] + 1, dpTable[i]);
            }
        }
    }
    return dpTable[amount] === amount + 1 ? -1 : dpTable[amount];
};
