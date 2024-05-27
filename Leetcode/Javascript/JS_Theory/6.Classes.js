



`
Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

writable – если true, свойство можно изменить, иначе оно только для чтения.
enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
`

`
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName); 
Object.defineProperty(user, "name", {
  value: "John"
}); Поставить на параметр дескриптор
если какой-либо флаг не указан явно, ему присваивается значение false.
Object.defineProperty(user, "name", {
  writable: false
}); //свойство доступно только для чтения
Неперечислимые свойства также не возвращаются Object.keys
Ошибки отображаются только в строгом режиме
`

`
Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).
Вместе с Object.defineProperties этот метод можно использовать для клонирования объекта вместе с его флагами:
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
`

`
Object.preventExtensions(obj)
Запрещает добавлять новые свойства в объект.
Object.seal(obj)
Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
Object.freeze(obj)
Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
А также есть методы для их проверки:

Object.isExtensible(obj)
Возвращает false, если добавление свойств запрещено, иначе true.
Object.isSealed(obj)
Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
Object.isFrozen(obj)
Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.
На практике эти методы используются редко.
`

`
Геттеры и Сеттеры
Геттер срабатывает, когда obj.propName читается, сеттер – когда значение присваивается.
let obj = {
  get propName() {
    // геттер, срабатывает при чтении obj.propName
  },

  set propName(value) {
    // сеттер, срабатывает при записи obj.propName = value
  }
};
`

`
Свойства-аксессоры не имеют value и writable, но взамен предлагают функции get и set.

То есть, дескриптор аксессора может иметь:

get – функция без аргументов, которая сработает при чтении свойства,
set – функция, принимающая один аргумент, вызываемая при присвоении свойства,
enumerable – то же самое, что и для свойств-данных,
configurable – то же самое, что и для свойств-данных.
При попытке указать и get, и value в одном дескрипторе будет ошибка.
`

`
Аксессоры можно использовать для валидации
Например, если мы хотим запретить устанавливать короткое имя для user, мы можем использовать сеттер name для проверки, а само значение хранить в отдельном свойстве _name
  // возраст рассчитывается из текущей даты и дня рождения
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
`

`
В JavaScript объекты имеют специальное скрытое свойство [[Prototype]] (так оно названо в спецификации), которое либо равно null, либо ссылается на другой объект. Этот объект называется «прототип»
Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа.
Свойство [[Prototype]] является внутренним и скрытым, но есть много способов задать его.
let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
`
`
Есть только два ограничения:
Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу.
Значение __proto__ может быть объектом или null. Другие типы игнорируются.
Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
Обратите внимание, что __proto__ — не то же самое, что внутреннее свойство [[Prototype]]. Это геттер/сеттер для [[Prototype]]
Object.getPrototypeOf/Object.setPrototypeOf
Прототип используется только для чтения свойств.
Операции записи/удаления работают напрямую с объектом.
Свойства-аксессоры – исключение, так как запись в него обрабатывается функцией-сеттером. То есть это фактически вызов функции.

// срабатывает сеттер прототипа если он там есть
admin.fullName = "Alice Cooper"; // (**)
ПРОТОТИПЫ НИКАК НЕ ВЛИЯЮТ НА this
Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.
Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.
Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.
`
let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }

`
Object.keys, Object.values не проходятся по инаследованным пропертям
`
`Ситуация ниже происходит потому что stomach нету на детях, и его идут искать в прототип`
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple
// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple

`
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]"
`

`
F.prototype используется только в момент вызова new F
F.prototype используется только при вызове new F и присваивается в качестве свойства [[Prototype]] нового объекта.

Если после создания свойство F.prototype изменится (F.prototype = <другой объект>), то новые объекты, созданные с помощью new F, будут иметь в качестве [[Prototype]] другой объект, а уже существующие объекты сохранят старый.
У каждой функции (за исключением стрелочных) по умолчанию уже есть свойство "prototype".
По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

function Rabbit() {}
/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/
Встроенные прототипы можно изменять.
В современном программировании есть только один случай, в котором одобряется изменение встроенных прототипов. Это создание полифилов.
`
console.dir // Для анализа прототипов в консоли

`
Например, если мы создаём объект, похожий на массив (псевдомассив), мы можем скопировать некоторые методы из Array в этот объект.
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert( obj.join(',') ); // Hello,world!
`


`
// клон obj c тем же прототипом (с поверхностным копированием свойств)
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
Не меняйте [[Prototype]] существующих объектов, если важна скорость Object.setPrototypeOf или obj.__proto__ очень медленные операции
__proto__ должно быть или объектом или null
`