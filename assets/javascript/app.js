var myQuestions = [
	{
		question: "What is the name of Harry Potter's owl?",
		answers: {
			a: 'Hedwig',
			b: 'Errol',
			c: 'Crookshanks',
			d: 'Dobby'
		},
		correctAnswer: 'a'
	},
	{
		question: "What is the street address of the Dursley home?",
		answers: {
			a: '12 Grimmauld Place',
			b: '4 Privet Drive',
			c: '13 Little Hangleton',
			d: '5 Godric\'s Hollow'
		},
		correctAnswer: 'b'
	},
	{
		question: "Who is the Half Blood Prince?",
		answers: {
			a: 'Severus Snape',
			b: 'Albus Dumbledore',
			c: 'Harry Potter',
			d: 'Ron Weasley'
		},
		correctAnswer: 'a'
	},
	{
		question: "What Animagus form is taken by Sirius Black?",
		answers: {
			a: 'Werewolf',
			b: 'Stag',
			c: 'Hippogriff',
			d: 'Dog'
		},
		correctAnswer: 'd'
	},
	{
		question: "Which of these objects is not a component of the Deathly Hallows?",
		answers: {
			a: 'Elder Wand',
			b: 'Cloak of Invisibility',
			c: 'Sorcerer\'s Stone',
			d: 'Resurection Stone'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is Voldemort\'s snake\'s name?",
		answers: {
			a: 'Fluffy',
			b: 'Harry',
			c: 'Nagini',
			d: 'Hermoine'
		},
		correctAnswer: 'c'
	},
	{
		question: "What is Voldemort\'s real name?",
		answers: {
			a: 'Tom Riddle',
			b: 'Harry Potter',
			c: 'Jon Snow',
			d: 'Voldemorty'
		},
		correctAnswer: 'a'
	},
	{
		question: "Who killed Harry Potter\'s parents?",
		answers: {
			a: 'Albus Dumbledore',
			b: 'Severus Snape',
			c: 'Voldemort',
			d: 'Harry himself'
		},
		correctAnswer: 'c'
	}
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startScreen;


//build the quiz 
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		//code goes here
		var output = [];
		var answers;

		for (var i=0; i<questions.length; i++) {
			answers = [];

		for (letter in questions[i].answers){

			answers.push(
				'<br>'+
				'<label>'
					+'<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter] 
				+'</label>' 

			);
		}

		output.push(
			'<br>'+ '<div class="question">' + questions[i].question + '</div>' 
			+ '<div class="answers">' + answers.join('') + '</div>'

			);
		}

		quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
	//code goes here

	var answerContainers = quizContainer.querySelectorAll('.answers');

	var userAnswer = '';
	var numCorrect = 0;

	for (var i=0; i<questions.length; i++){
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

		//if answer is right 
		if (userAnswer===questions[i].correctAnswer){
			numCorrect++;
			answerContainers[i].style.color = 'lightgreen';
		}

		else {
			answerContainers[i].style.color = 'red';
		}
	}

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	//show the questions
	showQuestions(questions, quizContainer);
	// console.log(showQuestions);

	//show results when the user presses submit
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var timeoutHandle;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {

            if(mins > 1){

               setTimeout(function () { countdown(mins - 1); }, 1000);

            }
        }
    }
    tick();
}

countdown(2);

// $(document).ready(function() {
// 	function initialScreen () {
// 		$("#timer").hide();
// 		$("#quizContainer").hide();
		
// 	}

// 	});
// });

// initialScreen();


// //start button things are hidding, after show quiz
$(document).ready(function() {
	
	$("#start-button").click(function(){
		// $("#quizContainer").show();

		$("#container").hide();
		$("#quizContainer").show();


		
});

});
