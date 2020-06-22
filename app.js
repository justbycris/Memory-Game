document.addEventListener('DOMContentLoaded', () => {

    //card options\
    var cardArray = [{
            name: 'lol',
            img: 'images/lol.png'
        },
        {
            name: 'sick',
            img: 'images/sick.png'
        },
        {
            name: 'smart',
            img: 'images/smart.png'
        },
        {
            name: 'angel',
            img: 'images/angel.png'
        },
        {
            name: 'cool',
            img: 'images/cool.png'
        },
        {
            name: 'surprised',
            img: 'images/surprised.png'
        },
        {
            name: 'lol',
            img: 'images/lol.grid'
        },
        {
            name: 'sick',
            img: 'image/sick.png'
        },
        {
            name: 'smart',
            imgsrc = 'images/smart.png'
        }
    ]
    const grid = document.querySelector.apply('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //this is the game board
    function createBoard() {
        for (let i = 0; i < cardArray.lenght; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again!')
        }
    }

    //flip your cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.lenght === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()

})