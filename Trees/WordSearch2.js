  /*  
    212. Word Search II
    Hard

    2029

    96

    Add to List

    Share
    Given a 2D board and a list of words from the dictionary, find all words in the board.

    Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

    

    Example:

    Input: 
    board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
    ]
    words = ["oath","pea","eat","rain"]

    Output: ["eat","oath"]
    

    Note:

    All inputs are consist of lowercase letters a-z.
    The values of words are distinct.

    Source: https: //leetcode.com/problems/word-search-ii/
*/  

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

/*
    Solution - Back tracing with a modified Trie data structure

    1. Create a modified Trie where instead of the boolean "isWord" we use "word" and save the original inserted word
       to the leaf node of that path.
        
    2. Insert all the provided words into our Trie

    3. Now we iterate through our matrix and at each cell and look up each letter in our Trie.
        - If the letter doesn't exist in our Trie's map we return;
        - If the trie is assigned a word - we add it to our Set
        - Otherwise we continue tracing down the top, right, bottom, and left paths
    
    4. For the solution return an Array from our Set (which was used to ensure unique values)

*/

class Trie {
    constructor(val) {
        this.map = {};
        this.word = null;
    }

    insert(word, original) {
        if (!word) return;

        if (!this.map[word[0]]) {
            this.map[word[0]] = new Trie();
        }

        if (word.length === 1) {
            this.map[word].word = original;
        } else {
            this.map[word[0]].insert(word.slice(1), original);
        }
    }
}

var findWords = function (board, words) {
    let trie = new Trie();
    let output = new Set();
    for (let i = 0; i < words.length; i++) { // Build our Trie
        trie.insert(words[i], words[i]);
    }

    const traceBoard = (trie, col, row) => {
        if (row < 0 || row > board.length - 1 || col < 0 || col > board[row].length - 1 || !trie.map[board[row][col]]) return;

        if (trie.map[board[row][col]].word) {
            output.add(trie.map[board[row][col]].word);
        }

        let temp = board[row][col]; // Save our cell to a temp variable
        board[row][col] = null; // Set null here to prevent visiting the same cell in child paths

        traceBoard(trie.map[temp], col, row - 1);
        traceBoard(trie.map[temp], col + 1, row);
        traceBoard(trie.map[temp], col, row + 1);
        traceBoard(trie.map[temp], col - 1, row);

        board[row][col] = temp; // Reassign the value here after we have traced all possible child paths
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            traceBoard(trie, col, row)
        }
    }

    return Array.from(output);
};