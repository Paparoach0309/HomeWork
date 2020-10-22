import './Data.js';
const data = JSON.parse(localStorage.getItem('data')) || [];
class Nav {
    create() {
        this.element = document.createElement('nav');
        this.element.classList.add('nav');


        let listHtml = '';
        data.forEach(page => {
            listHtml += `<li><a href = "/#${page['slug']}">${page['shortTitle']}</a></li>`;
        });

        if (listHtml.length > 0) this.element.innerHTML = `<ul>${listHtml}</ul>`;

    }
    init() {
        this.create();
        return this.element;
    }
}
const nav = new Nav().init();
export { nav };