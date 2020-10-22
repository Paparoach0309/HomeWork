const Football = function() {
    let stadiums = [];

    this.GetStadiums = async function() {
        await fetch('https://myfakeapi.com/api/football/stadiums')
            .then(response => {
                return response.text();
            })
            .then(result => {
                stadiums = JSON.parse(result);
                localStorage.setItem('stadiums', result);
                this.getFootball();
            });
    };

    this.getFootball = function() {
        console.log(stadiums);
    };

    this.create = function() {
        this.element = document.createElement('football');
        this.element.classList.add('football');
    }

    this.init = function() {
        this.create();
        if (stadiums.length == 0) this.GetStadiums();

        return this.element;
    }
};

const football = new Football().init();
export default football;