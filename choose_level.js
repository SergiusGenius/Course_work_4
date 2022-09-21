function renderChooseScreen() {
    const app = document.querySelector('.app');
    app.textContent = "";


    const topBox = document.createElement('div');
    topBox.classList.add('topBox');
    

    const title = document.createElement('h1');
    title.classList.add('title_level');
    title.textContent = 'Выберите сложность';

    const miniBox = document.createElement('div');
    miniBox.classList.add('mini');

    const firstButton = document.createElement('button');
    firstButton.classList.add('first');
    firstButton.classList.add('button_level');
    firstButton.textContent = '1';

    const secondButton = document.createElement('button');
    secondButton.classList.add('second');
    secondButton.classList.add('button_level');
    secondButton.textContent = '2';

    const thirdButton = document.createElement('button');
    thirdButton.classList.add('third');
    thirdButton.classList.add('button_level');
    thirdButton.textContent = '3';

    const start_button = document.createElement('button');
    start_button.classList.add('start');
    start_button.textContent = 'Старт';




    app.appendChild(topBox);
    topBox.appendChild(title);
    topBox.appendChild(miniBox);
    miniBox.appendChild(firstButton);
    miniBox.appendChild(secondButton);
    miniBox.appendChild(thirdButton);
    topBox.appendChild(start_button);
}

window.application.screens['choose_level'] = renderChooseScreen;


window.application.renderScreen('choose_level');
