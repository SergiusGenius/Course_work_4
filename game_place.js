const app = document.querySelector('.app');


function renderFirstLevel() {
    app.textContent = "";
    info.gameStatus = "";
    info.gameStatus = 'game_first_level';

    console.log(info);
}

window.application.screens['game_level_first'] = renderFirstLevel;

function renderSecondLevel() {
    app.textContent = "";
    info.gameStatus = "";
    info.gameStatus = 'game_second_level';

    console.log(info);
}

window.application.screens['game_level_second'] = renderSecondLevel;

function renderThirdLevel() {
    app.textContent = "";
    info.gameStatus = "";
    info.gameStatus = 'game_third_level';

    console.log(info);
}

window.application.screens['game_level_third'] = renderThirdLevel;