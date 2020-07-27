let height = 5;
let str = '';

for (let i = 1; i <= height; i++) {
    str = '';

    for (let j = 1; j <= height - i; j++) str += ' ';

    for (let j = 1; j <= i + i - 1; j++) str += '^';

    console.log(str);
}

/*let heigth = 5,
    str = '';
for (let i = 0; i <= heigth; i++) {
    for (let j = 0; j < i; j++) {
        console.log(num += 2);

    }
}*/