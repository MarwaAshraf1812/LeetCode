/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let is_found = false;

    for(let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (is_found) break;
        }else {
            is_found = true;
            count++;
        }
    }
    return count;
};