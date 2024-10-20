`

`


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0
    for(let i=0;i<32;i++){
        let lastBit = n&1
        let revBit = lastBit<<(31-i)
        result=result|revBit
        n=n>>>1
    }
    return result>>>0
};  