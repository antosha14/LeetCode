"Стартуем с пустого набора нодов далее помещаем сам же класс по индексу, которому соответствует буква. И далее меняем текущий нод на этот вновь созданный инстанс класса используя индекс"

"Можно оптимизировать через использование объчных объектов вместо массива. Конец можно проставить символом и проверить его наличие через in"
# Initialize the root of the trie with 26 children for each letter of the alphabet.
# A boolean flag to check if the node represents the end of a word.


# Map character to trie node index.
# Create a new node if none exists.
# Mark the end of the word.


# Word is found if we found a node where the prefix ends and is_end_of_word is True.
# If we found a node, the prefix exists in the trie.


# Map character to trie node index.
# If a node doesn't exist for a character, return None.
# Return either the node that represents the prefix or None.
class Trie:
    def __init__(self):
        self.children = [None] * 26
        self.is_end_of_word = False

    def insert(self, word: str) -> None:
        """Inserts a word into the trie."""
        node = self
        for char in word:
            index = ord(char) - ord("a")
            if node.children[index] is None:
                node.children[index] = Trie()
            node = node.children[index]
        node.is_end_of_word = True

    def search(self, word: str) -> bool:
        """Searches for a word in the trie."""
        node = self._search_prefix(word)
        return node is not None and node.is_end_of_word

    def startsWith(self, prefix: str) -> bool:
        """Returns if there is any word in the trie that starts with the given prefix."""
        node = self._search_prefix(prefix)
        return node is not None

    def _search_prefix(self, prefix: str):
        """Searches for a node in the trie that represents the given prefix."""
        node = self
        for char in prefix:
            index = ord(char) - ord("a")
            if node.children[index] is None:
                return None
            node = node.children[index]
        return node


"Оптимальное решение"


class Trie2:
    def __init__(self):
        self.root = {}

    def insert(self, word: str) -> None:
        cur = self.root
        for letter in word:
            if letter not in cur:
                cur[letter] = {}
            cur = cur[letter]

        cur["*"] = ""

    def search(self, word: str) -> bool:
        cur = self.root
        for letter in word:
            if letter not in cur:
                return False
            cur = cur[letter]

        return "*" in cur

    def startsWith(self, prefix: str) -> bool:
        cur = self.root
        for letter in prefix:
            if letter not in cur:
                return False
            cur = cur[letter]

        return True
