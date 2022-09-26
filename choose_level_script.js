window.info.gameStatus = '';
window.info.gameStatus = 'choose_level';

const info = window.info;

const firstLevel = document.querySelector('.first');
const secondLevel = document.querySelector('.second');
const thirdLevel = document.querySelector('.third');
const startButton = document.querySelector('.start');

firstLevel.addEventListener('click', () => {
    info.level = "";
    info.level = 1;
});

secondLevel.addEventListener('click', () => {
    info.level = "";
    info.level = 2;
});

thirdLevel.addEventListener('click', () => {
    info.level = "";
    info.level = 3;
});


startButton.addEventListener('click', () => {
    console.log(info);
    if (info.level === 1) {
        window.application.renderScreen('game_level_first');
    };

    if (info.level === 2){
        window.application.renderScreen('game_level_second');
    }

    if(info.level === 3){
        window.application.renderScreen('game_level_third');
    }
})