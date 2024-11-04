`
Optimal solution
2 цикла, внутренний инкрементирует каунт и текущий индекс пока буквы равны и меньше 9
Во внешнем живёт каунт и после внутреннего добавляется результат, а в конце i приравнивается к кол-ву букв, которые прошёл внутренний цикл
`

`
class Solution:
  def compressedString(self, word: str) -> str:
    n = len(word)
    ans = []
    i = 0
    j = 0

    while i < n:
      count = 0
      while j < n and word[j] == word[i] and count < 9:
        j += 1
        count += 1
      ans.append(str(count) + word[i])
      i = j

    return ''.join(ans)
`

`My solution`
/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = ''
    let curAmount = 0
    let curLetter = ''
    for(let i=0; i<word.length;i++){
        if(word[i]==curLetter||curLetter==''){
            curLetter=word[i]
            curAmount+=1
        } else{
            if(curAmount!=0){
                comp+=`${curAmount}${curLetter}`
            }
            curLetter=word[i]
            curAmount=1
        }
        if(curAmount==9){
            comp+=`9${curLetter}`
            curLetter=''
            curAmount = 0
        }

        if(i==word.length-1&&curAmount!=0){
            comp+=`${curAmount}${curLetter}`
        }
    }
    return comp
};

console.log(compressedString("abcde"))
console.log(compressedString("aaaaaaaaaaaaaabbbbbbbbb"))
console.log(compressedString("a"))