// Get "player1_name" and "player2_name" from localStorage
const player1Name = localStorage.getItem("player1Name");
const player2Name = localStorage.getItem("player2Name");

// Initialize player scores
let player1Score = 0;
let player2Score = 0;

// Update the player names on the page
document.getElementById("player1_name").innerHTML = player1Name + " : ";
document.getElementById("player2_name").innerHTML = player2Name + " : ";

// Update the player scores on the page
document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;

// Set the current question turn
let questionTurn = "player1";

// Set the current answer turn
let answerTurn = "player2";

// Generate a new multiplication question
function send() {
  // Convert the number inputs to integers
  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);

  // Calculate the correct answer
  const actualAnswer = number1 * number2;

  // Generate the question HTML
  const questionHtml = `
    <h4>${number1} X ${number2}</h4>
    <br>Answer : <input type="text" id="input_check_box">
    <br><br><button class="btn btn-info" onclick="check()">Check</button>
  `;

  // Update the question output on the page
  document.getElementById("output").innerHTML = questionHtml;

  // Clear the number inputs
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

// Check the user's answer
function check() {
  // Get the user's answer
  const userAnswer = document.getElementById("input_check_box").value;

  // Check if the user's answer is correct
  if (userAnswer === actualAnswer) {
    // If the user's answer is correct, increment the score of the current answer turn
    if (answerTurn === "player1") {
      player1Score++;
    } else {
      player2Score++;
    }

    // Update the player scores on the page
    document.getElementById("player1_score").innerHTML = player1Score;
    document.getElementById("player2_score").innerHTML = player2Score;
  }

  // Update the question and answer turns
  if (questionTurn === "player1") {
    questionTurn = "player2";
    document.getElementById("player_question").innerHTML = `Question Turn - ${player2Name}`;
  } else {
    questionTurn = "player1";
    document.getElementById("player_question").innerHTML = `Question Turn - ${player1Name}`;
  }

  if (answerTurn === "player1") {
    answerTurn = "player2";
    document.getElementById("player_answer").innerHTML = `Answer Turn - ${player2Name}`;
  } else {
    answerTurn = "player1";
    document.getElementById("player_answer").innerHTML = `Answer Turn - ${player1Name}`;
  }

  // Clear the question output on the page
  document.getElementById("output").innerHTML = "";
}

// Check if the user has entered an answer before calling the check function
document.getElementById("input_check_box").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    check();
  }
});

