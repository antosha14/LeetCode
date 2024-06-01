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
let range = {
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

