`Переменные:
1) let
2) var
3) const`
`Имя переменной должно содержать только буквы, цифры или символы $ и _.
Первый символ не должен быть цифрой.
Для «var» не существует блочной области видимости
Область видимости переменных var ограничивается либо функцией, либо, если переменная глобальная, то скриптом. Такие переменные доступны за пределами блока.
«var» допускает повторное объявление
Если блок кода находится внутри функции, то var становится локальной переменной в этой функции
«var» обрабатываются в начале запуска функции

if (true) {
  var test = true; // используем var вместо let
}

alert(test); // true, переменная существует вне блока if
Другими словами, переменные var считаются объявленными с самого начала исполнения функции вне зависимости от того, в каком месте функции реально находятся их объявления (при условии, что они не находятся во вложенной функции).
Это поведение называется «hoisting» (всплытие, поднятие), потому что все объявления переменных var «всплывают» в самый верх функции.
Объявления переменных «всплывают», но присваивания значений – нет.
В браузере глобальные функции и переменные, объявленные с помощью var (не let/const!), становятся свойствами глобального объекта
`

`
Виды циклов:
1) while
2) do while
3) for (;;;)
4) for ... in для перебора свойств объекта
5) for ... of  для перебора массивов и перебираемых объектов

`


`
Отличия use strict:
Можно создавать переменные простым присваиванием
`

`Типы переменных в js:
1) number
2) string
3) boolean
4) BigInt больше 2 в тепени 53 -1. создаём добавляя n в конце числа 
5) null(ссылка на несуществующий объект, ничего/пусто)
6) undefined (значение не было присвоено)
7) object
8) symbol - используется для создания уникальных идентификаторов в объектах
`

`Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN. Они тоже Number`

`
Модалки: alert, prompt, confirm
`

`
Преобразование типов: 
alert преобразует к строке
alert( "6" / "2" ); // 3, строки преобразуются в числа
Правила численного преобразования
undefined - NaN
null - 0
true - 1
false - 0
string - Пробельные символы (пробелы, знаки табуляции \t, знаки новой строки \n и т. п.) по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.
Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false
СТРОКА С НУЛЁМ ЭТО TRUE
При сумме строк в js, если хотя бы один операнд является строкой, то второй будет также преобразован в строку.
alert(2 + 2 + '1' ); // будет "41", а не "221" Так как операторы работают один за другим
ТОЛЬКО при ПЛЮСЕ, МИНУС И ОСТАЛЬНЫЕ КОНВЕРТЯТ В ЧИСЛА
alert( 6 - '2' ); // 4, '2' приводится к числу
alert( '6' / '2' ); // 3, оба операнда приводятся к числам
`

`
"" + 1 + 0 =  "10"
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" НЕ ОБРЕЗАЕТ ПРОБЕЛЫ
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN ЗАПОМНИ undefined + 1 = NaN undefined становится NaN после численного преобразования.
" \t \n" - 2 = -2 Так как знаки в стринге убираются при конвертации типов под капотом
`


`
Приоритет операторов
Если приоритет одинаковый, то порядок выполнения – слева направо.
У присваивания самый низкий приоритет
Присваивание возвращает значение, поэтому можно 
let c = 3 - (a = b + 1);
Инкремент/декремент можно применить только к переменной. Попытка использовать его на значении, типа 5++, приведёт к ошибке. (some++, some--)
++ и -- можно использовать после и до переменной,
Разница в том, что префиксная форма возвращзает новое значение, а постфиксная старое
`

`
Побитовые операции: 
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
`

`
При сравнении значений разных типов JavaScript приводит каждое из них к числу.
`

`
при строгом равенстве null and undefined не равны друг другу
при нестрогом Эти значения равны друг другу и не равны никаким другим значениям
При использовании математических операторов и других операторов сравнения < > <= >=
Значения null/undefined преобразуются к числам: null становится 0, а undefined – NaN.
`

`
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
ПОТОМУ ЧТО СРАВНЕНИЕ ПРЕОБРАЗУЮТ В ЧИСЛО А ПРИСВАИВАНИЕ использует спец правило С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому
`

`
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
На это есть следующие причины:
Сравнения (1) и (2) возвращают false, потому что undefined преобразуется в NaN, а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях.
Нестрогое равенство (3) возвращает false, потому что undefined равно только null, undefined и ничему больше.
`
`
Перепишите этот код используя операторы нулевого слияния и присваивания.
let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}
решение
let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;
`

`
Проверка в switch всегда строгая
`

`
Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться. (let переменная = function)
Function Declaration может быть вызвана раньше, чем она объявлена. (function переменная)
`

`ООП
Объект, объявленный как константа, может быть изменён
Иными словами, нет никаких ограничений к именам свойств. Они могут быть в виде строк или символов (специальный тип для идентификаторов, который будет рассмотрен позже).
Все другие типы данных будут автоматически преобразованы к строке.
Например, если использовать число 0 в качестве ключа, то оно превратится в строку "0"

Для проверки нахождения ключа в объекте
"key" in object
In нужен для проверки когда поле на объекте существует но его значение - undefined

Для перебора всех свойств объекта используется цикл for..in
for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}
Для полного копирования используем Object.assign(dest, [src1, src2, src3...]), либо через оператор расширения {...user}. Но если поле это тоже объект, то у клона и оригинала будет ссылка на один и тот же объект. Чтобы этого избежать нужно делать глубокое копировани например .cloneDeep(obj) из библиотеки JavaScript lodash.
`