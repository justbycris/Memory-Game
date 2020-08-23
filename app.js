let clickedCard = null;
let preventClick = false;
let combosFound = 0;



function onCardClicked(e) {
    const target = e.currentTarget;

    if (preventClick || target === clickedCard || target.className.includes('done')) {
        return;
    }

    target.className = target.className
        .replace('blank', '')
        .trim();
    target.className += ' done';

    console.log(target.getAttribute('data-emoji'));

    if (!clickedCard) {
        //if we haven't clicked a card, keep track of the card, display it's color
        clickedCard = target;
    } else if (clickedCard) {
        //if we have already clicked a card, check if thenew card matches the old card color

        if (clickedCard.getAttribute('data-emoji') !== target.getAttribute('data-emoji')) {
            preventClick = true;
            setTimeout(() => {
                clickedCard.className = clickedCard.className.replace('done', '').trim() + ' blank';
                target.className = target.className.replace('done', '').trim() + ' blank';
                clickedCard = null;
                preventClick = false;
            }, 500);
        } else {
            combosFound++;
            clickedCard = null;
            if (combosFound === 8) {
                alert('You WIN!');
            }
        }
    }
}
