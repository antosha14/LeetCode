`
PROPERTIES FOR CALCULATION

1) offsetTop/offsetLeft - сдвиги относительно верхнего левого угла позиционированного родителя
2) offsetWidth/Height - ширина и высота элемента, включая border (Ширина + padding + border)
3) clientTop/clientLeft - borderTop/borderLeft (НО + полоса прокрутки) отступы внутренней части элемента от внешней.
4) clientWidth/Height - offsetWidth/Height минус border (и полоса прокрутки, т.е clientTop/Left)
5) contentWidth/Height - client минус padding   
6) scrollWidth/Height - аналог clientWidth/Height НО С УЧЁТОМ ДОСТУПНОЙ К ПРОКРУТКЕ ЧАСТИ
7) scrollLeft/scrollTop - ширина/высота невидимой, прокрученной в данный момент, части элемента слева и сверху.
`

`
Прокрутка страницы
window.innerWidth // полная ширина окна
document.documentElement.clientWidth // ширина окна за вычетом полосы прокрутки
Высоту документа получаем через функцию максимума 3 величин
elem.scrollLeft/scrollTop
window.pageYOffset 
window.pageXOffset
window.scrollTo - прокручивает страницу на абсолютные координаты
window.scrollBy - прокручивает страницу относительно её текущего положения. Например, scrollBy(0,10) прокручивает страницу на 10px вниз.
elem.scrollIntoView - прокручивает страницу, чтобы elem оказался вверху
`

`
Позиционирование по координатам
elem.getBoundingClientRect() - x/y – X/Y-координаты начала прямоугольника относительно окна, left/right – X-координата левой/правой границы прямоугольника
`


`
Positioning:
static - normal, top/bottom and so on don't affect
absolute -  relative to the nearest positioned ANCESTOR 
relative - RELATIVE TO NORMAL POSITION
fixed - elative to the VIEWPORT
sticky - based on the user's scroll position.
`