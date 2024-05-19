`
J52
Существует 2 основных отличия var от let/const:

Переменные var не имеют блочной области видимости, они ограничены, как минимум, телом функции.
Объявления (инициализация) переменных var производится в начале исполнения функции (или скрипта для глобальных переменных).
Есть ещё одно небольшое отличие, относящееся к глобальному объекту, мы рассмотрим его в следующей главе.

Эти особенности, как правило, не очень хорошо влияют на код. Блочная область видимости – это удобно. Поэтому много лет назад let и const были введены в стандарт и сейчас являются основным способом объявления переменных.
`


`
J41
Шпаргалка по методам массива:

Для добавления/удаления элементов:

push(...items) – добавляет элементы в конец,
pop() – извлекает элемент с конца,
shift() – извлекает элемент с начала,
unshift(...items) – добавляет элементы в начало.
splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
Для поиска среди элементов:

indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
findIndex похож на find, но возвращает индекс вместо значения.
Для перебора элементов:

forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
Для преобразования массива:

map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) – сортирует массив «на месте», а потом возвращает его.
reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
split/join – преобразует строку в массив и обратно.
reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
Дополнительно:

Array.isArray(arr) проверяет, является ли arr массивом.
Пожалуйста, обратите внимание, что методы push, pop, shift, unshift, sort, reverse и splice изменяют исходный массив.

Эти методы – самые используемые, их достаточно в 99% случаев. Но существуют и другие:

arr.some(fn)/arr.every(fn) проверяет массив.

Функция fn вызывается для каждого элемента массива аналогично map. Если какие-либо/все результаты вызовов являются true, то метод возвращает true, иначе false.

Эти методы ведут себя примерно так же, как операторы || и &&: если fn возвращает истинное значение, arr.some() немедленно возвращает true и останавливает перебор остальных элементов; если fn возвращает ложное значение, arr.every() немедленно возвращает false и также прекращает перебор остальных элементов.

Мы можем использовать every для сравнения массивов:

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true
arr.fill(value, start, end) – заполняет массив повторяющимися value, начиная с индекса start до end.

arr.copyWithin(target, start, end) – копирует свои элементы, начиная с позиции start и заканчивая end, в себя, на позицию target (перезаписывая существующие).

arr.flat(depth)/arr.flatMap(fn) создаёт новый плоский массив из многомерного массива.`


`
J43
Map – коллекция пар ключ-значение.

Методы и свойства:

new Map([iterable]) – создаёт коллекцию, можно указать перебираемый объект (обычно массив) из пар [ключ,значение] для инициализации.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.
Отличия от обычного объекта Object:

Что угодно может быть ключом, в том числе и объекты.
Есть дополнительные методы, свойство size.
Set – коллекция уникальных значений, так называемое «множество».

Методы и свойства:

new Set(iterable) – создаёт Set, можно указать перебираемый объект со значениями для инициализации.
set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
set.clear() – удаляет все имеющиеся значения.
set.size – возвращает количество элементов в множестве.
Перебор Map и Set всегда осуществляется в порядке добавления элементов, так что нельзя сказать, что это – неупорядоченные коллекции, но поменять порядок элементов или получить элемент напрямую по его номеру нельзя.
`

`
J44
WeakMap – это Map-подобная коллекция, позволяющая использовать в качестве ключей только объекты, и автоматически удаляющая их вместе с соответствующими значениями, как только они становятся недостижимыми иными путями.

WeakSet – это Set-подобная коллекция, которая хранит только объекты и удаляет их, как только они становятся недостижимыми иными путями.

Обе этих структуры данных не поддерживают методы и свойства, работающие со всем содержимым сразу или возвращающие информацию о размере коллекции. Возможны только операции на отдельном элементе коллекции.

WeakMap и WeakSet используются как вспомогательные структуры данных в дополнение к «основному» месту хранения объекта. Если объект удаляется из основного хранилища и нигде не используется, кроме как в качестве ключа в WeakMap или в WeakSet, то он будет удалён автоматически.
`

