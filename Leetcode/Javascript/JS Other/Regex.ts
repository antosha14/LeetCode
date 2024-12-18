`
regexp = /шаблон/gmi; // с флагами gmi (будут описаны далее)

new RegExp – когда мы хотим создать регулярное выражение «на лету» из динамически сгенерированной строки, например
let tag = prompt("Какой тег вы хотите найти?", "h2");

let regexp = new RegExp(`<${tag}>`); // то же, что /<h2>/  при ответе "h2" на prompt выше

i
С этим флагом поиск не зависит от регистра: нет разницы между A и a (см. пример ниже).
g
С этим флагом поиск ищет все совпадения, без него – только первое.
m
Многострочный режим (рассматривается в главе Многострочный режим якорей ^ $, флаг "m").
s
Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
u
Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
y
Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y").
d
С этим флагом результат регулярного выражения помещается в массив, который содержит дополнительную информацию о регулярном выражении, например индексы начала и конца подстрок. Этот флаг не меняет поведение регулярного выражения, а лишь предоставляет дополнительную информацию.


Метод str.match(regexp) для строки str возвращает совпадения с регулярным выражением regexp

если совпадений нет, то, вне зависимости от наличия флага g, возвращается null.
Метод str.replace(regexp, replacement) заменяет совпадения с regexp в строке str на replacement (все, если есть флаг g, иначе только первое).
Метод regexp.test(str) проверяет, есть ли хоть одно совпадение, если да, то возвращает true, иначе false

Регулярное выражение состоит из шаблона и необязательных флагов: g, i, m, u, s, y, d.
Без флагов и специальных символов, которые мы изучим позже, поиск по регулярному выражению аналогичен поиску подстроки.
Метод str.match(regexp) ищет совпадения: все, если есть флаг g, иначе только первое.
Метод str.replace(regexp, replacement) заменяет совпадения с regexp на replacement: все, если у регулярного выражения есть флаг g, иначе только первое.
Метод regexp.test(str) возвращает true, если есть хоть одно совпадение, иначе false.

Например, давайте найдём первую цифру в номере телефона:

let str = "+7(903)-123-45-67";
let regexp = /\d/;
alert( str.match(regexp) ); // 7

\d («d» от английского «digit» означает «цифра»)
Цифра: символ от 0 до 9.
\s («s»: от английского «space» – «пробел»)
Пробельные символы: включает в себя символ пробела, табуляции \t, перевода строки \n и некоторые другие редкие пробельные символы, обозначаемые как \v, \f и \r.
\w («w»: от английского «word» – «слово»)
Символ «слова», а точнее – буква латинского алфавита или цифра или подчёркивание _. Нелатинские буквы не являются частью класса \w, то есть буква русского алфавита не подходит.
Для примера, \d\s\w обозначает «цифру», за которой идёт пробельный символ, а затем символ слова, например 1 a.

Регулярное выражение может содержать как обычные символы, так и символьные классы.\
Для каждого символьного класса существует «обратный класс», обозначаемый той же буквой, но в верхнем регистре. «Обратный» означает, что он соответствует всем другим символам,

let str = "+7(903)-123-45-67";
alert( str.match(/\d/g).join('') );


В регулярном выражении можно искать символ с заданным свойством, указав его в \p{…}. Для таких регулярных выражений обязательно использовать флаг u.

let str = "A ბ ㄱ";
alert( str.match(/\p{L}/gu) ); // A,ბ,ㄱ

Вот основные категории символов и их подкатегории:

Буквы L:
в нижнем регистре Ll,
модификаторы Lm,
заглавные буквы Lt,
в верхнем регистре Lu,
прочие Lo.
Числа N:
десятичная цифра Nd,
цифры обозначаемые буквами (римские) Nl,
прочие No.
Знаки пунктуации P:
соединители Pc,
тире Pd,
открывающие кавычки Pi,
закрывающие кавычки Pf,
открывающие скобки Ps,
закрывающие скобки Pe,
прочее Po.
Отметки M (например, акценты):
двоеточия Mc,
вложения Me,
апострофы Mn.
Символы S:
валюты Sc,
модификаторы Sk,
математические Sm,
прочие So.
Разделители Z:
линия Zl,
параграф Zp,
пробел Zs.
Прочие C:
контрольные Cc,
форматирование Cf,
не назначенные Cn,
для приватного использования Co,
суррогаты Cs.

Шестнадцатеричная цифра может быть обозначена как \p{Hex_Digit}

let regexp = /\p{sc=Han}/gu; // вернёт китайские иероглифы
let str = `Hello Привет 你好 123_456`;
alert( str.match(regexp) ); // 你,好 SC - система написания


Символы, обозначающие валюты, такие как $, €, ¥, имеют свойство \p{Currency_Symbol}, короткая запись: \p{Sc}.
Флаг u включает поддержку Юникода в регулярных выражениях.

Конкретно, это означает, что:

Символы из 4 байт воспринимаются как единое целое, а не как два символа по 2 байта.
Работает поиск по Юникодным свойствам \p{…}.
С помощью Юникодных свойств мы можем искать слова на нужных языках, специальные символы (кавычки, обозначения валюты) и так далее.


У символов каретки ^ и доллара $ есть специальные значения в регулярных выражениях. Они называются «якоря» (anchors).

Каретка ^ означает совпадение с началом текста, а доллар $ – с концом.

К примеру, давайте проверим начинается ли текст с Mary:

let str1 = "Mary had a little lamb";
alert( /^Mary/.test(str1) ); // true


Аналогично можно проверить, кончается ли строка словом snow при помощи snow$:

let str1 = "it's fleece was white as snow";
alert( /snow$/.test(str1) ); // true
Оба якоря вместе ^...$ часто используются для проверки, совпадает ли строка с шаблоном полностью.


Многострочный режим включается флагом m.

Он влияет только на поведение ^ и $.

В многострочном режиме они означают не только начало/конец текста, но и начало/конец каждой строки в тексте.
В примере ниже текст состоит из нескольких строк. Шаблон /^\d/gm берёт цифру с начала каждой строки:

let str = 1е место: Винни
2е место: Пятачок
3е место: Слонопотам;

console.log( str.match(/^\d/gm) ); // 1, 2, 3

Когда движок регулярных выражений (программный модуль, реализующий поиск по регулярным выражениям) видит \b, он проверяет, что позиция в строке является границей слова.

Есть три вида позиций, которые являются границами слова:

Начало текста, если его первый символ \w.
Позиция внутри текста, если слева находится \w, а справа – не \w, или наоборот.
Конец текста, если его последний символ \w.
Java!\b (восклицательный знак не является «символом слова» \w, поэтому после него нет границы слова).
Граница слова \b не работает для алфавитов, не основанных на латинице

Для поиска специальных символов [ ] \ ^ $ . | ? * + ( ), нам нужно добавить перед ними \ («экранировать их»).
Нам также нужно экранировать /, если мы используем /.../ (но не new RegExp).
При передаче строки в new RegExp нужно удваивать обратную косую черту: \\ для экранирования специальных символов, потому что строковые кавычки «съедят» одну черту

Несколько символов или символьных классов в квадратных скобках […] означают «искать любой символ из заданных».
Для примера, [eao] означает любой из 3-х символов: 'a', 'e' или 'o' ТОЛЬКО ОДНОМУ СИМВОЛУ

Ещё квадратные скобки могут содержать диапазоны символов.
К примеру, [a-z] соответствует символу в диапазоне от a до z, или [0-5] – цифра от 0 до 5.
alert( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); // xAF

[^…] Не то что в диапазоне

Чтобы указать количество повторений, нам нужно добавить квантификатор. Самый простой квантификатор — это число в фигурных скобках: {n}. Шаблон \d{5} обозначает ровно 5 цифр
Для того, чтобы найти числа от 3 до 5 цифр, мы можем указать границы в фигурных скобках: \d{3,5}
alert( "Мне не 12, а 1234 года".match(/\d{3,5}/) ); // "1234" Причём верхнюю границу можно не указывать

let str = "+7(903)-123-45-67";
let numbers = str.match(/\d{1,}/g);
alert(numbers); // 7,903,123,45,67

+ это «один или более». То же самое, что и {1,}.
? это «ноль или один». То же самое, что и {0,1}
* это «ноль или более». То же самое, что и {0,}.

Регулярное выражение для «открывающего или закрывающего HTML-тега без атрибутов»: /<\/?[a-z][a-z0-9]*>/i
Для каждой позиции в строке для поиска:
Попробовать найти совпадение с шаблоном на этой позиции.
Если нет совпадения, переход к следующей позиции.

let str = 'a "witch" and her "broom" is one';

alert( str.match(regexp) ); // "witch" and her "broom"
ДВИЖОК ЖАДНЫЙ, он видит точку и идёт до конца, а потом понимает что он мог перебрать и идёт назад

«Ленивый» режим противоположен «жадному». Он означает: «повторять квантификатор наименьшее количество раз».
Мы можем включить его, вставив знак вопроса '?' после квантификатора, то есть будет *? или +? или даже ?? для '?'.
Проясним: обычно знак вопроса ? сам по себе является квантификатором (ноль или один), но, если он добавлен после другого квантификатора (или даже после самого себя), он получает другое значение – он меняет режим совпадения с жадного на ленивый. В ленивом режиме движок будет искать сразу последний элемент

У квантификаторов есть два режима работы:

Жадный
По умолчанию движок регулярного выражения пытается повторить квантификатор столько раз, сколько это возможно. Например, \d+ получит все возможные цифры. Когда цифры закончатся или он дойдёт до конца строки, движок продолжит искать совпадение для оставшегося шаблона. Если совпадения не будет, он уменьшит количество повторов (осуществит возврат) и попробует снова.
Ленивый
Включается с помощью знака вопроса ? после квантификатора. Движок регулярного выражения пытается найти совпадение для оставшегося шаблона перед каждым повторением квантификатора.
Как мы увидели на примере поиска строк в кавычках, ленивый режим не «панацея» от всех проблем жадного поиска. В качестве альтернативы может выступать «хорошо настроенный» жадный поиск, как в шаблоне "[^"]+".

Скобки группируют символы вместе. Так что (go)+ означает go, gogo, gogogo и т.п.
Регулярка для сайтов с доменами (\w+\.)+\w+

let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

alert("my@mail.com @ his@site.com.uk".match(regexp)); // my@mail.com, his@site.com.uk
Пример с несколькими скобками
<(([a-z]+)\s*([^>]*))> 
Даже если скобочная группа необязательна (например, стоит квантификатор (...)?), соответствующий элемент массива result существует и равен undefined.
При поиске всех совпадений (флаг g) метод match не возвращает скобочные группы
Для того, чтобы их получать, мы можем использовать метод str.matchAll(regexp)

let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// results - не массив, а перебираемый объект
alert(results); // [object RegExp String Iterator]

alert(results[0]); // undefined (*)

results = Array.from(results); // превращаем в массив

alert(results[0]); // <h1>,h1 (первый тег)
alert(results[1]); // <h2>,h2 (второй тег)
Скобкам можно задать имена. Это делается добавлением ?<name> непосредственно после открытия скобки.

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = "2019-04-30";

let groups = str.match(dateRegexp).groups;

alert(groups.year); // 2019
alert(groups.month); // 04
alert(groups.day); // 30

Метод str.replace(regexp, replacement), осуществляющий замену совпадений с regexp в строке str, позволяет использовать в строке замены содержимое скобок. Это делается при помощи обозначений вида $n, где n – номер скобочной группы.

Например:

let str = "John Bull";
let regexp = /(\w+) (\w+)/;

alert( str.replace(regexp, '$2, $1') ); // Bull, John
Для именованных скобок ссылка будет выглядеть как $<имя>.
Скобочную группу можно исключить из запоминаемых и нумеруемых, добавив в её начало ?:.

Например, если мы хотим найти (go)+, но не хотим иметь в массиве-результате отдельным элементом содержимое скобок (go), то можем написать (?:go)+.

Круглые скобки группируют вместе часть регулярного выражения, так что квантификатор применяется к ним в целом.

Скобочные группы нумеруются слева направо. Также им можно дать имя с помощью (?<name>...).

Часть совпадения, соответствующую скобочной группе, мы можем получить в результатах поиска.

Метод str.match возвращает скобочные группы только без флага g.
Метод str.matchAll возвращает скобочные группы всегда.
Если скобка не имеет имени, то содержимое группы будет по своему номеру в массиве-результате, если имеет, то также в свойстве groups.

Содержимое скобочной группы можно также использовать при замене str.replace(regexp, replacement): по номеру $n или по имени $<имя>.

Можно исключить скобочную группу из запоминания, добавив в её начало ?:. Это используется, если необходимо применить квантификатор ко всей группе, но не запоминать их содержимое в отдельном элементе массива-результата. Также мы не можем ссылаться на такие скобки в строке замены.

Например, нам нужно найти языки программирования: HTML, PHP, Java и JavaScript.
Соответствующее регулярное выражение: html|php|java(script)?
gra|ey означает gra или ey. ИЛИ РАБОТАЕТ С ПОЛНЫМИ ВЫРАЖЕНИЯМИ А НЕ СИМВОЛАМИ КАК СКОБКИ

let regexp = /([01]\d|2[0-3]):[0-5]\d/g;
alert("00:00 10:10 23:59 25:99 1:2".match(regexp)); // 00:00,10:10,23:59

Необходимо найти строки в кавычках: либо одинарных '...', либо двойных "..." – оба варианта должны подходить.

Как найти такие строки?

Можно попытаться добавить оба вида кавычек в квадратные скобки: ['"](.*?)['"], но в таком случае будут находиться строки со смешанными кавычками, например "...' и '...". Это приведёт к ошибке, когда одна кавычка окажется внутри других, как в строке "She's the one!":

Для того, чтобы шаблон искал закрывающую кавычку такую же, как и открывающую, обернём открывающие кавычки в скобочную группу и используем обратную ссылку на неё: (['"])(.*?)\1

let str = He said: "She's the one!".;
let regexp = /(['"])(.*?)\1/g;
alert( str.match(regexp) ); // "She's the one!"
Мы не можем обратиться к группе, которая исключена из запоминания при помощи ?:

В некоторых случаях нам нужно найти соответствия шаблону, но только те, за которыми или перед которыми следует другой шаблон.
Синтаксис опережающей проверки: X(?=Y).
Он означает: найди X при условии, что за ним следует Y. Вместо X и Y здесь может быть любой шаблон

Возможны и более сложные проверки, например X(?=Y)(?=Z) означает:

Найти X.
Проверить, идёт ли Y сразу после X (если нет – не подходит).
Проверить, идёт ли Z сразу после X (если нет – не подходит).
Если обе проверки прошли – совпадение найдено.

Допустим, нам нужно узнать из этой же строки количество индеек, то есть число \d+, за которым НЕ следует знак €.
Для этой задачи мы можем применить негативную опережающую проверку.
Синтаксис: X(?!Y)

Синтаксис:

Позитивная ретроспективная проверка: (?<=Y)X, ищет совпадение с X при условии, что перед ним ЕСТЬ Y.
Негативная ретроспективная проверка: (?<!Y)X, ищет совпадение с X при условии, что перед ним НЕТ Y.

В следующем примере знак валюты (€|kr) будет включён в результат вместе с суммой:

let str = "1 индейка стоит 30€";
let regexp = /\d+(?=(€|kr))/; // добавлены дополнительные скобки вокруг €|kr

alert( str.match(regexp) ); // 30, €

Опережающая и ретроспективная проверки удобны, когда мы хотим искать шаблон по дополнительному условию на контекст, в котором он находится.

Для простых регулярных выражений мы можем сделать похожую вещь «вручную». То есть, найти все совпадения, независимо от контекста, а затем в цикле отфильтровать подходящие.

Как мы помним, regexp.match (без флага g) и str.matchAll (всегда) возвращают совпадения со свойством index, которое содержит позицию совпадения в строке, так что мы можем посмотреть на контекст.

Но обычно регулярные выражения удобнее.

Виды проверок:

Шаблон	Тип	Совпадение
X(?=Y)	Позитивная опережающая	X, если за ним следует Y
X(?!Y)	Негативная опережающая	X, если за ним НЕ следует Y
(?<=Y)X	Позитивная ретроспективная	X, если следует за Y
(?<!Y)X	Негативная ретроспективная	X, если НЕ следует за Y

Регулярки могут виснуть например вот 
(\w+\s?)* - Куча комбинаций так как пробел опционален, и невозможно разбить слово на несколько \w
^(\d+)*$
Исправляется путём уменьшения вариантов, Например /^(\w+\s)*\w*$/

Переписывать регулярное выражение не всегда удобно, и не всегда очевидно, как это сделать.
Альтернативный подход заключается в том, чтобы запретить возврат для квантификатора.

Если говорить об изначальном примере ^(\w+\s?)*$, то хорошо бы исключить возврат для \w+. То есть, для \w+ нужно искать только одно слово целиком, максимально возможной длины. Не нужно уменьшать количество повторений \w+, пробовать разбить слово на два \w+\w+, и т.п.
Мы можем исключить возврат с помощью опережающей проверки.

Шаблон, захватывающий максимальное количество повторений \w без возврата, выглядит так: (?=(\w+))\1.
Расшифруем его:
Опережающая проверка ?= ищет максимальное количество \w+, доступных с текущей позиции.
Содержимое скобок вокруг ?=... не запоминается движком, поэтому оборачиваем \w+ внутри в дополнительные скобки, чтобы движок регулярных выражений запомнил их содержимое.
…И чтобы далее в шаблоне на него сослаться обратной ссылкой \1.
То есть, мы смотрим вперед – и если там есть слово \w+, то ищем его же \1.

Для поиска, начиная с нужной позиции, можно использовать метод regexp.exec(str)
Если флаг g есть, то он осуществляет поиск в строке str, начиная с позиции, заданной свойством regexp.lastIndex. И, когда находит, обновляет regexp.lastIndex на позицию после совпадения.

let str = 'let varName';

let regexp = /\w+/g;
alert(regexp.lastIndex); // 0 (при создании lastIndex=0)

let word1 = regexp.exec(str);
alert(word1[0]); // let (первое слово)
alert(regexp.lastIndex); // 3 (позиция за первым совпадением)

let word2 = regexp.exec(str);
alert(word2[0]); // varName (второе слово)
alert(regexp.lastIndex); // 11 (позиция за вторым совпадением)

let word3 = regexp.exec(str);
alert(word3); // null (больше совпадений нет)
alert(regexp.lastIndex); // 0 (сбрасывается по окончании поиска)

…То есть, при флаге g свойство lastIndex задаёт начальную позицию поиска.
Флаг y заставляет regexp.exec искать ровно на позиции lastIndex, ни до и ни после
ИСПОЛЬЗУЕМ ЧТОБЫ НЕ ШЛО ДО КОНЦА ВСЕГО ТЕКСТА А ТОЬКО ПРОВЕРИЛО ЭЛЕМЕНТ НА ОПРЕДЕЛЁННОЙ ПОЗИЦИИ


str.match(regexp)
У него есть три режима работы:

Если у регулярного выражения нет флага g, то он возвращает первое совпадение в виде массива со скобочными группами и свойствами index (позиция совпадения), input (строка поиска, равна str)

Если у регулярного выражения есть флаг g, то он возвращает массив всех совпадений, без скобочных групп и других деталей.

Если совпадений нет, то, вне зависимости от наличия флага g, возвращается null.

str.matchAll(regexp)
У него 3 отличия от match:

Он возвращает не массив, а перебираемый объект с результатами, обычный массив можно сделать при помощи Array.from.

Каждое совпадение возвращается в виде массива со скобочными группами (как str.match без флага g).

Если совпадений нет, то возвращается не null, а пустой перебираемый объект.

str.split(regexp|substr, limit)
Разбивает строку в массив по разделителю – регулярному выражению regexp или подстроке substr.
alert('12, 34, 56'.split(/,\s*/)) // массив [12, 34, 56]

str.search(regexp)
Метод str.search(regexp) возвращает позицию первого совпадения с regexp в строке str или -1, если совпадения нет. Важное ограничение: str.search умеет возвращать только позицию первого совпадения.

str.replace(str|regexp, str|func)
Когда первый аргумент replace является строкой, он заменяет только первое совпадение.
Для ситуаций, которые требуют «умных» замен, вторым аргументом может быть функция.

Она будет вызываться для каждого совпадения, и её результат будет вставлен в качестве замены.

Функция вызывается с аргументами func(match, p1, p2, ..., pn, offset, input, groups):

match – найденное совпадение,
p1, p2, ..., pn – содержимое скобок (см. главу Скобочные группы).
offset – позиция, на которой найдено совпадение,
input – исходная строка,
groups – объект с содержимым именованных скобок (см. главу Скобочные группы).

regexp.exec(str)
Метод regexp.exec(str) ищет совпадение с regexp в строке str. В отличие от предыдущих методов, вызывается на регулярном выражении, а не на строке.

Но если есть g, то:

Вызов regexp.exec(str) возвращает первое совпадение и запоминает позицию после него в свойстве regexp.lastIndex.
Следующий такой вызов начинает поиск с позиции regexp.lastIndex, возвращает следующее совпадение и запоминает позицию после него в regexp.lastIndex.
…И так далее.
Если совпадений больше нет, то regexp.exec возвращает null, а для regexp.lastIndex устанавливается значение 0.
Мы можем использовать regexp.exec для поиска совпадения, начиная с нужной позиции, если вручную поставим lastIndex.

Если мы применяем одно и то же регулярное выражение последовательно к разным строкам, это может привести к неверному результату, поскольку вызов regexp.test обновляет свойство regexp.lastIndex, поэтому поиск в новой строке может начаться с ненулевой позиции.

str.match(regexp)
str.matchAll(regexp)
str.split(regexp|substr, limit)
str.search(regexp)
str.replace(str|regexp, str|func)
regexp.exec(str)
regexp.test(str)
`
