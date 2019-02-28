$(".timer").hide();
$("#restart-button").hide();

$(document).ready(function() {

//VARIABLES
var triviaQA = [
	{
		question: "Who is the Great Evil King?",
		answerChoices: ["Ganondorf", "Zelda", "Darunia", "Malon"],
		answer: 0
	},
	{
		question: "What is the name of the hero's Legendary Blade?",
		answerChoices: ["Goron Sword", "Master Sword", "Fairy Sword", "Deku Stick"],
		answer: 1
	},
	{
		question: "What is your horse's name?",
		answerChoices: ["Cucoo", "Impa", "Rupee", "Epona"],
		answer: 3
	},
	{
		question: "How many spiritual stones are in Ocarina of Time?",
		answerChoices: ["1", "2", "3", "4"],
		answer: 2	
	},
	{
		question: "What is the Mask-Salesmen's most prized possesion in Majoras Mask?",
		answerChoices: ["Ocarina", "Majoras Mask", "Deku Pipes", "Lon-Lon Milk"],
		answer: 1
	},
	{
		question: "What is the name of the shield that reflects light?",
		answerChoices: ["Mirror Shield", "Hyrule Shield", "Diety Shield", "Deku Shield"],
		answer: 0	
	},
	{
		question: "Who is the princess of Hyrule?",
		answerChoices: ["Zelda", "Ruto", "Nabooru", "Saria"],
		answer: 0
	},
	{
		question: "What power of the Triforce does Link posses?",
		answerChoices: ["Strength", "Courage", "Wisdom", "None"],
		answer: 1
	},
];

var questionNumber = 0;
var correctAnswers;
var incorrectAnswers;
var noAnswer;
var answerChosen;
var counter = 20;
var countDown; 
var answered = false;
var gifArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
var backgroundaudio = new Audio("assets/town.mp3")
backgroundaudio.loop = true;
var buttonaudio = new Audio("assets/rupee.wav")


//START BUTTON

$('#start-button').on('click', function(){
	$(this).hide();
	$(".timer").show();
	gameHTML();
	timer();
	correctAnswers = 0;
	incorrectAnswers = 0;
	noAnswer = 0;
	backgroundaudio.play();
});

//RESTART BUTTON

$('#restart-button').on('click', function(){
	$(this).hide();
	reset();
});

//QUESTION AND ANSWERS HTML 

function gameHTML() {
	$(".question").html("<p class='question-text'>" + triviaQA[questionNumber].question + "<p>");
	answerInput = "<p class='answerChoice'>" + triviaQA[questionNumber].answerChoices[0] + "</p><p class='answerChoice'>"+ triviaQA[questionNumber].answerChoices[1] +"</p><p class='answerChoice'>"+ triviaQA[questionNumber].answerChoices[2] +"</p><p class='answerChoice'>"+ triviaQA[questionNumber].answerChoices[3] +"</p>";
	$(".answers").html(answerInput);
};

//RESULT PAGE

function correctAnswer() {
	correctAnswers++;
	console.log(correctAnswers);
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("<p class='answer-message'>Good Job!</p>" + '<img src = "assets/images/'+ gifArray[questionNumber] +'.gif" class="gif" width = "250px">');
	setTimeout(questionAnswered, 1000*3);
};

function wrongAnswer() {
	incorrectAnswers++;
	console.log(incorrectAnswers);
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("<p class='answer-message'>Try Again!</p>" + "<p class='correct-message'>The correct answer is </p>" + "<p class ='correct-answer'>" + triviaQA[questionNumber].answerChoices[triviaQA[questionNumber].answer] + ".</p>" + '<img src = "assets/images/'+ gifArray[questionNumber] +'.gif" class="gif" width = "250px">');
	setTimeout(questionAnswered, 1000*3);
};

function timeoutAnswer() {
	noAnswer++;
	console.log(noAnswer);
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("<p class='answer-message'>Times Up!</p>" + "<p class='correct-message'>The correct answer is </p>" + "<p class ='correct-answer'>" + triviaQA[questionNumber].answerChoices[triviaQA[questionNumber].answer] + ".</p>" + '<img src = "assets/images/'+ gifArray[questionNumber] +'.gif" class="gif" width = "250px">');
	setTimeout(questionAnswered, 1000*3);
};

function reset() {
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").empty();

	questionNumber = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
	noAnswer = 0;
	counter = 20;

	gameHTML();
	timer();
};

function gameOver() {
	$(".question").empty();
	$(".timer").hide();
	$(".answers").empty();
	$(".result-page").html("<p class='results'>Your Results:</p>" + "<p class='results'>Correct Answers: " + correctAnswers + "</p>" + "<p class='results'>Wrong Answers: " + incorrectAnswers + "</p>"+ "<p class='results'>Unanswered: " + noAnswer + "</p>");
	$("#restart-button").show();
};
//TIMER

function timer() {
	countDown = setInterval(quizCounter, 1000);
	function quizCounter () {
		if (counter === 0) {
			clearInterval(countDown);
			timeoutAnswer();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer-number").html(counter);
	};
};

function questionAnswered() {
	if (questionNumber < 7) {
		questionNumber++;	
		console.log(questionNumber);
		gameHTML();
		$(".result-page").empty();
		$(".timer").show();
		counter = 20;
		timer();
	} else {
		gameOver();
	}
};

//ONCLICK ANSWERS AND MOVES TO NEXT QUESTION

$(".answers").on("click", ".answerChoice", function(event) {
	answerChoice = $(this).text();
	rightAnswer = triviaQA[questionNumber].answerChoices[triviaQA[questionNumber].answer];
	console.log(answerChoice);
	console.log(rightAnswer);
	buttonaudio.play();
	clearInterval(countDown)
	if (answerChoice === rightAnswer) {
		correctAnswer();
	} else if (answerChoice !== rightAnswer) {
		wrongAnswer();
	} 
});

});