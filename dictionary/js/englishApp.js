const englishApp = _ => {

    const dictionary = document.querySelector('.dictionary');
    const inputWordRu = dictionary.querySelector('input[name="word_ru"]');
    const inputWordEn = dictionary.querySelector('input[name="word_en"]');

    const getLocalStorage = _ => {
        const words = JSON.parse(window.localStorage.getItem('dictionary_words'));

        if (words.length >= 0) return words;
        return false;
    };

    const updateLocalStorage = _ => {
        const wordsJson = JSON.stringify(words);

        window.localStorage.setItem('dictionary_words', wordsJson);
    };

    const remove = event => {
        const id = parseInt(event.target.closest('li').id.replace('word_', ''));

        words.splice(id, 1);
        updateLocalStorage();
        updateList();
    };

    const voice = event => {
        const id = parseInt(event.target.closest('li').id.replace('word_', ''));
        const word = words[id];

        let speech = new SpeechSynthesisUtterance(word.en);
        speech.voice = window.speechSynthesis.getVoices()[0];
        window.speechSynthesis.speak(speech);
    };

    const correct = event => {
        const id = parseInt(event.target.closest('li').id.replace('word_', ''));

        const inputWordRu = dictionary.querySelector('input[name="word_ru"]');
        const inputWordEn = dictionary.querySelector('input[name="word_en"]');

        inputWordRu.value = words[id].ru;
        inputWordEn.value = words[id].en;
    };

    const add = event => {
        event.preventDefault();

        const word = {
            ru: inputWordRu.value,
            en: inputWordEn.value
        };

        words.push(word);

        updateLocalStorage();
        updateList();
    };

    const updateList = _ => {
        const list = dictionary.querySelector('.dictionary_list ul');
        list.innerHTML = '';

        words.forEach((word, index) => {
            const li = document.createElement('li');
            const wordElem = document.createElement('div');
            const wordBtns = document.createElement('div');
            const wordBtnVoice = document.createElement('button');
            const wordBtnDelete = document.createElement('button');
            const wordBtnСorrect = document.createElement('button');

            wordElem.classList.add('word');
            wordBtns.classList.add('word_buttons');

            wordBtnVoice.classList.add('word_btn', 'word_btn_voice');
            wordBtnDelete.classList.add('word_btn', 'word_btn_delete');
            wordBtnСorrect.classList.add('word_btn', 'word_btn_correct');

            wordBtnVoice.innerHTML = 'Voice';
            wordBtnDelete.innerHTML = 'Delete';
            wordBtnСorrect.innerHTML = 'Сorrect';

            li.appendChild(wordElem);
            li.appendChild(wordBtns);

            wordBtns.appendChild(wordBtnVoice);
            wordBtns.appendChild(wordBtnDelete);
            wordBtns.appendChild(wordBtnСorrect);

            li.id = `word_${index}`;


            wordElem.innerHTML = `<div class="word_en">${word.en}</div>
            <div class="word_ru">${word.ru}</div>`;

            list.appendChild(li);

            wordBtnDelete.addEventListener('click', remove);
            wordBtnVoice.addEventListener('click', voice);
            wordBtnСorrect.addEventListener('click', correct);
        });
    };

    const words = getLocalStorage() || [];

    if (words.length > 0) updateList();

    dictionary.querySelector('form[name="word_add"]').addEventListener('submit', add);
};