`J16
Оператор нулевого слияния ?? — это быстрый способ выбрать первое «определённое» значение из списка.

Используется для присвоения переменным значений по умолчанию:

// будет height=100, если переменная height равна null или undefined
height = height ?? 100;
Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.

Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок.

Для присвоения переменной значения в зависимости от того, «определена» она или нет, используется оператор нулевого присваивания ??=.
`

`
J17
Мы рассмотрели 3 вида циклов:

while – Проверяет условие перед каждой итерацией.
do..while – Проверяет условие после каждой итерации.
for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.
Чтобы организовать бесконечный цикл, используют конструкцию while (true). При этом он, как и любой другой цикл, может быть прерван директивой break.

Если на данной итерации цикла делать больше ничего не надо, но полностью прекращать цикл не следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся перед циклом. Метки – единственный способ для break/continue выйти за пределы текущего цикла, повлиять на выполнение внешнего.

Заметим, что метки не позволяют прыгнуть в произвольное место кода, в JavaScript нет такой возможности.
`


`
J19
Объявление функции имеет вид:

function имя(параметры, через, запятую) {
  /* тело, код функции */
}
Передаваемые значения копируются в параметры функции и становятся локальными переменными.
Функции имеют доступ к внешним переменным. Но это работает только изнутри наружу. Код вне функции не имеет доступа к её локальным переменным.
Функция может возвращать значение. Если этого не происходит, тогда результат равен undefined.
Для того, чтобы сделать код более чистым и понятным, рекомендуется использовать локальные переменные и параметры функций, не пользоваться внешними переменными.

Функция, которая получает параметры, работает с ними и затем возвращает результат, гораздо понятнее функции, вызываемой без параметров, но изменяющей внешние переменные, что чревато побочными эффектами.

Именование функций:

Имя функции должно понятно и чётко отражать, что она делает. Увидев её вызов в коде, вы должны тут же понимать, что она делает, и что возвращает.
Функция – это действие, поэтому её имя обычно является глаголом.
Есть много общепринятых префиксов, таких как: create…, show…, get…, check… и т.д. Пользуйтесь ими как подсказками, поясняющими, что делает функция.
Функции являются основными строительными блоками скриптов. Мы рассмотрели лишь основы функций в JavaScript, но уже сейчас можем создавать и использовать их. Это только начало пути. Мы будем неоднократно возвращаться к функциям и изучать их всё более и более глубоко.
`

`
J20
Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.
Если функция была создана как часть выражения, то это “Function Expression”.

Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.

В большинстве случаев, когда нам нужно объявить функцию, Function Declaration предпочтительнее, т.к функция будет видна до своего объявления в коде. Это даёт нам больше гибкости в организации кода, и, как правило, делает его более читабельным.

Исходя из этого, мы должны использовать Function Expression только тогда, когда Function Declaration не подходит для нашей задачи. Мы рассмотрели несколько таких примеров в этой главе, и увидим ещё больше в будущем.
`

`
J21
Стрелочные функции очень удобны для простых действий, особенно для однострочных.
Они бывают двух типов:
Без фигурных скобок: (...args) => expression – правая сторона выражения: функция вычисляет его и возвращает результат. Скобки можно не ставить, если аргумент только один: n => n * 2.
С фигурными скобками: (...args) => { body } – скобки позволяют нам писать несколько инструкций внутри функции, но при этом необходимо явно вызывать return, чтобы вернуть значение.
`

`
J23
Итого
Приостановить выполнение скрипта можно тремя способами:

Точками останова (breakpoints).
Использованием в коде команд debugger.
При ошибке (если инструменты разработчика открыты и кнопка  «включена»).
При остановке мы можем отлаживать: анализировать переменные и пошагово пройти по процессу, чтобы отыскать проблему.

В инструментах разработчика гораздо больше опций, чем описано здесь. С полным руководством можно ознакомиться на https://developers.google.com/web/tools/chrome-devtools.
`

`
JS25
Комментарии – важный признак хорошего разработчика, причём как их наличие, так и отсутствие.

Хорошие комментарии позволяют нам поддерживать код, дают возможность вернуться к нему после перерыва и эффективнее его использовать.

Комментируйте:

Общую архитектуру, вид «с высоты птичьего полёта».
Использование функций.
Неочевидные решения, важные детали.
Избегайте комментариев:

Которые объясняют, как работает код, и что он делает.
Используйте их только в тех случаях, когда невозможно сделать настолько простой и самодокументированный код, что он не потребует комментариев.
Средства для генерации документации по коду, такие как JSDoc3, также используют комментарии: они их читают и генерируют HTML-документацию (или документацию в другом формате).
`

