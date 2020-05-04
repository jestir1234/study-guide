 /*   
    208. Implement Trie (Prefix Tree)
    Medium

    2606

    46

    Add to List

    Share
    Implement a trie with insert, search, and startsWith methods.

    Example:

    Trie trie = new Trie();

    trie.insert("apple");
    trie.search("apple");   // returns true
    trie.search("app");     // returns false
    trie.startsWith("app"); // returns true
    trie.insert("app");   
    trie.search("app");     // returns true
    Note:

    You may assume that all inputs are consist of lowercase letters a-z.
    All inputs are guaranteed to be non-empty strings.

    Source: https://leetcode.com/problems/implement-trie-prefix-tree/
*/

/**
 * Initialize your data structure here.
 */

var Trie = function () {
    this.map = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */

/*
    Solution

    Trie is an efficient information reTrieval data structure. 
    Using Trie, search complexities can be brought to optimal limit(key length).
    If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N, 
    where M is maximum string length and N is number of keys in tree.
    Using Trie, we can search the key in O(M) time. However the penalty is on Trie storage requirements

*/
Trie.prototype.insert = function (word) {
    if (!word) {
        return;
    }
    let char = word[0];
    if (!this.map[char]) {
        this.map[char] = new Trie();
    }
    if (word.length === 1) {
        this.map[char].isWord = true;
    } else {
        this.map[char].insert(word.slice(1));
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let char = word[0];
    if (!this.map[word[0]]) {
        return false;
    }

    if (word.length === 1) {
        return !!this.map[char].isWord;
    }

    return this.map[char].search(word.slice(1));

};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let char = prefix[0];
    if (!char) {
        return true;
    }
    if (this.map[char]) {
        return this.map[char].startsWith(prefix.slice(1));
    }
    return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */