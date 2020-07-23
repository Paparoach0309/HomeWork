// Задание 1.   Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
document.write('задание 1 ' + '<br/>');

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
}

// Задание 2.   Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.

document.write('<br/>');
document.write('задание 2 ' + '<br/>');
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] >= -10 && arr2[i] <= -3) {
        document.write(arr2[i]);
    }

}

// Задание 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.

document.write('<br/>');
document.write('задание 3 ' + '<br/>');
let arr1 = [],
    result = 0;
for (let i = 23; i <= 57; i++) {
    arr1.push(i);
}
for (let i = 0; i < arr1.length; i++) {
    result += arr1[i];
}
document.write(arr1 + '<br/>');
document.write(result);
document.write('<br/>');


let arr3 = [],
    j = 23;
while (j <= 57) {
    arr3.push(j);
    j++;
}
document.write(arr3);

// Задание 4.  Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

document.write('<br/>');
document.write('задание 4 ' + '<br/>');

let arr4 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i][0] == 1 || arr4[i][0] == 2 || arr4[i][0] == 5) {
        document.write(arr4[i]);
    }
}

// Задание 5.  Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
document.write('<br/>');
document.write('задание 5 ' + '<br/>');

let arr5 = ['Mon', 'Tue', 'We', 'Th', 'Fr', 'Sa', 'Su'];
for (let i = 0; i < arr5.length; i++)
    if (arr5[i] == 'Sa' || arr5[i] == 'Su') {
        document.write('<b>' + arr5[i] + '</b>');
    } else {
        document.write(arr5[i]);
    }

    // Задание 6.  Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,и получите последний элемент массива, используя свойство length.
document.write('<br/>');
document.write('задание 6 ' + '<br/>');

let arr6 = [2, 4, 'text', true, '87', "word"];
arr6[arr6.length] = 43;
console.log(arr6);
document.write(arr6[arr6.length - 1]);

// Задание 7. Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.

document.write('<br/>');
document.write('задание 7 ' + '<br/>');

let arr7 = [],
    num7;
for (let i = 0;; i++) {
    num7 = +prompt('введите число');
    if (num7) {
        arr7.push(num7);
    } else {
        break;
    }
}
document.write(arr7);
arr7.sort(function(a, b) {
    return a - b;
});
document.write('<br/>');
document.write(arr7);

// Задание 8.  Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.

document.write('<br/>');
document.write('задание 8 ' + '<br/>');
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
arr8.reverse();
console.log(arr8);

// методом while

let num8 = arr8.length,
    newArr = [];
while (num8 > 0) {
    num8--;
    newArr.unshift(arr8[num8]);
}
document.write(newArr);


// Задание 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

document.write('<br/>');
document.write('задание 9 ' + '<br/>');

let arr9 = [5, 9, 21, , , 9, 78, , , , 6],
    sum = 0;
for (let i = 0; i < arr9.length - 1; i++) {
    if (arr9[i] == undefined) {
        sum++;
    }
}
document.write(sum);

// Задание 10.  Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].

document.write('<br/>');
document.write('задание 10 ' + '<br/>');
let arr10 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2],
    summa = 0,
    firstInd = arr10.indexOf(0),
    lastInd = arr10.lastIndexOf(0);
for (let i = 0; i < arr10.length; i++) {
    if (i > firstInd && i < lastInd) {
        summa += arr10[i];
    }

}
document.write(summa);

// Задание 11.