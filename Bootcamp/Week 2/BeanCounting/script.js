console.log(countBs("BBBBBBBBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

/**
 *
 * @param word
 * @param letter
 * @returns {number}
 */
function countChar(word, letter) {
    let counter = 0;
    for (let i = 0; i <= word.length; i++){
        if (word.charAt(i) === letter){
            counter ++;
        }
    }
    return counter;
}

/**
 *
 * @param word
 * @returns {number}
 */
function countBs(word) {
    let counter = 0;
    for (let i = 0; i <= word.length; i++){
        if (word.charAt(i) === 'B'){
            counter ++;
        }
    }
    return counter;
}
