`
px

em - любые пропорции от текущего шрифта. То есть если в контейнере выше уже задан размер, то для вычислений берётся именно он

% - Как правило, процент будет от значения свойства родителя с тем же названием, но не всегда. Исключения: margin-left(ширина родительского блока), line-height(текущий размер шрифта), width/height - процент от ширины/высоты родителя, но при position:fixed, процент берётся от ширины/высоты окна

rem - Единица rem задаёт размер относительно размера шрифта элемента <html>. Например её удобно использовать для изменения размеров вложенных элементов. Хотим увеличить все rem - увеличиваем размер шрифта у html

vw – 1% ширины окна
vh – 1% высоты окна
vmin – наименьшее из (vw, vh), в IE9 обозначается vm
vmax – наибольшее из (vw, vh)
`

`
Дисплей
display: none - вообще не показывается
display: block. - Один за другим занимая всю доступную ширину (разные строки)
inline - Элементы располагаются на той же строке, последовательно. Ширина и высота элемента определяются по содержимому. Поменять их нельзя. Содержимое инлайн-элемента может переноситься на другую строку. При этом каждая строка в смысле отображения является отдельным прямоугольником («line box»). например если задать ему фон, то он будет только у текста. Если инлайн-элемент граничит с блоком, то между ними обязательно будет перенос строки.
inline-block - Располагается в строке. Размер устанавливается по содержимому. Элемент всегда прямоугольный. Работают свойства width/height. Это значение display используют, чтобы отобразить в одну строку блочные элементы, в том числе разных размеров. Свойство vertical-align позволяет выровнять такие элементы внутри внешнего блока vertical-align: middle

table Внутри ячеек свойство vertical-align выравнивает содержимое по вертикали. А сами тэги таблицы - это дивы с заранее проставленным дисплей 
table-row
table-cell

list-item - Этот display по умолчанию используется для элементов списка
run-in - Если после run-in идёт block, то run-in становится его первым инлайн-элементом, то есть отображается в начале block.
`

`
Position
Виды позиционирования и их особенности.

static
Иначе называется «без позиционирования». В явном виде задаётся только если надо переопределить другое правило CSS.
relative
Сдвигает элемент относительно текущего места.
Противоположные границы left/right (top/bottom) одновременно указать нельзя.
Окружающие элементы ведут себя так, как будто элемент не сдвигался.
absolute
Визуально переносит элемент на новое место. 

Новое место вычисляется по координатам left/top/right/bottom относительно ближайшего позиционированного родителя. Если такого родителя нет, то им считается окно. 

Ширина элемента по умолчанию устанавливается по содержимому.
Можно указать противоположные границы left/right (top/bottom). Элемент растянется.
В абсолютно позиционированном элементе можно одновременно задавать противоположные границы.
Браузер растянет такой элемент до границ. То есть, координаты и ширины вычисляются относительно окна, а не документа.
Окружающие элементы заполняют освободившееся место.
fixed
Подвид абсолютного позиционирования, при котором элемент привязывается к координатам окна, а не документа.

При прокрутке он остаётся на том же месте.
`

`
Способы центрануть DIV:
Центрануть текст в DIV:
Вертикально
Горизонтально
`

`
Значение line height, заданное множителем, наследуется и применяется в каждом элементе относительно его размера шрифта. Значение, заданное в единицах измерения, запоминается и наследуется «как есть».
Установить font-size и line-height можно одновременно.
font: 20px/1.5 Arial,sans-serif;
line-height
Размер строки, обычно он больше размера шрифта. При установке множителем рассчитывается каждый раз относительно текущего шрифта, при установке в единицах измерения – фиксируется.
font-size
Размер шрифта. Если сделать блок такой же высоты, как шрифт, то хвосты букв будут вылезать из-под него.
font: 125%/1.5 FontFamily
Даёт возможность одновременно задать размер, высоту строки и, собственно, сам шрифт.
`

`
У него есть два известных значения:

white-space: normal – обычное поведение
white-space: pre – текст ведёт себя, как будто оформлен в тег pre. (То есть все переносы сохраняются)
nowrap - Переносы и пробелы убираются

pre-wrap
То же самое, что pre, но переводит строку, если текст вылезает из контейнера.

pre-line
То же самое, что pre, но переводит строку, если текст вылезает из контейнера и не сохраняет пробелы.
`