`
J29
Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

Они хранят свойства (пары ключ-значение), где:

Ключи свойств должны быть строками или символами (обычно строками).
Значения могут быть любого типа.
Чтобы получить доступ к свойству, мы можем использовать:

Запись через точку: obj.property.
Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
Дополнительные операторы:

Удаление свойства: delete obj.prop.
Проверка существования свойства: "key" in obj.
Перебор свойств объекта: цикл for for (let key in obj).
То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.

В JavaScript есть много других типов объектов:

Array для хранения упорядоченных коллекций данных,
Date для хранения информации о дате и времени,
Error для хранения информации об ошибке.
… и так далее.
У них есть свои особенности, которые мы изучим позже. Иногда люди говорят что-то вроде «тип данных Array» или «тип данных Date», но формально они не являются отдельными типами, а относятся к типу данных Object. Они лишь расширяют его различными способами.

Объекты в JavaScript очень мощные. Здесь мы только немного углубились в действительно огромную тему. Мы будем плотно работать с объектами и узнаем о них больше в следующих частях учебника.
`

`
J30
Объекты присваиваются и копируются по ссылке. Другими словами, переменная хранит не «значение объекта», а «ссылку» (адрес в памяти) на это значение. Таким образом, копирование такой переменной или передача её в качестве аргумента функции копирует эту ссылку, а не сам объект.

Все операции с использованием скопированных ссылок (например, добавление/удаление свойств) выполняются с одним и тем же объектом.

Чтобы создать «реальную копию» (клон), мы можем использовать Object.assign для так называемой «поверхностной копии» (вложенные объекты копируются по ссылке) или функцию «глубокого клонирования», такую как _.cloneDeep(obj).
`

`
J31 
Сборка мусора выполняется автоматически. Мы не можем ускорить или предотвратить её.
Объекты сохраняются в памяти, пока они достижимы.
Если на объект есть ссылка – вовсе не факт, что он является достижимым (из корня): набор взаимосвязанных объектов может стать недоступен в целом, как мы видели в примере выше.
`

`
J32
Функции, которые находятся в свойствах объекта, называются «методами».
Методы позволяют объектам «действовать»: object.doSomething().
Методы могут ссылаться на объект через this.
Значение this определяется во время исполнения кода.

При объявлении любой функции в ней можно использовать this, но этот this не имеет значения до тех пор, пока функция не будет вызвана.
Функция может быть скопирована между объектами (из одного объекта в другой).
Когда функция вызывается синтаксисом «метода» – object.method(), значением this во время вызова является object.
Также ещё раз заметим, что стрелочные функции являются особенными – у них нет this. Когда внутри стрелочной функции обращаются к this, то его значение берётся извне.
`

`
J33
Функции-конструкторы или просто конструкторы, являются обычными функциями, но существует общепринятое соглашение именовать их с заглавной буквы.
Функции-конструкторы следует вызывать только с помощью new. Такой вызов подразумевает создание пустого this в начале и возврат заполненного в конце.
Мы можем использовать конструкторы для создания множества похожих объектов.

JavaScript предоставляет функции-конструкторы для множества встроенных объектов языка: таких как Date, Set, и других, которые нам ещё предстоит изучить.
`

`
Синтаксис опциональной цепочки ?. имеет три формы:

obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.
Как мы видим, все они просты и понятны в использовании. ?. проверяет левую часть на null/undefined и позволяет продолжить вычисление, если это не так.

Цепочка ?. позволяет безопасно получать доступ к вложенным свойствам.

Тем не менее, мы должны использовать ?. осторожно, только там, где по логике кода допустимо, что левая часть не существует. Чтобы он не скрывал от нас ошибки программирования, если они возникнут.
`

