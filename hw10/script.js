let images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg'
];

let num = 0;

function next() {
    let slider = document.querySelector('#slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    let slider = document.querySelector('#slider');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}