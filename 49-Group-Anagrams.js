/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Initialize an empty object map to store grouped anagrams.
    const map = {};

    // Use forEach to iterate through each string str in the input array strs.
    strs.forEach(str => {
        //  Sort the characters of str using split, sort, and join methods to get sortedStr.
        const sortedStr = str.split('').sort().join('');

        // Check if sortedStr exists as a key in the map. If not
        if(!map[sortedStr]) {
            map[sortedStr] = []; // initialize it with an empty array
        }

        // Push the original string str into the array corresponding to sortedStr in the map.
        map[sortedStr].push(str);
    });

    // Convert the values of map into an array using Object.values(map) and return it as the final grouped anagrams.
    return Object.values(map);
};