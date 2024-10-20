`   
Самое эффективное решение - это решение с проверкой на остаток от деления на 2
Если остатка нет, то есть число степень двойки, то и бит будет 1 (либо 0 у первого)
`

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = []
    for (let i=0; i<=n; i++){
        let num = i
        let numOnes = 0
        while(num!=0){
            if(num&1===1){
                numOnes++
            }
            num=num>>>1
        }
        ans.push(numOnes)
    }
    return ans
};

console.log(countBits(2))
console.log(countBits(5))


`
const result = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result[i] = result[i / 2];
        } else {
            result[i] = result[Math.floor(i / 2)] + 1;
        }
    }
    return result;
`