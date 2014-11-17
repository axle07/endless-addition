// Generate page
function init() {
}

var num1 = 0;
var num2 = 0;
var problemCounter = 0;
var results = new Array();

function generateProblem() {
	num1 = Math.floor(Math.random() * 11);
	num2 = Math.floor(Math.random() * 11);
	//var operator = Array.new(+, -, *, /);
	problemCounter++;
	var div = '<div id="problem' + problemCounter + '"></div>';
	document.getElementById('content').innerHTML += div;
	document.getElementById('problem' + problemCounter).innerHTML += '<form><label>' + num1 + ' + ' + num2 + ' = ' + '</label><input type="number" id="answer' + 'problemCounter" name="answer"><input type="button" onclick="checkAnswer(this.form.answer.value)" value="Submit"><input type="button" onclick="generateProblem()" value="New Problem"></form>';

}

function checkAnswer(answer) {
	if (answer == num1 + num2) {
		alert("Correct!");
		// Dont't forget to add result to array for final score
	}	
	else {
		alert("Sorry, incorrect.  The answer is " + (num1+num2));
	}
}

function results() {
	var totalScore = 0;
	for (item in results) {
		totalScore += item;
	}
	totalScore = totalScore / results.length;

	return totalScore;
}

