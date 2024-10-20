`
Через & сравниваем с 1 и увеличиваем каунтер а потом сдвигаем на 1 бит вправо и повторяем
The operation n & 1 specifically checks only the last bit (least significant bit) of the number n
`

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    while(n){
        if(n&1===1){
            count++;
        }
        n=n>>>1
    }
    return count
};