`
Более изящное, проверить на длинну, если разная сразу вернуть false
Сложить с самим собой и вернуть результат includes. 2 стринга вместе будут иметь все возможные комбинации
`

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    const doubledGoal = goal + goal;
    return doubledGoal.includes(s);   
};