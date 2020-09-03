/* Задание 1.   
Реализуйте экземпляр любого объекта. Объект должен иметь, как внутренние, так и доступные для пользователя, свойства и методы. 
Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл. двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад (ввод информации о скорости движения), расчет пройденных километров. */
console.log('задание 1');

let Car = function() {
    this.get = function() {
        this.model = prompt('Введите марку авто');
        this.number = prompt('Введите номер авто');
        this.engine = prompt("Что с движком? (заведен, заглушен)", 'заведен');
        this.transmission = prompt("Выберите передачу (вперед, назад, нейтраль)", 'вперед');
        this.speed = +prompt('Укажите скорость', '30');
        this.time = +prompt('Время в пути', '30');
        this.calk();
    };
    this.calk = function() {
        switch (this.engine) {
            case "заведен":
                switch (this.transmission) {
                    case "вперед":
                        if (this.speed >= 0) {
                            this.result = this.speed * this.time / 60;
                            console.log(this.result);
                        } else {
                            console.log('Некорректное значение');
                        }
                        break;
                    case "назад":
                        if (this.speed < 0) {
                            this.result = (this.speed * this.time) / 60;
                            console.log(Math.abs(this.result));
                        } else {
                            console.log('Некорректное значение');
                        }
                        break;
                    default:
                        this.result = 0;
                        break;
                }
                break;

            case "заглушен":
                alert('Заведите двигатель');
                break;
        }
        this.show();
    };
    this.show = function() {
        alert('Ваш ' + this.model + ' номер ' + this.number + ' проедет ' + this.result + ' километров');
    }
}

let volkswagen = new Car();
volkswagen.get();