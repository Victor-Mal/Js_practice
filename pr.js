//1. Создать пустой массив, ноль ячеек, добавить в него цифры от 1 до 10 (push)

const numbers = [];
console.log (numbers);
for (let i = 1; i < 11; i++) {
  numbers.push (i);
}
console.log(numbers);

//2. Добавить в начало массива 0 

numbers.unshift(0);
console.log(numbers);

//3. Удалить 1 элемент с конца массива, и 1 элемент с начала

numbers.pop();
numbers.shift();
console.log(numbers);

//4. Удалить 1 элемент где нибудь в середине (splice)

numbers.splice(4, 1);
console.log(numbers);

//5. Добавить на его место в середине цифру 5 (splice)

numbers.splice(4, 0, 5);
console.log(numbers);

//6. Копировать или клонировать весь массив (slice или Object.assign)

const copy = Object.assign(numbers);
console.log(copy);

//7. У новой копии массива удалить половину элементов (array.length/2 - 1)

copy.splice(copy.length/2, );
console.log(copy);

//8. Создать пустой массив, 8 ячеек

const array = [];
array.length = 8;
console.log(array);

//9. Заполнить массив с начала до половины нулями (fill),

array.fill(0, 0, array.length/2);
console.log(array);

//10. Отфильтровать пустые ячейки (forEach+push / filter)

console.log(array.filter(function (value) {
    return value !== NaN;
}));

//11. Создать массив, 10 ячеек, числа от 1 до 10.
//На основе него создать массив квадратов значений (map).

const numbers1 = [];
for (let i = 1; i < 11; i++) {
  numbers1.push (i);
}
console.log(numbers1);

//

const pow = numbers1.map(function(num) {
    return Math.pow(num, 2);
});
console.log(pow);

//12. Перевести массив в строку, с разделителем "&&" (join)

console.log(pow.join("&&"));

//13. Создать массив продуктов, 3-5 элементов. Каждый продукт имеет свойства -
// наименование, цена, осталось ли на складе, колво на складе.

const products = [];
products.push ( {
    name: "apple",
    price: 10,
    number: 100,
    presence: true
},

 {  name: "banana",
    price: 20,
    number: 4,
    presence: true
},

 {  name: "orange",
    price: 15,
    number: 0,
    presence: false
});

console.log(products);

//14. Отфильтровать массив продуктов по тому есть ли они на складе. 
//Потом по количеству на складе больше 5 шт. (filter().filter())

console.log(products.filter((value) => {
    return value.presence === true;   
}));

console.log(products.filter((value) => {
    return value.number >= 5;   
}));

//15. Создать массив Корзина.
//Спрашивать у пользователя ид (индекс продукта) через prompt который он хочет положить в корзину.
//_Клонировать_ в корзину обьект продукта по индексу выбранному пользователем.
//



//16. Создать _шаблон_ обьекта Пользователь.
//Принимать параметры - username, age, isMale, password.
//17. В цикле (for или map) создать 5 пользователей (new User) и поместить их в массив users. Имена, возрасты, пол, и пароль пусть зависят от индекса ("username1", "username2" ...).
//
//