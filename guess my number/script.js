/*document.querySelector('.message').textContent = "correct number..!";
document.querySelector('.guess').textContent =  1;
document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 22;
document.querySelector('.highscore').textContent = 44;*/

let scretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(scretnumber);
let score = 20;
let highscore = 0;

function displaymessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displaymessage('NO Number..!');
    }
    else if (guess === scretnumber) {
        document.querySelector('body').style.backgroundColor = "green";
        displaymessage("correct number..!");
        document.querySelector('.number').textContent = scretnumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== scretnumber) {
        if (guess > 1) {
            displaymessage(guess > scretnumber ? "To high" : "To low");
            score--;
            document.querySelector('.score').textContent = score;
        }

        else {
            if (guess > 1) {
                displaymessage("You lost the game");
                document.querySelector('.score').textContent = 0;
            }
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    let scretnumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = "black";

});