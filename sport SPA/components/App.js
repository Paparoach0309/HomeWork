import { header } from './Header.js';
import { main } from './Main.js';
import { footer } from './Footer.js';

class App {
    create() {
        this.element = document.createElement('div');
        this.element.classList.add('app');
        //this.element.innerHTML = `<h1>Онлайн продажа билетов нa спортивные мероприятия</h1>`;
    }

    render() {

        this.element.appendChild(header);
        this.element.appendChild(main);
        this.element.appendChild(footer);

        document.body.appendChild(this.element);
    }

    init() {
        const self = this;
        import ('./Head.js')
        .then(function(module) {

                const title = module.title;
                title.innerHTML = 'online ticket selling';

                import ('./Data.js')
                .then(function(module) {

                    module.default.then(data => {
                        localStorage.setItem('data', data);

                        self.create();
                        self.render();
                    });

                });
            })
            .catch(function() {

            });
    }
}

export default new App().init();