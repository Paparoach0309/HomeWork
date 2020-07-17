// задание 1
let name,
    age,
    city,
    phone,
    email,
    company;
name = prompt("Ваше имя", '');
age = prompt("возраст", '');
city = prompt("город проживания", '');
phone = prompt("телефон", '');
email = prompt("email", '');
company = prompt("компания", '');
document.write("Меня зовут " + name + ". Мне " + age + " лет. Я проживаю в городе " + city + " и работаю в компании " + company + ". Мои контактные данные: " + phone + " " + email);
document.write("<br>");
document.write("<br>");

// задание 2
let year = 2020 - age;
document.write(name + " родился в " + year + " году.");
document.write("<br>");
document.write("<br>");

// задание 3
let str = prompt("Введите число"),
    numStr = Number(str);
document.write(typeof numStr);
document.write("<br>");
if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
    document.write('da');
} else {
    document.write('net');
}
document.write("<br>");
document.write("<br>");

// задание 4
let aa = prompt("Введите число");
aa > 0 ? document.write('Верно') : document.write('Неверно');
document.write("<br>");
document.write("<br>");

//задание 5

let a = 10,
    b = 2;
document.write(a + b);
document.write("<br>");
document.write(a - b);
document.write("<br>");
document.write(a * b);
document.write("<br>");
document.write(a / b);
document.write("<br>");
a + b > 1 ? document.write((a + b) * (a + b)) : document.write('Сумма меньше 1');
document.write("<br>");

// задание 6

if ((a > 2 && a < 11) || (b >= 6 && и < 14)) {
    document.write('Верно')
} else {
    document.write('Неверно');
}
document.write("<br>");


// задание 7
let n = prompt('Введите число от 0 до 59');
if (n >= 0 && n < 15) {
    document.write('1 четверть часа');
} else if (n >= 15 && n < 30) {
    document.write('2 четверть часа');
} else if (n >= 30 && n < 45) {
    document.write('3 четверть часа');
} else if (n >= 45 && n < 59) {
    document.write('4 четверть часа');
} else {
    document.write('Некорректное число');
}
document.write("<br>");


// задание 8

let day = prompt('Введите число от 1 до 31');
if (day >= 1 && day < 11) {
    document.write('1 декада');
} else if (day >= 11 && day < 21) {
    document.write('2 декада');
} else if (day >= 21 && day <= 31) {
    document.write('3 декада');
} else {
    document.write('Некорректное число');
}
document.write("<br>");

// задание 9

let days = prompt('Введите количество дней'),
    years = 365,
    month = 31,
    week = 7,
    hour = 24,
    minute = 1440,
    second = 86400;
if (days / years >= 1) {
    document.write(days / years + ' года')
} else {
    document.write('Меньше года');
}

document.write("<br>");
if (days / month >= 1) {
    document.write(days / month + ' месяцев')
} else {
    document.write('Меньше месяца');
}

document.write("<br>");
if (days / week >= 1) {
    document.write(days / week + ' недель')
} else {
    document.write('Меньше недели');
}

document.write("<br>");

// задание 10 


day = prompt('Введите день');
if (day >= 1 && day < 32) {
    document.write('1');
} else if (day >= 32 && day < 60) {
    document.write('2');
} else if (day >= 60 && day < 91) {
    document.write('3');
} else if (day >= 91 && day < 121) {
    document.write('4');
} else if (day >= 121 && day < 152) {
    document.write('5');
} else if (day >= 152 && day < 181) {
    document.write('6');
} else if (day >= 181 && day < 213) {
    document.write('7');
} else if (day >= 213 && day < 244) {
    document.write('8');
} else if (day >= 244 && day < 274) {
    document.write('9');
} else if (day >= 274 && day < 305) {
    document.write('10');
} else if (day >= 305 && day < 335) {
    document.write('11');
} else if (day >= 335 && day < 366) {
    document.write('12');
} else {
    document.write('В году 365 дней');
}

document.write("<br>");

var months = prompt('Введите номер месяца ', months);
var monthsNumb = Number(months);
var season = Number;
switch (monthsNumb) {
    case 1:
        season = "winter";
        break;
    case 2:
        season = "winter";
        break;
    case 3:
        season = "spring";
        break;
    case 4:
        season = "spring";
        break;
    case 5:
        season = "spring";
        break;
    case 6:
        season = "summer";
        break;
    case 7:
        season = "summer";
        break;
    case 8:
        season = "summer";
        break;
    case 9:
        season = "autumn";
        break;
    case 10:
        season = "autumn";
        break;
    case 11:
        season = "autumn";
        break;
    case 12:
        season = "winter";
        break;
    default:
        document.write('Такого месяца нет.');
}
if (monthsNumb > 0 && monthsNumb < 13) {
    document.write(season);
}