//задание 1 

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num);

//задание 2

let hours = 23,
    minutes = 49,
    seconds = 20;
console.log(hours + ":" + minutes + ":" + seconds);

//задание 3

let string = 'abcde';

if (string[0] == 'a') {
    console.log('да');
} else {
    console.log('нет');
}

//задание 4

let strng = '«В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек.';
if (strng.indexOf('богатый купец') > 0) {
    console.log('богатый купец');
} else {
    console.log('Не найдено');
}

//задание 5

let str1 = '342';
numStr1 = Number(str1);
console.log(+str1[0] + +str1[1] + +str1[2]);

//задание 6
if (a == 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

//задание 7

if (a == 'test') {
    console.log('Верно');
} else {
    console.log('Не верно');
}

//задание 8

if (a <= 1, b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

//задание 9

let firstName,
    login,
    pass;
firstName = prompt('Ваше имя');
login = prompt('Введите логин');
pass = prompt('Ваш пароль');
if (login == 'admin' && pass == 'nimda') {
    console.log('Добро пожаловать, ' + name + '! Вы успешно вошли на сайт');
} else {
    console.log(firstName + ' , вы неверно ввели логин или пароль!');
}

//задание 10

let months1 = prompt('Введите номер месяца');
let monthsNumber = Number(months);
switch (monthsNumber) {
    case 1:
    case 2:
    case 12:
        console.log('1');
        break;
    case 3:
    case 4:
    case 5:
        console.log('2');
        break;
    case 6:
    case 7:
    case 8:
        console.log('3');
        break;
    case 9:
    case 10:
    case 11:
        console.log('4');
        break;

    default:
        console.log('некорректное значение');
}