$(document).ready(function(){

$("#start").on("click", function() {
	game.start();

})

$(document).on('click','#end',function(){
	game.done();
})

// Questions, answer choices and correct answer array
	var questions = [

{
	question: "Who was the legendary Benedictine monk who invented champagne?",
	answers:["Madame Vueve de Rothschild","Salisbury Chandon","Richard Moet","Dom Perignon"],
	correctAnswer: "Dom Perignon"

}, {
	question: "Name the largest freshwater lake in the world?",
	answers:["Lake Erie","Lake Superior","Lake Huron","Lake Niagara Falls"],
	correctAnswer: "Lake Superior"

}, {
	question: "Where would you find the Sea of Tranquility?",
	answers:["The Moon","Washington, DC, USA","New York City, USA","Rome, Italy"],
	correctAnswer: "The Moon"


}, {
	question: "What is the world's longest river?",
	answers:["Amazon","Nile","Ganges","Yangtze"],
	correctAnswer: "Amazon"


}, {
	question: "Who played Neo in The Matrix?",
	answers:["Keanu Reeves","Tom Cruise","Samuel L Jackson","The Rock"],
	correctAnswer: "Keanu Reeves"


}, {
	question: "Which chess piece can only move diagonally?",
	answers:["bishop","king","queen","castle"],
	correctAnswer: "bishop"

}, {
	question: "If you had Lafite-Rothschild on your dinner table, what would it be?",
	answers:["vase centerpiece","wine","port","liqueur"],
	correctAnswer: "wine"

}, {
	question: "Who founded PayPal with Peter Thiel?",
	answers:["Elon Musk","Marc Andressen","Mark Zuckerberg","Evan Spigel"],
	correctAnswer: "Elon Musk"

}];


// A way to track correct and incorrect answers
// a way to time the game with a countdown and end the game if time expires

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter <= 0){
			console.log("time is up");
			game.done();
		}
	},

	start: function() {
		// countdown 
		timer = setInterval(game.countdown,1000);

		//a way for button wrapper to include counter id to add time remaining to the game
		$("#button-wrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");

		$("#start").remove();

		//for loop for function, append to the button wrapper each question
		for (var i = 0; i < questions.length; i++) {
			$("#button-wrapper").append("<h2>"+questions[i].question+"</h2>");

			// append each question with a radio type with a name that is equal to number of the question and the answers
			for (var j = 0; j < questions[i].answers.length; j++) {
				$("#button-wrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);

			}
		}
		$("#button-wrapper").append("<br><button id='end'>DONE</button>");
	},

	// A way to find the answer from each question that is checked
	done: function(){

		$.each($("input[name='question-0']:checked"), function(){
			if ($(this).val()==questions[0].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-1']:checked"), function(){
			if ($(this).val()==questions[1].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-2']:checked"), function(){
			if ($(this).val()==questions[2].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-3']:checked"), function(){
			if ($(this).val()==questions[3].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-4']:checked"), function(){
			if ($(this).val()==questions[4].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-5']:checked"), function(){
			if ($(this).val()==questions[5].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-6']:checked"), function(){
			if ($(this).val()==questions[6].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-7']:checked"), function(){
			if ($(this).val()==questions[7].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		// get results of the game and display
		this.result();
		},

		result: function(){
			clearInterval(timer);
			$("#button-wrapper h2").remove();

			$("#button-wrapper").html("<h2>Finished!!</h2>");
			$("#button-wrapper").append("<h3>Correct Answers: "+this.correct + "</h3>");
			$("#button-wrapper").append("<h3>Incorrect Answers: "+this.incorrect + "</h3>");

			// find out how many questions are correct and incorrect and calculate unanswered
			$("#button-wrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
		}

	
}



});


