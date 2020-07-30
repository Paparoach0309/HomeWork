/* Задание 1.   
Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'. с помощью глобального поиска и замены.
*/
console.log('задание 1');

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));


/* Задание 2.  
В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
*/
console.log('задание 2');

let date = '2025-12-31';
console.log(date.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'));

/* Задание 3.  
Дана строка 'я учу javascript!'.  Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
*/
console.log('задание 3');

let str3 = 'я учу javascript!';
console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));
console.log(str3.substr(2, 3));
console.log(str3.substr(6, 10));
console.log(str3.slice(2, 5));
console.log(str3.slice(6, 16));

/* Задание 4.  
Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
*/
console.log('задание 4');
let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(sum));

/* Задание 5.  
Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
*/
console.log('задание 5');

function sum5(a, b) {
    let c = a - b;
    if (c >= 0) {
        return c;
    }
    if (c < 0) {
        return -c;
    }
}
console.log(sum5(3, 5));

// через Math
function sum4(a, b) {
    let c = Math.abs(a - b);
    console.log(c);
}
sum4(6, 1);

/* Задание 6.  
Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
*/
console.log('задание 6');

let dateNow = new Date;

function checkDate(num) {
    let year = String(num.getFullYear()),
        months = String(num.getMonth() + 1),
        date = String(num.getDate()),
        hours = String(num.getHours()),
        minutes = String(num.getMinutes()),
        sec = String(num.getSeconds());


    if (months.length < 2) {
        months = '0' + months;
    }
    if (date.length < 2) {
        date = '0' + date;
    }
    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (sec.length < 2) {
        sec = '0' + sec;
    }

    console.log('Дата: ' + hours + ':' + minutes + ':' + sec + ' ' + date + '.' + months + '.' + year);
}
checkDate(dateNow);

/* Задание 7.  
Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
*/
console.log('задание 7');

let str7 = 'aa aba abba abbba abca abea';
regexp = /ab+a/g;
console.log(str7.match(regexp));

/*8. Напишите ф-цию строгой проверки ввода номера телефона в международном формате  и упрощенной проверки ввода простого номера с кодом и без него. Функция должна возвращать true или false.*/

function checkPhone(number) {
    let check = /\+375-[0-9]{2}-[0-9]{7}$/;
    return check.test(number);
}

console.log(checkPhone('+375-29-0000000'));

function PhoneCheck(number) {
    let check2 = /^[0-9]{7,12}$/;
    return check2.test(number);
}

console.log(PhoneCheck('0000'));