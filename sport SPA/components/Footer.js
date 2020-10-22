class Footer {
    create() {
        this.element = document.createElement('footer');
        this.element.classList.add('footer');
        this.element.innerHTML = `
            <span>&copy; 2020 Все права защищены</span>
        `;
    }
    init() {
        this.create();
        return this.element;
    }
}
const footer = new Footer().init();
export { footer };