`
J34
Символ (symbol) – примитивный тип данных, использующийся для создания уникальных идентификаторов.

Символы создаются вызовом функции Symbol(), в которую можно передать описание (имя) символа.

Даже если символы имеют одно и то же имя, это – разные символы. Если мы хотим, чтобы одноимённые символы были равны, то следует использовать глобальный реестр: вызов Symbol.for(key) возвращает (или создаёт) глобальный символ с key в качестве имени. Многократные вызовы команды Symbol.for с одним и тем же аргументом возвращают один и тот же символ.

Символы имеют два основных варианта использования:

«Скрытые» свойства объектов.

Если мы хотим добавить свойство в объект, который «принадлежит» другому скрипту или библиотеке, мы можем создать символ и использовать его в качестве ключа. Символьное свойство не появится в for..in, так что оно не будет нечаянно обработано вместе с другими. Также оно не будет модифицировано прямым обращением, так как другой скрипт не знает о нашем символе. Таким образом, свойство будет защищено от случайной перезаписи или использования.

Так что, используя символьные свойства, мы можем спрятать что-то нужное нам, но что другие видеть не должны.

Существует множество системных символов, используемых внутри JavaScript, доступных как Symbol.*. Мы можем использовать их, чтобы изменять встроенное поведение ряда объектов. Например, в дальнейших главах мы будем использовать Symbol.iterator для итераторов, Symbol.toPrimitive для настройки преобразования объектов в примитивы и так далее.

Технически символы скрыты не на 100%. Существует встроенный метод Object.getOwnPropertySymbols(obj) – с его помощью можно получить все свойства объекта с ключами-символами. Также существует метод Reflect.ownKeys(obj), который возвращает все ключи объекта, включая символьные. Так что они не совсем спрятаны. Но большинство библиотек, встроенных методов и синтаксических конструкций не используют эти методы.
`

`
Преобразование объекта в примитив вызывается автоматически многими встроенными функциями и операторами, которые ожидают примитив в качестве значения.

Существует всего 3 типа (хинта) для этого:

"string" (для alert и других операций, которым нужна строка)
"number" (для математических операций)
"default" (для некоторых других операторов, обычно объекты реализуют его как "number")
Спецификация явно описывает для каждого оператора, какой ему следует использовать хинт.

Алгоритм преобразования таков:

Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует,
В случае, если хинт равен "string"
происходит попытка вызвать obj.toString() и obj.valueOf(), смотря что есть.
В случае, если хинт равен "number" или "default"
происходит попытка вызвать obj.valueOf() и obj.toString(), смотря что есть.
Все эти методы должны возвращать примитив (если определены).

На практике часто бывает достаточно реализовать только obj.toString() в качестве универсального метода для преобразований к строке, который должен возвращать удобочитаемое представление объекта для целей логирования или отладки.
`

`
J37
Все примитивы, кроме null и undefined, предоставляют множество полезных методов. Мы познакомимся с ними поближе в следующих главах.
Формально эти методы работают с помощью временных объектов, но движки JavaScript внутренне очень хорошо оптимизируют этот процесс, так что их вызов не требует много ресурсов.
`

`
J38
Чтобы писать числа с большим количеством нулей:

Используйте краткую форму записи чисел – "e", с указанным количеством нулей. Например: 123e6 это 123 с 6-ю нулями 123000000.
Отрицательное число после "e" приводит к делению числа на 1 с указанным количеством нулей. Например: 123e-6 это 0.000123 (123 миллионных).
Для других систем счисления:

Можно записывать числа сразу в шестнадцатеричной (0x), восьмеричной (0o) и бинарной (0b) системах счисления
parseInt(str, base) преобразует строку в целое число в соответствии с указанной системой счисления: 2 ≤ base ≤ 36.
num.toString(base) представляет число в строковом виде в указанной системе счисления base.
Для проверки на NaN и Infinity:

isNaN(value) преобразует аргумент в число и проверяет, является ли оно NaN
Number.isNaN(value) проверяет, является ли аргумент числом, и если да, то проверяет, является ли оно NaN
isFinite(value) преобразует аргумент в число и проверяет, что оно не является NaN/Infinity/-Infinity
Number.isFinite(value) проверяет, является ли аргумент числом, и если да, то проверяет, что оно не является NaN/Infinity/-Infinity
Для преобразования значений типа 12pt и 100px в число:

Используйте parseInt/parseFloat для «мягкого» преобразования строки в число, данные функции по порядку считывают число из строки до тех пор пока не возникнет ошибка.
Для дробей:

Используйте округления Math.floor, Math.ceil, Math.trunc, Math.round или num.toFixed(precision).
Помните, что при работе с дробями происходит потеря точности.
Ещё больше математических функций:

Документация по объекту Math. Библиотека маленькая, но содержит всё самое важное.
`

