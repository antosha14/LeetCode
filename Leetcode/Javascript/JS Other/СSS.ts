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
`