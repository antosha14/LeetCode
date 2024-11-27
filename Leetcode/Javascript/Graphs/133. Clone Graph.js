`
Рекурсия. Основная функция в качестве обёртки которая возвращает другую функцию, которая возвращает копию параллельно её создавая и вызывает себя же на соседей

Мапа для хранения оригиналов как ключей, и их копий как значений
`

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    let map = new Map();

    function traverse(node) {
        if (node == null) return null;

        if (!map.has(node.val)) {
            map.set(node.val, new Node(
                node.val));
            map.get(node.val).neighbors = node.neighbors.map(traverse);
        }

        return map.get(node.val);
    }

    return traverse(node);
};