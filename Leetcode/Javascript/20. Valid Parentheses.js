`
Stack, добавляем наверх открытие и через pop сравниваем норм ли скобки закрываются
`

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let parMap = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    for(let letter of s){
        if(letter=='('||letter=='{'||letter=='['){
            stack.push(letter)
        }
        if(letter==')'||letter=='}'||letter==']'){
            if(parMap[letter]!==stack.pop()){
                return false
            }
        }
    }
    return stack.length===0
};