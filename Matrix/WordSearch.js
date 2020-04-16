/*
    79. Word Search
    Medium

    3040

    155

    Add to List

    Share
    Given a 2D board and a word, find if the word exists in the grid.

    The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

    Example:

    board =
    [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
    ]

    Given word = "ABCCED", return true.
    Given word = "SEE", return true.
    Given word = "ABCB", return false.
    

    Constraints:

    board and word consists only of lowercase and uppercase English letters.
    1 <= board.length <= 200
    1 <= board[i].length <= 200
    1 <= word.length <= 10^3

    source: https: //leetcode.com/problems/word-search/
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


/*
    Solution - DFS each cell

    - For each cell in the matrix run a DFS search starting with the first char in word

    - Return false if the char doesn't match the cell or if the boundaries of the coordinates have gone outside the matrix

    - If there is a match, we continue our search for the next character in the 4 adjacent cells 

    - We don't want to double count the cells we already visited so we mark the ones we have found 
      by setting the cell to null for the subsequent searches down that path. However, we need to save that cell
      for different DFS paths so we save it to a temp variable and reassign it after the DFS searches
    
    - Once we have found all chars in word as indicated by the incrementing i we can return true.

    - If any of the DFS searches return true we can exit the loop and return from the function. 

    
*/

var exist = function(board, word) {
    if (!word.length) {
        return true;
    }
    let found = false;
    let i = 0;
    
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[row].length; col++){
            if (traceWord(row, col, i, board, word)){ // If the DFS search returns true we can exit
                return true;
            }
        }
    }
    return found;
};


const traceWord = (row, col, i, board, word) => {
    // Set criteria for returning false - out of bounds or char is not found in cell
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[i]) { 
        return false;
    }
    
    // If our DFS has found all chars in word we can return true;
    if (i === word.length - 1) {
        return true;
    }
    
    // Save current cell value to temp 
    let temp = board[row][col];
    
    // Mark cell empty because we don't want to double count it in lower searches
    board[row][col] = '';
    
    // Continue our search for the next char in adjacent cells, incrementing i for the next char in word
    let found = traceWord(row - 1, col, i + 1, board, word) || 
        traceWord(row, col + 1, i + 1, board, word) || 
        traceWord(row + 1, col, i + 1, board, word) || 
        traceWord(row, col - 1, i + 1, board, word);
    
    // Restore cell value for future searches along different paths
    board[row][col] = temp;
    
    return found
    
}

