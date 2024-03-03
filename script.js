let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const accessUserScore = document.querySelector("#user-score");
const accessCompScore = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["Stone","Paper","Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#111344";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        accessUserScore.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice} :)`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        accessCompScore.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice} :(`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();   

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Stone") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "Stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
