// Wait for the DOM to finish loading.
// Get the button elements and add event lisitners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {
    let num1 = Math.floor(Math.random() *25) + 1;
    let num2 = Math.floor(Math.random() *25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementscore() {

}

function incrementWrongAnswer() {

}

function dispalyAdditionQuestion() {

}

function dispalySubtractQuestion() {
    
}

function dispalyMultiplyQuestion() {
    
}

