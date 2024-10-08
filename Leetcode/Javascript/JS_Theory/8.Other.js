`
Чтобы try..catch работал, код должен быть выполнимым. Другими словами, это должен быть корректный JavaScript-код.
Он не сработает, если код синтаксически неверен, например, содержит несовпадающее количество фигурных скобок
try..catch работает синхронно
Исключение, которое произойдёт в коде, запланированном «на будущее», например в setTimeout, try..catch не поймает:
`

`
Для всех встроенных ошибок этот объект имеет два основных свойства:
name
Имя ошибки. Например, для неопределённой переменной это "ReferenceError".
message
Текстовое сообщение о деталях ошибки.
`

`
Техника «проброс исключения» выглядит так:

Блок catch получает все ошибки.
В блоке catch(err) {...} мы анализируем объект ошибки err.
Если мы не знаем как её обработать, тогда делаем throw err.
`

`
Блок finally срабатывает при любом выходе из try..catch, в том числе и return.

В примере ниже из try происходит return, но finally получает управление до того, как контроль возвращается во внешний код.
`

`
Для объявления генератора используется специальная синтаксическая конструкция: function*, которая называется «функция-генератор».
"функция-генератор" создаёт объект "генератор"
`

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
// "функция-генератор" создаёт объект "генератор"
let generator1 = generateSequence();
alert(generator1); // [object Generator]

`
Основным методом генератора является next(). При вызове он запускает выполнение кода до ближайшей инструкции yield <значение>
Результатом метода next() всегда является объект с двумя свойствами:
value: значение из yield.
done: true, если выполнение функции завершено, иначе false.
`

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }
  
let generator = generateSequence();
  
let sequence = [0, ...generateSequence()];
for(let value of generator) {
    alert(value); // 1, затем 2
}

`
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5
Для генераторов есть особый синтаксис yield*, который позволяет «вкладывать» генераторы один в другой (осуществлять их композицию).
`

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }

// В next можно передавать значение, которое вернётся на месте yield
// Передаём вопрос во внешний код и ожидаем ответа
let result = yield "2 + 2 = ?"; // (*)
`Для того, чтобы передать ошибку в yield, нам нужно вызвать generator.throw(err). В таком случае исключение err возникнет на строке с yield.`

