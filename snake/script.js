let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 1; i < 101; i++) {
    let cell = document.createElement('div');
    field.appendChild(cell);
    cell.classList.add('cell');
}

let count = document.querySelectorAll('.cell');
let x = 1,
    y = 10;

for (let i = 0; i < 100; i++) {
    if (x > 10) {
        x = 1,
            y--;
    }
    count[i].setAttribute('positionX', x);
    count[i].setAttribute('positionY', y);
    x++;
}

const createSnake = function() {
    let positionX = 5,
        positionY = 5;
    return [positionX, positionY];
}
let snake = document.querySelector('[positionx="5"][positiony="5"]');
snake.classList.add('snake');

let foodBus;
const createFoodBus = function() {
    const regenBus = function() {
        let positionX = Math.round(Math.random() * (10 - 1) + 1),
            positionY = Math.round(Math.random() * (10 - 1) + 1);
        return [positionX, positionY];
    }
}

createFoodBus();