`
Свойство outline задаёт дополнительную рамку вокруг элемента, за пределами его CSS-блока.
В отличие от border, рамка outline не участвует в блочной модели CSS
Также, в отличие от border, рамку outline можно задать только со всех сторон: свойств outline-top, outline-left не существует.
Так как outline находится за границами элемента – outline-рамки соседей могут перекрывать друг друга
Все современные браузеры также поддерживают свойство outline-offset, задающее отступ outline от границы элемента его часто используют для стилей :hover и других аналогичных, когда нужно выделить элемент, но чтобы ничего при этом не прыгало.

Свойство box-sizing может принимать одно из двух значений – border-box или content-box. В зависимости от выбранного значения браузер по-разному трактует значение свойств width/height.

content-box
Это значение по умолчанию. В этом случае свойства width/height обозначают то, что находится внутри padding.

border-box
Значения width/height задают высоту/ширину всего элемента.

Вертикальные отступы поглощают друг друга, горизонтальные – нет.
ПО ВЕРТИКАЛИ А вот по вертикали расстояние от SPAN до P равно 20px: из двух вертикальных отступов выбирается больший max(20px, 15px) = 20px и применяется.
Maegin может быть отрицательная При сдвиге через margin соседние элементы занимают освободившееся пространство, в отличие от position: relative, при котором элемент визуально сдвигается, но место, где он был, остаётся «занятым».
Использование отрицательного margin-top позволяет вынести заголовки над блоком. При этом контент тоже сдвинется

Отрицательные margin-right/bottom ведут себя по-другому, чем margin-left/top. Они не сдвигают элемент, а «укорачивают» его.
Отрицательные margin-left/top сдвигают элемент влево-вверх. Остальные элементы это учитывают, в отличие от сдвига через position.
Отрицательные margin-right/bottom заставляют другие элементы думать, что блок меньше по размеру справа-внизу, чем он на самом деле.
`

`
Иногда под картинками остаётся инлайновый элемент чтобы выносить в него хвосты букв. Решение - display: block для картинки. Также можно установить vertical-align в top, то инлайн-элемент будет отпозиционирован по верхней границе текущей строки. этом браузер не будет оставлять место под изображением, так как запланирует продолжение строки сверху, а не снизу. Может также понадобиться уменьшение line-height: 1px

Возможные значения overflow: 
visible (по умолчанию) Если не ставить overflow явно или поставить visible, то содержимое отображается за границами блока. 
hidden Переполняющее содержимое не отображается. 
scroll Полоса прокрутки отображается всегда. 
auto При переполнении отображается полоса прокрутки.
Можно указать поведение блока при переполнении по ширине в overflow-x и высоте – в overflow-y
Кроме того, значение overflow: auto | hidden изменяет поведение контейнера, содержащего float. Так как элемент с float находится вне потока, то обычно контейнер не выделяет под него место. Но если стоит такой overflow, то место выделяется, т.е. контейнер растягивается. 
`

`
Для произвольного блочного элемента height в процентах работать не будет!!!!!
height:100% + float:left НЕ РАБОТАЕТ ПОТОМУ ЧТО. Если высота внешнего блока вычисляется по содержимому, то высота в % не работает, и заменяется на height:auto. Кроме случая, когда у элемента стоит position:absolute
Правильно: height:100% + position:absolute У ЭЛЕМЕНТА С АВТОМАТИЧЕСКОЙ ВЫСОТОЙ
Вам необходимо установить height: 1px для родителя, чтобы дочерний элемент смог занять всю высоту указанную в min-height.
Свойство height, указанное в %, работает только если для внешнего блока указана высота.
Стандарт CSS 2.1 предоставляет обход этой проблемы, отдельно указывая, что проценты работают при position:absolute. На практике это часто выручает.
Если у родительского элемента не установлено height, а указано min-height, то, чтобы дочерний блок занял 100% высоты, нужно родителю поставить свойство height: 1px;
`

`
Как писать CSS
Свойства, сильнее влияющие на документ, идут первыми
Рекомендуется располагать свойства в следующем порядке:

Сначала положение элемента относительно других: position, left/right/top/bottom, float, clear, z-index.
Затем размеры и отступы: width, height, margin, padding…
Рамка border, она частично относится к размерам.
Общее оформление содержимого: list-style-type, overflow…
Цветовое и стилевое оформление: background, color, font…
`


