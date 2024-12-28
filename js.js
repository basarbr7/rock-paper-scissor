
let result = document.querySelector(".result")
let score = document.querySelector(".score") 
let bothChoice= document.querySelector(".bothChoice")

let userId = document.querySelectorAll("#userId .mychoice")

let userScores = 0;
let compScores = 0;


let compGenChoose = ()=>{
    let choice = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random()*3);
    return choice[index];
}

userId.forEach((action)=>{
    action.addEventListener("click", ()=>{
        let userChoice = action.getAttribute("data-value");
        let compChoice = compGenChoose();
       
        let operationResult = operation(userChoice, compChoice);

        result.innerHTML = `${operationResult}`;
        
        bothChoice.innerHTML =`<div class="text-center flex flex-col justify-center items-center">
                <img class="w-[60px]" src="images/${userChoice}-emoji.png" alt="">
                <label>Your choose</label>
            </div>
            <span class="text-3xl">Vs</span>
            <div class="text-center flex flex-col justify-center items-center">
                <img class="w-[60px]" src="images/${compChoice}-emoji.png" alt="">
                <label>computer choose</label>
            </div>`;   

        score.innerHTML = `Your scores: ${userScores}, Computer scores: ${compScores}`;

        if (userScores>=10){
            document.querySelector("#main").innerHTML = "Game over and You won the game....."
        }else if (compScores>=10){
            document.querySelector("#main").innerHTML = "Game over and Computer won the game....."
        }

    })
})


let operation = (userChoice, compChoice)=>{
    if(userChoice===compChoice){
        return `Tie`;
    }
    else if(userChoice === "rock" && compChoice === "scissors" ||
            userChoice === "paper" && compChoice === "rock" || 
            userChoice === "scissors" && compChoice === "paper"
        ){
            userScores++;
            return `You win.......`
    }
    else{
        compScores++;
        return `You lose.......`
    }
}









// function saveData() {
//     let savedData = {
//         score: score.innerHTML,
//         result: result.innerHTML,
//         bothChoice: bothChoice.innerHTML,
//     };
//     localStorage.setItem("rockpaperscissors", JSON.stringify(savedData));
// }

// function showData(){
//     let savedData = localStorage.getItem("rockpaperscissors")
//     if (savedData){
//         let parseData = JSON.parse(savedData);
//         score.innerHTML = parseData.score;
//         result.innerHTML = parseData.result;
//         bothChoice.innerHTML = parseData.bothChoice;
//     }
// }
// showData()