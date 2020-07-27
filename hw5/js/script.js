// Задание 1.   Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.
console.log('задание 1 ');

function sum(a, b, c) {
    return (a - b) / c;
}
console.log(sum(54, 4, 2));

// Задание 2.  Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
console.log('задание 2 ');

function power(a) {
    return [a ** 3, a ** 2];
}
console.log(power(3).join('\n'));

// Задание 3.  Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
console.log('задание 3');

function minMax(a, b) {
    if (a < b) {
        return ['Минимальное число ' + a, 'Максимальное число ' + b];
    } else {
        return ['Минимальное число ' + b, 'Максимальное число ' + a];
    }
}
console.log(minMax(10, 5).join('\n'));


// Задание 4.  Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.
console.log('задание 4');

function createArray(a, b) {
    var array = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            array.push(i);
        }
        return array;
    } else {
        for (let i = a; i >= b; i--) {
            array.push(i);
        }
        return array;
    }
}

function output(array) {
    array = array || createArray(a = +prompt('Введите первое число'), b = +prompt('Введите второе число'));
    return array;
}
console.log(output());

// Задание 5.  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
console.log('задание 5');

function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(5));

// Задание 6.  Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
console.log('задание 6');

function getArray(arrNum) {

    arrNum = arrNum || output();
    let arr6 = [];
    for (let i = 1; i <= arrNum.length; i++) {
        if (isEven(arrNum[i]) == false) {
            arr6.push(i);
        } else {
            continue;
        }
    }
    return arr6;
}
console.log(getArray());

// Задание 7.  Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
console.log('задание 7');

function pyramid(a) {

}