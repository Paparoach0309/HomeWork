/* Задание 1.   Напишите ф-цию, запрашивающую имя, фамилию, отчество и номер группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции»  *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович        *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль.*/
console.log('задание 1 ');

function frame(homeWork, group, fullName) {
    homeWork = homeWork || prompt('Введите тему ДЗ', "Функции");
    group = group || prompt('Введите номер группы', "FE104");
    fullName = fullName || prompt('Введите ФИО', "Фамилия Имя Отчество");
    let str1 = "",
        str2 = '* Домашняя работа: ' + homeWork,
        str3 = '* Выполнил: студент группы ' + group,
        str4 = '* ' + fullName,
        str5 = "",
        space = ' ',
        star = '*',
        maxLength = 0;

    if (str2.length >= str3.length && str2.length >= str4.length) {
        str2 = str2 + " " + star;
        maxLength = str2.length;
        str3 = str3 + space.repeat(maxLength - str3.length - 1) + star;
        str4 = str4 + space.repeat(maxLength - str4.length - 1) + star;
    } else if (str3.length >= str2.length && str3.length >= str4.length) {
        str3 = str3 + " " + star;
        maxLength = str3.length;
        str2 = str2 + space.repeat(maxLength - str2.length - 1) + star;
        str4 = str4 + space.repeat(maxLength - str4.length - 1) + star;
    } else if (str4.length >= str2.length && str4.length >= str3.length) {
        str4 = str4 + star;
        maxLength = str4.length;
        str2 = str2 + space.repeat(maxLength - str2.length - 1) + star;
        str3 = str3 + space.repeat(maxLength - str3.length - 1) + star;
    }

    let topArr = [],
        botArr = [];
    for (let i = 0; i < maxLength - 1; i++) {
        topArr.push(star);
        botArr.push(star);
    }

    str1 = topArr.join('');
    str5 = botArr.join('');
    console.log(str1 + '\n' + str2 + '\n' + str3 + '\n' + str4 + '\n' + str5);
}
frame();


/* Задание 2.  Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:

     *
    ***
   *****
  *******
 *********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник.*/
console.log('задание 2 ');

function triangular(params) {
    params = params || prompt('Введите высоту строк', "5");
    let str = '';
    for (let i = 1; i <= params; i++) {
        str = '';
        for (let j = 1; j <= params - i; j++)
            str += ' ';

        for (let j = 1; j <= i + i - 1; j++)
            str += "*";
        console.log(str);
    }
}
triangular();

function revTrian(params) {
    for (let i = params - 1; i >= 1; i--) {
        strin = '';
        for (let j = i; j <= params; j++) strin += ' ';
        for (let j = i + i - 1; j >= 1; j--) strin += "*";
        console.log(strin);
    }
}
revTrian(6);


/* Задание 3.  Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной
«собачки», знака подчеркивания, дефиса и точки, причем они не могут быть
первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п.
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку;
c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.*/
console.log('задание 3 ');

function validateEmail(email) {
    let error = false,
        arrTrueChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '@', '_', '-', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0;; i++) {
        if (email[i] == undefined) break;
        if (arrTrueChar.indexOf(email[i]) == -1) error = true;
        if (email[i] == '.' && (email[i - 1] == '.' || email[i + 1] == '.')) error = true;
        if (email[i] == '@' && (email[i - 1] == '.' || email[i + 1] == '.')) error = true;
        if (email[i] == '@' && (email[i - 1] == '_' || email[i + 1] == '_')) error = true;
        if (email[i] == '@' && (email[i - 1] == '@' || email[i + 1] == '@')) error = true;
        if (email[i] == '-' && (email[i - 1] == '-' || email[i + 1] == '-')) error = true;

        // часть b
        if (email.indexOf('@') < 3) error = true;
        if (!isNaN(email[0])) error = true;
        // часть с

        if (email[i] == '@' && email[i] == '@') {

        }
    }
    return error ? 'email false' : 'email true';
}
console.log(validateEmail('name@gmail.ru'));