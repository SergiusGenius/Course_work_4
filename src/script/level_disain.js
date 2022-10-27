function renderLevelScreen() {
    const app = document.querySelector('.app');
    app.textContent = "";
    

    const infoBox = document.createElement('div');
    infoBox.classList.add('infoBox');
    
    
    function init() {
        const timer = document.createElement('div');
        timer.classList.add('timer');
        let min = 00;
        let sec = 00;
        timer.textContent = `${min}.${sec}`;
        //setInterval(tickTack, 1000);
       function tickTack() {
        if(sec < 60) {
            sec++;
            timer.textContent = `${min}.${sec}`;
        }
        if (sec >= 60) {
            sec = 00;
            min++;
            timer.textContent = `${min}.${sec}`;
        }
    }
    infoBox.appendChild(timer);
    }
    init();

    const reStart = document.createElement('button');
    reStart.classList.add('reStart');
    reStart.textContent = 'Начать заново!';


    app.appendChild(infoBox);
    infoBox.appendChild(reStart);

    const cardsField = document.

    console.log(window.information);
}


window.application.screens['level_design'] = renderLevelScreen;


window.application.renderScreen('level_design');