/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // let sorted_s = s.split('').sort().join('')
    // let sorted_t = t.split('').sort().join('')

    // if (sorted_s === sorted_t) return true
    // return false

    if (s.length !== t.length) return false

    /*to track the frequency of each char in string s
     - frequency  - of each character refers to how many
    times each character appears in a given string.*/
    let count =  new Map();

    for (let char of s) {
        count.set(char, (count.get(char) || 0)+ 1)
    }

    for (let char of t) {
        if (!count.has(char)) return false
        count.set(char, count.get(char) - 1)
        if (count.get(char) === 0) count.delete(char)
    }

    return count.size === 0;
};