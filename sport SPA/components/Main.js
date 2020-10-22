import football from './Football.js';

const data = JSON.parse(localStorage.getItem('data')) || [];

class Main {
    create() {
        this.element = document.createElement('main');
        this.element.classList.add('main');

        this.render();
        window.addEventListener('hashchange', _ => {
            this.render();
        });
    }

    render() {
        const self = this;

        let hash = location.hash.slice(1) || 'home';

        data.forEach(page => {
            if (page['slug'] == hash) {
                this.element.innerHTML = `
                <h1>${page['title']}</h1>
                <p>${page['content']}</p>
                `;

                if (page['slug'] == 'football') {
                    this.element.appendChild(football);
                }
            }
        });
    }

    init() {
        this.create();
        return this.element;
    }
}
const main = new Main().init();
export { main };