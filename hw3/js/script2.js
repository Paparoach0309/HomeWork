// Задание № 10 замена вывода цифр числа n реверс
console.log("Задание № 10");

let n10 = 256,
    StrN10 = String(n10),
    i10 = 0;
console.log("Исходное число: " + n10);

for (;; i10++) {
    if (StrN10[i10] == undefined) {
        break;
    }
}

let lenght10 = i10;

let nReverse10 = "";
for (let i10 = lenght10 - 1; i10 >= 0; i10--) {
    nReverse10 += StrN10[i10];
}

console.log("Обратное число исходному числу: " + +nReverse10);