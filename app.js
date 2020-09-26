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
        //if have already clicked a card, check if the new card matches the old card color

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
                document.getElementById('message').innerHTML = 'YOU WON!';
            }
        }
    }
}



// Fucntion to shuffle the array content 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number  
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

// Function to show the result 
function show() {
    var arr = [1, 2, 3, 4, 5, 6, 7]
    var arr1 = shuffleArray(arr)

    document.write("After shuffling: ", arr1)
}
