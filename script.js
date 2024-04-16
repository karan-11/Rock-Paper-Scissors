let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg")
const user = document.querySelector("#user-score");
const computer = document.querySelector("#comp-score");


const genComputer= ()=>{
    let options = ["rock","paper","scissors"]
    const random = Math.floor(Math.random() *3);
    return options[random];
}

const draw = () =>{
    message.innerText = "Game was draw. Play Again"
    message.style.backgroundColor = "#081b31"
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        user.innerText = userScore;
        message.innerText = "Congratulations!!! You Win";
        message.style.backgroundColor = "green"
    }else{
        compScore++;
        computer.innerText = compScore;
        message.innerText = "Computer Wins";
        message.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>{
    let compChoice = genComputer();
    if(userChoice==compChoice){
        draw();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissors" ? false : true;
        } else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

