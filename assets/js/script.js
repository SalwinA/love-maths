// Wait for the DOM to finish loading.
// Get the button elements and add event lisitners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * Main game loop called when scrpit is loaded and users answers is processed.
 */

function runGame(gameType) {

    // Creates two random numbers.
    let num1 = Math.floor(Math.random() *25) + 1;
    let num2 = Math.floor(Math.random() *25) + 1;

    if(gameType === "addition") {
        dispalyAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}. Aborting!`;

    }


}

/**
 * Checks the answer from the user with th calculate answer array first element.
 */

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer =  calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        alert(`Hey! You got it ryt! :D`);
    }else {
        alert(`Oops...You answered ${userAnswer}. The correct answer is ${calculatedAnswer}.`);
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Getting operands(random numbers) and operators(plus, minus etc)
 * fromt he DOM and returning the correct answer.
 */

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return[operand1 + operand2, "addition"];
    }else {
        alert(`Unimpemented operator ${operator}`);
        throw `Unimpemented operator ${operator}. Aborting!`;
    }

}

function incrementscore() {

}

function incrementWrongAnswer() {

}

function dispalyAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function dispalySubtractQuestion() {
    
}

function dispalyMultiplyQuestion() {
    
}

