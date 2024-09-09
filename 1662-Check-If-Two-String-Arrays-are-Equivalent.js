/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let wor1 = word1.join("");
    let wor2 = word2.join("");

    return wor1 == wor2;
};