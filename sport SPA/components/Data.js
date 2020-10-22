const data = async function() {
    return await fetch('/data/pages.json')
        .then(response => {
            return response.text();
        });

};

export default data();