`
J39
Есть три типа кавычек. Строки, использующие обратные кавычки, могут занимать более одной строки в коде и включать выражения.
Строки в JavaScript кодируются в UTF-16.
Есть специальные символы, такие как разрыв строки \n.
Для получения символа используйте [] или метод at.
Для получения подстроки используйте slice или substring.
Для того, чтобы перевести строку в нижний или верхний регистр, используйте toLowerCase/toUpperCase.
Для поиска подстроки используйте indexOf или includes/startsWith/endsWith, когда надо только проверить, есть ли вхождение.
Чтобы сравнить строки с учётом правил языка, используйте localeCompare.
Строки также имеют ещё кое-какие полезные методы:

str.trim() — убирает пробелы в начале и конце строки.
str.repeat(n) — повторяет строку n раз.
…и другие, которые вы можете найти в справочнике.
`

`
J40
Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.

Объявление:

// квадратные скобки (обычно)
let arr = [item1, item2...];

// new Array (очень редко)
let arr = new Array(item1, item2...);
Вызов new Array(number) создаёт массив с заданной длиной, но без элементов.

Свойство length отражает длину массива или, если точнее, его последний цифровой индекс плюс один. Длина корректируется автоматически методами массива.
Если мы уменьшаем length вручную, массив укорачивается.
Получение элементов:

Мы можем получить элемент по его индексу, например arr[0].
Также мы можем использовать метод at(i) для получения элементов с отрицательным индексом, для отрицательных значений i, он отступает от конца массива. В остальном он работает так же, как arr[i], если i >= 0.
Мы можем использовать массив как двустороннюю очередь, используя следующие операции:

push(...items)добавляет items в конец массива.
pop() удаляет элемент в конце массива и возвращает его.
shift() удаляет элемент в начале массива и возвращает его.
unshift(...items) добавляет items в начало массива.
Чтобы пройтись по элементам массива:

for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
for (let i in arr) – никогда не используйте для массивов!`

`
Объекты, которые можно использовать в цикле for..of, называются итерируемыми.

Технически итерируемые объекты должны иметь метод Symbol.iterator.
Результат вызова obj[Symbol.iterator] называется итератором. Он управляет процессом итерации.
Итератор должен иметь метод next(), который возвращает объект {done: Boolean, value: any}, где done:true сигнализирует об окончании процесса итерации, в противном случае value – следующее значение.
Метод Symbol.iterator автоматически вызывается циклом for..of, но можно вызвать его и напрямую.
Встроенные итерируемые объекты, такие как строки или массивы, также реализуют метод Symbol.iterator.
Строковый итератор знает про суррогатные пары.
Объекты, имеющие индексированные свойства и length, называются псевдомассивами. Они также могут иметь другие свойства и методы, но у них нет встроенных методов массивов.

Если мы заглянем в спецификацию, мы увидим, что большинство встроенных методов рассчитывают на то, что они будут работать с итерируемыми объектами или псевдомассивами вместо «настоящих» массивов, потому что эти объекты более абстрактны.

Array.from(obj[, mapFn, thisArg]) создаёт настоящий Array из итерируемого объекта или псевдомассива obj, и затем мы можем применять к нему методы массивов. Необязательные аргументы mapFn и thisArg позволяют применять функцию с задаваемым контекстом к каждому элементу.
`
`
J46
Деструктуризация позволяет разбивать объект или массив на переменные при присвоении.

Полный синтаксис для объекта:

let {prop : varName = defaultValue, ...rest} = object
Cвойство prop объекта object здесь должно быть присвоено переменной varName. Если в объекте отсутствует такое свойство, переменной varName присваивается значение по умолчанию.

Свойства, которые не были упомянуты, копируются в объект rest.

Полный синтаксис для массива:

let [item1 = defaultValue, item2, ...rest] = array
Первый элемент отправляется в item1; второй отправляется в item2, все остальные элементы попадают в массив rest.

Можно извлекать данные из вложенных объектов и массивов, для этого левая сторона должна иметь ту же структуру, что и правая.
`

