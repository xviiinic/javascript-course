// console.log("=== DOM MANIPULATION AND INTERACTIVITY ===");


// document.querySelector(".className");
// document.querySelector("#idName");
// document.querySelector("tagName");
// document.querySelector('[type="text"]');
// document.querySelector("div p");

// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs.length);

// const message = document.querySelectorAll(."message");
// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";

// message.innerHTML = "<strong>Bold text from JS!</strong>";
// console.log(message.innerText);

// const input = document.querySelector("guess");

// console.log(input.value);
// input.value = "Default text";
// input.placeholder = "Type here";

// const heading = document.querySelector("hi");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

// // Click Events - user interaction

// const button = document.querySelector(#btn);
// const message = document.querySelector(".message");

// button.addEventListener("click", function () {
//     console.log("Button was clicked!");
//     message.textContent = "You clicked the button!";
//     nessage.style.color = "green";
// });

// let clickCount = 0;
// button.addEventListener("click", function () {
//     clickCount++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// // Input Events
// const input = document.querySelector(".guess");
// input.addEventListener("input", function () {
//     const userText = input.value;
//     message.textContent = `You typed: ${userText}`;
//     message.style.fontSize = `${userText.length + 10}px`;
// });

// input.addEventListener("keydown", function (event) {
//     console.log(`Key pressed: ${event.key}`);

//     if (event.key === "Enter") {
//         message.textContent = `You pressed Enter! Text was: ${input.value}`;
//         input.value = "";
//     }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// Select all the necessary HTML elements
const player1ScoreEl = document.querySelector('#score-1');
const player2ScoreEl = document.querySelector('#score-2');
const player1Btn = document.querySelector('.btn-add[data-player="1"]');
const player2Btn = document.querySelector('.btn-add[data-player="2"]');
const resetBtn = document.querySelector('#btn-reset');
const winningScoreInput = document.querySelector('#winning-score');
const statusEl = document.querySelector('.status');
const winnerEl = document.querySelector('.winner');
const winnerNameEl = document.querySelector('.winner-name');
const playersContainer = document.querySelectorAll('.player');

// Initialize game variables
let player1Score = 0;
let player2Score = 0;
let winningScore = parseInt(winningScoreInput.value);
let isGameOver = false;

// Function to reset the game to its initial state
const resetGame = () => {
  // Reset scores and game state
  player1Score = 0;
  player2Score = 0;
  isGameOver = false;

  // Update the score displays
  player1ScoreEl.textContent = player1Score;
  player2ScoreEl.textContent = player2Score;

  // Re-enable player buttons
  player1Btn.disabled = false;
  player2Btn.disabled = false;

  // Reset display styles
  playersContainer.forEach(player => {
    player.classList.remove('winning', 'losing');
  });

  // Hide the winner message
  winnerEl.classList.add('hidden');
};

// Function to check for a winner after each score update
const checkWinner = () => {
  if (player1Score >= winningScore) {
    endGame(1); // Player 1 wins
  } else if (player2Score >= winningScore) {
    endGame(2); // Player 2 wins
  }
};

// Function to end the game and declare the winner
const endGame = (winner) => {
  isGameOver = true;

  // Disable the score buttons
  player1Btn.disabled = true;
  player2Btn.disabled = true;

  // Add winning/losing classes for visual feedback
  if (winner === 1) {
    playersContainer[0].classList.add('winning');
    playersContainer[1].classList.add('losing');
    winnerNameEl.textContent = 'Player 1';
  } else {
    playersContainer[0].classList.add('losing');
    playersContainer[1].classList.add('winning');
    winnerNameEl.textContent = 'Player 2';
  }

  // Display the winner message
  winnerEl.classList.remove('hidden');
};

// Add event listener for Player 1's button
player1Btn.addEventListener('click', () => {
  if (!isGameOver) {
    player1Score++;
    player1ScoreEl.textContent = player1Score;
    checkWinner();
  }
});

// Add event listener for Player 2's button
player2Btn.addEventListener('click', () => {
  if (!isGameOver) {
    player2Score++;
    player2ScoreEl.textContent = player2Score;
    checkWinner();
  }
});

// Add event listener for the Reset button
resetBtn.addEventListener('click', resetGame);

// Add event listener for the "Points to Win" input
winningScoreInput.addEventListener('change', (e) => {
  const newWinningScore = parseInt(e.target.value);
  // Ensure the new score is valid and update the game state
  if (!isNaN(newWinningScore) && newWinningScore > 0) {
    winningScore = newWinningScore;
    statusEl.querySelector('.target').textContent = winningScore;
    resetGame(); // Reset the game with the new winning score
  } else {
    // If the input is invalid, reset it to a default value
    e.target.value = 5;
    winningScore = 5;
    statusEl.querySelector('.target').textContent = winningScore;
    resetGame();
  }
});