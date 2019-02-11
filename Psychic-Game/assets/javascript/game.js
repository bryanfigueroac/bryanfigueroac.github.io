var abc = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 0;

    var randomizer = abc[Math.floor(Math.random() * abc.length)];

    console.log(randomizer)


   document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === randomizer){
        wins++;
        alert("You win!")
    }else{
        guesses--;
        guessesLeft+++ 1;
    }

    if(guesses === 0){
        losses++
        alert("You lose!")
    }
    

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Loss: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guessesLeft').innerHTML = "Your Guesses So Far: " + guessesLeft;

}  