`
J47
Дата и время в JavaScript представлены объектом Date. Нельзя создать «только дату» или «только время»: объекты Date всегда содержат и то, и другое.
Счёт месяцев начинается с нуля (да, январь – это нулевой месяц).
Дни недели в getDay() также отсчитываются с нуля, что соответствует воскресенью.
Объект Date самостоятельно корректируется при введении значений, выходящих за рамки допустимых. Это полезно для сложения/вычитания дней/месяцев/недель.
Даты можно вычитать, и разность возвращается в миллисекундах. Так происходит, потому что при преобразовании в число объект Date становится таймстампом.
Используйте Date.now() для быстрого получения текущего времени в формате таймстампа.
Учтите, что, в отличие от некоторых других систем, в JavaScript таймстамп в миллисекундах, а не в секундах.

Порой нам нужно измерить время с большей точностью. Собственными средствами JavaScript измерять время в микросекундах (одна миллионная секунды) нельзя, но в большинстве сред такая возможность есть. К примеру, в браузерах есть метод performance.now(), возвращающий количество миллисекунд с начала загрузки страницы с точностью до микросекунд (3 цифры после точки):

alert(Загрузка началась ${performance.now()}мс назад);
// Получаем что-то вроде: "Загрузка началась 34731.26000000001мс назад"
// .26 –- это микросекунды (260 микросекунд)
// корректными являются только первые три цифры после точки, а остальные -- это ошибка точности
В Node.js для этого предусмотрен модуль microtime и ряд других способов. Технически почти любое устройство или среда позволяет добиться большей точности, просто её нет в объекте Date.
`

`
JSON – это формат данных, который имеет собственный независимый стандарт и библиотеки для большинства языков программирования.
JSON поддерживает простые объекты, массивы, строки, числа, логические значения и null.
JavaScript предоставляет методы JSON.stringify для сериализации в JSON и JSON.parse для чтения из JSON.
Оба метода поддерживают функции преобразования для интеллектуального чтения/записи.
Если объект имеет метод toJSON, то он вызывается через JSON.stringify.
`

`
J49
Термины:

Рекурсия – это термин в программировании, означающий вызов функцией самой себя. Рекурсивные функции могут быть использованы для элегантного решения определённых задач.

Когда функция вызывает саму себя, это называется шагом рекурсии. База рекурсии – это такие аргументы функции, которые делают задачу настолько простой, что решение не требует дальнейших вложенных вызовов.

Рекурсивно определяемая структура данных – это структура данных, которая может быть определена с использованием самой себя.

Например, связанный список может быть определён как структура данных, состоящая из объекта, содержащего ссылку на список (или null).

list = { value, next -> list }
Деревья, такие как дерево HTML-элементов или дерево отделов из этой главы, также являются рекурсивными: у них есть ветви, и каждая ветвь может содержать другие ветви.

Как мы видели в примере sumSalary, рекурсивные функции могут быть использованы для прохода по ним.

Любая рекурсивная функция может быть переписана в итеративную. И это иногда требуется для оптимизации работы. Но для многих задач рекурсивное решение достаточно быстрое и простое в написании и поддержке.
`

`
J50
Когда мы видим "..." в коде, это могут быть как остаточные параметры, так и оператор расширения.

Как отличить их друг от друга:

Если ... располагается в конце списка параметров функции, то это «остаточные параметры». Он собирает остальные неуказанные аргументы и делает из них массив.
Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». Он извлекает элементы из массива.
Полезно запомнить:

Остаточные параметры используются, чтобы создавать новые функции с неопределённым числом аргументов.
С помощью оператора расширения можно вставить массив в функцию, которая по умолчанию работает с обычным списком аргументов.
Вместе эти конструкции помогают легко преобразовывать наборы значений в массивы и обратно.

К аргументам функции можно обращаться и по-старому — через псевдомассив arguments
`

