`
Массив и в нём собираем подходящие буквы, потому что не учитываем 10 в ряд, в первоначальной идее
НО МОЖНО ТАКЖЕ ЧЕРЕЗ СИМВОЛЫ, НО НУЖНО СМОТРЕТЬ ИМЕННО НА ПРЕДЫДУЩИЕ СИМВОЛЫ
Самое быстрое решение - решение через регулярку

s.replace(/([a-zA-Z])\1{2,}/g, "$1$1");
`

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let ans = []
    for(let i=0;i<s.length;i++){
        if(ans.length<2||ans.at(-1)!==s[i]||ans.at(-2)!==s[i]){
            ans.push(s[i])
        }
    }
    return ans.join("")
};

console.log(makeFancyString('leeetcode'))
console.log(makeFancyString('aaabaaaa'))
console.log(makeFancyString('aab'))

const nya = new RegExp("(.)\\1{2,}", 'g');
return s.replace(nya, "$1$1");