`
Центрирование
Горизонтальное:
1) Для центрирования инлайновых элементов – достаточно поставить родителю text-align: center (Текст внутри блока). Для центрирования блока это уже не подойдёт, свойство просто не подействует.
2) margin: auto - Блок по горизонтали центрируется margin: auto

Вертикальное:
1) position:absolute и top: 50%; но Нужно ещё приподнять элемент на половину своей высоты. Высота центрируемого элемента должна быть известна. Родитель может иметь любую высоту. margin-top: -0.625em - чтобы приподнять элемент
2) Таблица с vertical-align. В таблицах свойство vertical-align: middle, указывает расположение содержимого ячейки. display:table-cell. Для элемента с таким display используются те же алгоритмы вычисления ширины и центрирования, что и в TD. И, в том числе, работает vertical-align Этот способ замечателен тем, что он не требует знания высоты элементов
3) Для инлайновых элементов (display:inline/inline-block), когда у родителя вся высота в line-height, а потомок должен display:inline-block
4) свойство vertical-align центрирует сам инлайн-элемент в окружающем его тексте. НО КОНТЕЙНЕР ДОЛЖЕН БЫТЬ ЯЧЕЙКОЙ ТАБЛИЦЫ  display:table-cell
5) flex     justify-content: center; /*Центрирование по горизонтали*/, align-items: center;     /*Центрирование по вертикали */

Для горизонтального центрирования:

text-align: center – центрирует инлайн-элементы в блоке.
margin: 0 auto – центрирует блок внутри родителя. У блока должна быть указана ширина.
Для вертикального центрирования одного блока внутри другого:

Если размер центрируемого элемента известен, а родителя – нет
Родителю position:relative, потомку position:absolute; top:50% и margin-top:-<половина-высоты-потомка>. Аналогично можно отцентрировать и по горизонтали.

Если нужно отцентрировать одну строку в блоке, высота которого известна
Поставить блоку line-height: <высота>. Нужны конкретные единицы высоты (px,em…). Значение line-height:100% не будет работать, т.к. проценты берутся не от высоты блока, а от текущей line-height.

Высота родителя известна, а центрируемого элемента – нет.
Поставить line-height родителю во всю его высоту, а потомку поставить display:inline-block.

Высота обоих элементов неизвестна.
Три варианта:

Сделать элемент-родитель ячейкой таблицы при помощи display:table-cell(IE8) или реальной таблицы, и поставить ему vertical-align:middle. Отлично работает, но мы имеем дело с таблицей вместо обычного блока.
Решение со вспомогательным элементом outer:before и инлайн-блоками. Вполне универсально и не создаёт таблицу.
Решение с использованием flexbox.
`

`
Селекторы
[name="value"] – селекторы на атрибут (см. далее).
.c1.c2 – элементы одновременно с двумя классами c1 и c2

В CSS3 предусмотрено четыре вида отношений между элементами.

div p – элементы p, являющиеся потомками div.
div > p – только непосредственные потомки
div ~ p – правые соседи: все p на том же уровне вложенности, которые идут после div.
div + p – первый правый сосед: p на том же уровне вложенности, который идёт сразу после div (если есть).


Список псевдоклассов для этого:

:first-child – первый потомок своего родителя.
:last-child – последний потомок своего родителя.
:only-child – единственный потомок своего родителя, соседних элементов нет.
:nth-child(a) – потомок номер a своего родителя, например :nth-child(2) – второй потомок. Нумерация начинается с 1.
:nth-child(an+b) – расширение предыдущего селектора через указание номера потомка формулой, где a,b – константы, а под n подразумевается любое целое число.
Этот псевдокласс будет фильтровать все элементы, которые попадают под формулу при каком-либо n. Например: -:nth-child(2n) даст элементы номер 2, 4, 6…, то есть чётные.
:nth-child(2n+1) даст элементы номер 1, 3…, то есть нечётные.
:nth-child(3n+2) даст элементы номер 2, 5, 8 и так далее.

Есть аналогичные псевдоклассы, которые учитывают не всех соседей, а только с тем же тегом:

:first-of-type
:last-of-type
:only-of-type
:nth-of-type
:nth-last-of-type

На атрибут целиком:

[attr] – атрибут установлен,
[attr="val"] – атрибут равен val.
На начало атрибута:

[attr^="val"] – атрибут начинается с val, например "value".
[attr|="val"] – атрибут равен val или начинается с val-, например равен "val-1".
На содержание:

[attr*="val"] – атрибут содержит подстроку val, например равен "myvalue".
[attr~="val"] – атрибут содержит val как одно из значений через пробел.
Например: [attr~="delete"] верно для "edit delete" и неверно для "undelete" или "no-delete".

На конец атрибута:

[attr$="val"] – атрибут заканчивается на val, например равен "myval".
Другие псевдоклассы
:not(селектор) – все, кроме подходящих под селектор.
:focus – в фокусе.
:hover – под мышью.
:empty – без детей (даже без текстовых).
:checked, :disabled, :enabled – состояния INPUT.
:target – этот фильтр сработает для элемента, ID которого совпадает с анкором #... текущего URL.
Например, если на странице есть элемент с id="intro", то правило :target { color: red } подсветит его в том случае, если текущий URL имеет вид http://...#intro.

При помощи псевдоэлементов ::before и ::after можно добавлять содержимое в начало и конец элемента
`


`
Спрайты позволяют:

Сократить количество обращений к серверу.
Загрузить несколько изображений сразу, включая те, которые понадобятся в будущем.
Если у изображений сходная палитра, то объединённое изображение будет меньше по размеру, чем совокупность исходных картинок.
Если фоновое изображение нужно повторять по горизонтали или вертикали, то спрайты тоже подойдут – изображения в них нужно располагать в этом случае так, чтобы при повторении не были видны соседи, т.е., соответственно, вертикально или горизонтально, но не «решёткой».

Далее мы встретимся со спрайтами при создании интерфейсов, чтобы кнопка при наведении меняла своё изображение. Один спрайт будет содержать все состояния кнопки, а переключение внешнего вида – осуществляться при помощи сдвига background-position.
Спрайт - объединение несколько картинок в одну, чтобы загружать только её
`

`
Float
float: left | right | none | inherit;
https://learn.javascript.ru/float не изучен
`