`
Чтобы сделать объект итерируемым асинхронно:

Используется Symbol.asyncIterator вместо Symbol.iterator.
next() должен возвращать промис.
Чтобы перебрать такой объект, используется цикл for await (let item of iterable).
`
let range = {
    from: 1,
    to: 5,
  
    // for await..of вызывает этот метод один раз в самом начале
    [Symbol.asyncIterator]() { // (1)
      // ...возвращает объект-итератор:
      // далее for await..of работает только с этим объектом,
      // запрашивая у него следующие значения вызовом next()
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается на каждой итерации цикла for await..of
        async next() { // (2)
          // должен возвращать значение как объект {done:.., value :...}
          // (автоматически оборачивается в промис с помощью async)
  
          // можно использовать await внутри для асинхронности:
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  (async () => {
  
    for await (let value of range) { // (4)
      alert(value); // 1,2,3,4,5
    }
  
  })()

`
Оператор расширения ... не работает асинхронно
`

//асинхронная версия
let range2 = {
    from: 1,
    to: 5,
  
    async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
      for(let value = this.from; value <= this.to; value++) {
  
        // пауза между значениями, ожидание
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        yield value;
      }
    }
  };
  
  (async () => {
  
    for await (let value of range) {
      alert(value); // 1, потом 2, потом 3, потом 4, потом 5
    }
  
  })();

`
Модуль – это просто файл. Один скрипт – это один модуль.
Директива import загружает модуль по пути ./sayHi.js относительно текущего файла и записывает экспортированную функцию sayHi в соответствующую переменную
Так как модули поддерживают ряд специальных ключевых слов, и у них есть ряд особенностей, то необходимо явно сказать браузеру, что скрипт является модулем, при помощи атрибута <script type="module">.
Если вы попытаетесь открыть веб-страницу локально, через протокол file://, вы обнаружите, что директивы import/export не работают. Для тестирования модулей используйте локальный веб-сервер, например, static-server или используйте возможности «живого сервера» вашего редактора, например, расширение Live Server для VS Code.
В модулях Всегда «use strict»

Каждый модуль имеет свою собственную область видимости.
В браузере также существует независимая область видимости для каждого скрипта <script type="module"> Если нам нужно сделать глобальную переменную уровня всей страницы, можно явно присвоить её объекту window. Но это должно быть исключением, требующим веской причины.
Код в модуле выполняется только один раз при импорте. Если один и тот же модуль используется в нескольких местах, то его код выполнится только один раз

Во-первых, если при запуске модуля возникают побочные эффекты, например выдаётся сообщение, то импорт модуля в нескольких местах покажет его только один раз – при первом импорте:
// 📁 alert.js
alert("Модуль выполнен!");
// Импорт одного и того же модуля в разных файлах
// 📁 1.js
import ./alert.js; // Модуль выполнен!
// 📁 2.js
import ./alert.js; // (ничего не покажет)
На практике, задача кода модуля – это обычно инициализация, создание внутренних структур данных, а если мы хотим, чтобы что-то можно было использовать много раз, то экспортируем это.

Все импортёры получат один-единственный объект admin
// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';
alert(admin.name); // Pete

// Оба файла, 1.js и 2.js, импортируют один и тот же объект
// Изменения, сделанные в 1.js, будут видны в 2.js
Объект import.meta содержит информацию о текущем модуле.
В модуле на верхнем уровне this не определён (undefined).
Сравним с не-модульными скриптами, там this – глобальный объект.
`

`
Свойства модулей 
Модули всегда выполняются в отложенном (deferred) режиме, точно так же, как скрипты с атрибутом defer
Другими словами:
загрузка внешних модулей, таких как <script type="module" src="...">, не блокирует обработку HTML.
модули, даже если загрузились быстро, ожидают полной загрузки HTML документа, и только затем выполняются.
сохраняется относительный порядок скриптов: скрипты, которые идут раньше в документе, выполняются раньше.
Как побочный эффект, модули всегда видят полностью загруженную HTML-страницу, включая элементы под ними.
<!-- загружаются зависимости (analytics.js) и скрипт запускается -->
<!-- модуль не ожидает загрузки документа или других тэгов <script> -->
<script async type="module">
  import {counter} from './analytics.js';

  counter.count();
</script>
`
`
Не ставится точка с запятой после экспорта класса/функции
import * as say from './say.js';
import {sayHi as hi, sayBye as bye} from './say.js';
export {sayHi as hi, sayBye as bye};
Теперь hi и bye – официальные имена для внешнего кода, их нужно использовать при импорте
export {sayHi as default}; // альтернатива
import {default as User, sayHi} from './user.js';
И, наконец, если мы импортируем всё как объект import *, тогда его свойство default – как раз и будет экспортом по умолчанию
export {sayHi} from './say.js'; // реэкспортировать sayHi
export {default as User} from './user.js'; // реэкспортировать default
Чтобы реэкспортировать экспорт по умолчанию, мы должны написать export {default as User}, как в примере выше. Такая вот особенность синтаксиса.
`

`
Выражение import(module) загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты.

let {hi, bye} = await import('./say.js');
hi();
bye();
Динамический импорт работает в обычных скриптах, он не требует указания script type="module".
`

`
Встроенная функция eval позволяет выполнять строку кода.
Строка кода может быть большой, содержать переводы строк, объявления функций, переменные и т.п.
Результатом eval будет результат выполнения последней инструкции.
let value = eval('let i = 0; ++i');
alert(value); // 1
`

`
Код в eval выполняется в текущем лексическом окружении, поэтому ему доступны внешние переменные
let a = 1;
function f() {
  let a = 2;

  eval('alert(a)'); // 2
}
f();
Значения внешних переменных можно изменять
В строгом режиме у eval имеется своё лексическое окружение. Поэтому функции и переменные, объявленные внутри eval, нельзя увидеть снаружи
Если код внутри eval не использует внешние переменные, то вызывайте его так – window.eval(...). Это выполнит код в глобальной области видимости
let x = 1;
{
  let x = 5;
  window.eval('alert(x)'); // 1 (глобальная переменная)
}

Если коду внутри eval нужны локальные переменные, поменяйте eval на new Function и передавайте необходимые данные как аргументы:
let f = new Function('a', 'alert(a)');
f(5); // 5
`

`
Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).
`
function curry(f) { // curry(f) выполняет каррирование
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
// использование
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
alert( curriedSum(1)(2) ); // 3
function sum(a, b) {
  return a + b;
}

//Пример из Lodash
let curriedSum2 = _.curry(sum); // используем _.curry из lodash
alert( curriedSum(1, 2) ); // 3, можно вызывать как обычно
alert( curriedSum(1)(2) ); // 3, а можно частично


// ССЫЛОЧНЫЙ ТИП
let user = {
  name: "Джон",
  hi() { alert(this.name); },
  bye() { alert("Пока"); }
};

user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
(user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!

`
Присмотревшись поближе, в выражении obj.method() можно заметить две операции:

Сначала оператор точка '.' возвращает свойство объекта – его метод (obj.method).
Затем скобки () вызывают этот метод (исполняется код метода).
Итак, каким же образом информация о this передаётся из первой части во вторую?

Если мы поместим эти операции в отдельные строки, то значение this, естественно, будет потеряно
let user = {
  name: "John",
  hi() { alert(this.name); }
};

// разделим получение метода объекта и его вызов в разных строках
let hi = user.hi;
hi(); // Ошибка, потому что значением this является undefined
Для работы вызовов типа user.hi(), JavaScript использует трюк – точка '.' возвращает не саму функцию, а специальное значение «ссылочного типа», называемого Reference Type.
Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:
base – это объект.
name – это имя свойства объекта.
strict – это режим исполнения. Является true, если действует строгий режим (use strict).
Результатом доступа к свойству user.hi является не функция, а значение ссылочного типа.
При любой другой операции, например, присваивании hi = user.hi, ссылочный тип заменяется на собственно значение user.hi (функцию), и дальше работа уже идёт только с ней. Поэтому дальнейший вызов происходит уже без this.

Таким образом, значение this передаётся правильно, только если функция вызывается напрямую с использованием синтаксиса точки obj.method() или квадратных скобок obj['method']() (они делают то же самое). Существуют различные способы решения этой проблемы: одним из таких является func.bind().
`

`
Чтобы создать значение типа BigInt, необходимо добавить n в конец числового литерала или вызвать функцию BigInt, которая создаст число типа BigInt из переданного аргумента. Аргументом может быть число, строка и др.
const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10); // то же самое, что и 10n
Обратите внимание: операция деления 5/2 возвращает округлённый результат, без дробной части. Все операции с числами типа bigint возвращают bigint
В математических операциях мы не можем смешивать bigint и обычные числа
Конвертирование bigint в число всегда происходит неявно и без генерации ошибок, но если значение bigint слишком велико и не подходит под тип number, то дополнительные биты будут отброшены, так что следует быть осторожными с такими преобразованиями.
Операции сравнения, такие как <, >, работают с bigint и обычными числами как обычно
В if или любом другом логическом операторе bigint число ведёт себя как обычное число.
К примеру, в if bigint 0n преобразуется в false, другие значения преобразуются в true
`

`
в JavaScript основаны на Юникоде: каждый символ представляет из себя последовательность байтов из 1-4 байтов
Поэтому редкие символы, требующие более 2 байт, кодируются парой 2-байтовых символов, которые называются «суррогатной парой».
Побочным эффектом является то, что длина таких символов равна 2
Части суррогатной пары не имеют никакого значения друг без друга
Для работы с парами были добавлены методы String.fromCodePoint и str.codePointAt.
С помощью специально отведнных символов можно добавить всякие чёрточки к символам, но поэтому 2 одинаковых символа могут выглядеть одинаково, к примеру с нижней и верхней чертой одновременно (просто поменять порядок)
Для этого есть метод normalize который схлопнет 3 символа в 1
alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
`

`
Intl.Collator
Умеет правильно сравнивать и сортировать строки.
Intl.DateTimeFormat
Умеет форматировать дату и время в соответствии с нужным языком.
Intl.NumberFormat
Умеет форматировать числа в соответствии с нужным языком.

Локаль – первый и самый важный аргумент всех методов, связанных с интернационализацией.
Локаль описывается строкой из трёх компонентов, которые разделяются дефисом:
Код языка.
Код способа записи.
Код страны.

На практике не всегда указаны три, обычно меньше:
ru – русский язык, без уточнений.
en-GB – английский язык, используемый в Англии (GB).
en-US – английский язык, используемый в США (US).
zh-Hans-CN – китайский язык (zh), записываемый упрощённой иероглифической письменностью (Hans), используемый в Китае.

localeMatcher – вспомогательная настройка, которую тоже можно везде указать, она определяет способ подбора локали, если желаемая недоступна.
У него два значения:
"lookup" – означает простейший порядок поиска путём обрезания суффикса, например zh-Hans-CN → zh-Hans → zh → локаль по умолчанию.
"best fit" – использует встроенные алгоритмы и предпочтения браузера (или другого окружения) для выбора подходящей локали.

let collator = new Intl.Collator();
alert( "ёжик" > "яблоко" ); // true (ёжик больше, что неверно)
alert( collator.compare("ёжик", "яблоко") ); // -1 (ёжик меньше, верно)

ИНТЕРНАЛИЗАЦИЯ ДАТЫ
let date = new Date(2014, 11, 31, 12, 30, 0);
let formatter = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});
alert( formatter.format(date) ); // среда, 31 декабря 2014 г.

let formatter = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "GBP"
});
alert( formatter.format(1234.5) ); // 1 234,5 £

String.prototype.localeCompare(that [, locales [, options]])
Date.prototype.toLocaleString([locales [, options]]) Форматирует дату в соответствии с локалью
Date.prototype.toLocaleDateString([locales [, options]]) То же, что и выше, но опции по умолчанию включают в себя год, месяц, день
Date.prototype.toLocaleTimeString([locales [, options]]) То же, что и выше, но опции по умолчанию включают в себя часы, минуты, секунды
Number.prototype.toLocaleString([locales [, options]]) Форматирует число, используя опции Intl.NumberFormat.
`

`
//  в переменной user находится сильная ссылка на объект
let user = { name: "John" };
// скопировали сильную ссылку на объект в переменную admin
let admin = user;
// перезапишем значение переменной user
user = null;
// объект всё ещё доступен через переменную admin
let admin = new WeakRef(user);
Метод deref() возвращает объект-референт, на который ссылается WeakRef, в случае, если объект всё ещё находится в памяти. Если объект был удалён сборщиком мусора, – метод deref() вернёт undefined
WeakRef обычно используется для создания кешей или ассоциативных массивов, в которых хранятся ресурсоёмкие объекты.
`

`
Пример №1: применение WeakRef для кеширования
`
function fetchImg() {
  // абстрактная функция для загрузки изображений...
}

function weakRefCache(fetchImg) { // (1)
  const imgCache = new Map(); // (2)

  return (imgName) => { // (3)
    const cachedImg = imgCache.get(imgName); // (4)

    if (cachedImg?.deref()) { // (5)
      return cachedImg?.deref();
    }

    const newImg = fetchImg(imgName); // (6)
    imgCache.set(imgName, new WeakRef(newImg)); // (7)

    return newImg;
  };
}

const getCachedImg2 = weakRefCache(fetchImg);

`
Пример №2: применение WeakRef для отслеживания объектов DOM
Колбэк очистки (финализатор) – это функция, которая выполняется в случае, если объект, зарегистрированный в FinalizationRegistry, удаляется из памяти сборщиком мусора
УЛУЧШЕННОЕ КЭШИРОВАНИЕ
`
function cleanupCallback(heldValue) {
  // код колбэка очистки
}

const registry = new FinalizationRegistry(cleanupCallback);

function fetchImg() {
  // абстрактная функция для загрузки изображений...
}

function weakRefCache(fetchImg) {
  const imgCache = new Map();

  const registry = new FinalizationRegistry((imgName) => { // (1)
    const cachedImg = imgCache.get(imgName);
    if (cachedImg && !cachedImg.deref()) imgCache.delete(imgName);
  });

  return (imgName) => {
    const cachedImg = imgCache.get(imgName);

    if (cachedImg?.deref()) {
      return cachedImg?.deref();
    }

    const newImg = fetchImg(imgName);
    imgCache.set(imgName, new WeakRef(newImg));
    registry.register(newImg, imgName); // (2)

    return newImg;
  };
}

const getCachedImg = weakRefCache(fetchImg);

`
let target = {};
let proxy = new Proxy(target, {}); // пустой handler

proxy.test = 5; // записываем в прокси (1)
alert(target.test); // 5, свойство появилось в target!

alert(proxy.test); // 5, мы также можем прочитать его из прокси (2)

for(let key in proxy) alert(key); // test, итерация работает (3)
`

`
ЛОВУШКА GET
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // значение по умолчанию
    }
  }
});

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0 (нет такого элемента)
`

`
ЛОВУШКА ДЛЯ SET
let numbers = [];
numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // для перехвата записи свойства
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // добавилось успешно
numbers.push(2); // добавилось успешно
alert("Длина: " + numbers.length); // 2

numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)
Современные интерпретаторы JavaScript поддерживают приватные свойства в классах. Названия таких свойств должны начинаться с символа #
`