`
J53
Глобальный объект хранит переменные, которые должны быть доступны в любом месте программы.

Это включает в себя как встроенные объекты, например, Array, так и характерные для окружения свойства, например, window.innerHeight – высота окна браузера.

Глобальный объект имеет универсальное имя – globalThis.

…Но чаще на него ссылаются по-старому, используя имя, характерное для данного окружения, такое как window (браузер) и global (Node.js).

Следует хранить значения в глобальном объекте, только если они действительно глобальны для нашего проекта. И стараться свести их количество к минимуму.

В браузерах, если только мы не используем модули, глобальные функции и переменные, объявленные с помощью var, становятся свойствами глобального объекта.

Для того, чтобы код был проще и в будущем его легче было поддерживать, следует обращаться к свойствам глобального объекта напрямую, как window.x.
`

`
J54
Функции – это объекты.

Их свойства:

name – имя функции. Обычно берётся из объявления функции, но если там нет – JavaScript пытается понять его из контекста.
length – количество аргументов в объявлении функции. Троеточие («остаточные параметры») не считается.
Если функция объявлена как Function Expression (вне основного потока кода) и имеет имя, тогда это называется Named Function Expression (Именованным Функциональным Выражением). Это имя может быть использовано для ссылки на себя же, для рекурсивных вызовов и т.п.

Также функции могут содержать дополнительные свойства. Многие известные JavaScript-библиотеки искусно используют эту возможность.

Они создают «основную» функцию и добавляют множество «вспомогательных» функций внутрь первой. Например, библиотека jQuery создаёт функцию с именем $. Библиотека lodash создаёт функцию _, а потом добавляет в неё _.clone, _.keyBy и другие свойства (чтобы узнать о ней побольше см. документацию). Они делают это, чтобы уменьшить засорение глобального пространства имён посредством того, что одна библиотека предоставляет только одну глобальную переменную, уменьшая вероятность конфликта имён.

Таким образом, функция может не только делать что-то сама по себе, но также и предоставлять полезную функциональность через свои свойства.
`

`
Синтаксис:

let func = new Function ([arg1, arg2, ...argN], functionBody);
По историческим причинам аргументы также могут быть объявлены через запятую в одной строке.

Эти 3 объявления ниже эквивалентны:

new Function('a', 'b', 'return a + b'); // стандартный синтаксис
new Function('a,b', 'return a + b'); // через запятую в одной строке
new Function('a , b', 'return a + b'); // через запятую с пробелами в одной строке
Функции, объявленные через new Function, имеют [[Environment]], ссылающийся на глобальное лексическое окружение, а не на родительское. Поэтому они не могут использовать внешние локальные переменные. Но это очень хорошо, потому что страхует нас от ошибок. Переданные явно параметры – гораздо лучшее архитектурное решение, которое не вызывает проблем у минификаторов.
`

`
J56
Методы setInterval(func, delay, ...args) и setTimeout(func, delay, ...args) позволяют выполнять func регулярно или только один раз после задержки delay, заданной в мс.
Для отмены выполнения необходимо вызвать clearInterval/clearTimeout со значением, которое возвращают методы setInterval/setTimeout.
Вложенный вызов setTimeout является более гибкой альтернативой setInterval. Также он позволяет более точно задать интервал между выполнениями.
Планирование с нулевой задержкой setTimeout(func,0) или, что то же самое, setTimeout(func) используется для вызовов, которые должны быть исполнены как можно скорее, после завершения исполнения текущего кода.
Браузер ограничивает 4-мя мс минимальную задержку между пятью и более вложенными вызовами setTimeout, а также для setInterval, начиная с 5-го вызова.
Обратим внимание, что все методы планирования не гарантируют точную задержку.

Например, таймер в браузере может замедляться по многим причинам:

Перегружен процессор.
Вкладка браузера в фоновом режиме.
Работа ноутбука от аккумулятора.
Всё это может увеличивать минимальный интервал срабатывания таймера (и минимальную задержку) до 300 или даже 1000 мс в зависимости от браузера и настроек производительности ОС.
`