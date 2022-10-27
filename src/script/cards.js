
    // const card = document.createElement('input');
    // card.type = 'checkbox';
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('cardBack');
    card.classList.add('card_hidden');
    

    console.log(card);

    card.addEventListener('click', () => {
        card.classList.add('flip-vertical-right');
        card.classList.toggle('cardBack');
        card.classList.toggle('AS')  
    })

    

    app.appendChild(card);

    console.log('object');

