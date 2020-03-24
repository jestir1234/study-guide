/*
    49. Group Anagrams
    Medium

    2672

    154

    Add to List

    Share
    Given an array of strings, group anagrams together.

    Example:

    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
    ]
    Note:

    All inputs will be in lowercase.
    The order of your output does not matter.
*/

/*

    Solution - Hash

    - Keep a hash with the sorted string as the key
    - Add to the list if you encounter the sorted string again.

    Time Complexity O(n * k log(k))
    Space Complexity O(nk)
*/

var groupAnagrams = function (strs) {
    if (strs.length === 1) {
        return [strs];
    }

    let hash = {};

    for (let i = 0; i < strs.length; i++) {
        let currentGroup = [strs[i]];
        let sortedString = strs[i].split('').sort().join('');
        if (hash[sortedString]) {
            hash[sortedString].push(strs[i]);
        } else {
            hash[sortedString] = [strs[i]];
        }
    }
    return Object.values(hash);
};