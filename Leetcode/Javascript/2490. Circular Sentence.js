`
Edge case с одним словом
закрывай через ретёрн начало равно концу

Можно также по пробелу, проходиться по символам и для пробела сравнивать предыдущий и следубщий
`


/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let arr  = sentence.split(' ')
    for(let i = 1; i<=arr.length-1; i++){
        if(arr[i][0]!==arr[i-1].slice(-1)){
            return false
        }
    }
    return sentence[0] == sentence.slice(-1)
};

console.log(isCircularSentence("leetcode exercises sound delightful"))
console.log(isCircularSentence("eetcode"))
console.log(isCircularSentence("Leetcode is cool"))
