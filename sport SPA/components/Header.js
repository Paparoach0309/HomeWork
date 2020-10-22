import { nav } from './Nav.js';

class Header {
    create() {
        this.element = document.createElement('header');
        this.element.classList.add('header');
        this.element.innerHTML = `
            <div class = "conteiner">
                <div class = "logo">
                    <a href = "/"><img src = "./logo.jpg"/></a>
                </div>

                ${nav.outerHTML}
                
            </div>
        `;
    }
    init() {
        this.create();
        return this.element;
    }
}
const header = new Header().init();
export { header };