let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

document.getElementById('next-lbl').innerText = nextPlayer;

// use the value stored in the nextPlayer variable to indicate who the next player is

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for (let i = 0; i < 9; i++) {
       let cell = 'c' + (i+1); //creates the buttons c1, c2, c3, etc.
       let newBtn = document.createElement('button');
       newBtn.innerText = '[]';
       document.getElementById(cell).appendChild(newBtn); //put button in the variable on html file
   }

}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button'); //groups buttons into one variable (array)
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    let evnt = event.target;
    if (nextPlayer == 'X'){
        evnt.innerText = 'X';
        evnt.disabled = true;
        nextPlayer = 'O';
        document.getElementById('next-lbl').innerText = nextPlayer;

    } else {
        evnt.innerText = 'O';
        evnt.disabled = true;
        nextPlayer = 'X';
        document.getElementById('next-lbl').innerText = nextPlayer;
    }


    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl')
        lbl.innerText = 'Game over';
        
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let counter = 0;
    for(let i = 0; i < btns.length; i++) {
        if (btns[i].disabled == true) {
            counter++;
        }
    }
    if (counter == btns.length){
        return true;
    }
    return false;
}