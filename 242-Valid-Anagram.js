/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sorted_s = s.split('').sort().join('')
    let sorted_t = t.split('').sort().join('')

    if (sorted_s === sorted_t) return true
    return false
};