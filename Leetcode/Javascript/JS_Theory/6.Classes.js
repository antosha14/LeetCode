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