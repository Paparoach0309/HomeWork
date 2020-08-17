function sendMessage(type, string) {
    let message = document.createElement('div');
    message.innerText = `${string}`;
    document.body.insertBefore(message, document.body.firstElementChild);

    message.className = type;


    setTimeout(() => message.remove(), 5000);
}

let style = document.createElement('style');
style.innerHTML = `
        .error,
        .alert,
        .msg {
            text-transform: uppercase;
            font-family: 'Arial', 'sans-serif';
            font-size: 18px;
            border-radius: 10px;
            padding: 20px 20px;
            color: black;
            text-align: center;
            width: 300px;
            position: fixed;
            left: 70%;
            border: 1px solid;
            background-color: green;
            
        }

        .error {
            font-weigth: bold;
            backgroundcolor: green;
        }

        .alert {
            font-style: italic;
            background-color: red;
        }
        
        .msg {
            background-color: blue;
        }
        `;

document.head.appendChild(style);


sendMessage('error', 'Ошибка!');
sendMessage('msg', 'Привет Мир!');
sendMessage('alert', 'Сообщение отправлено!');
sendMessage('alert', 'Вам письмо!');