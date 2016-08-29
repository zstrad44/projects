
/*
var test = prompt("what's up?");



var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);



function userChoice("selection") {

if (selection === "rock") {
    compare(selection, computerChoice);
    alert("hello");
} else if (selection === "scissors") {
    compare(selection, computerChoice);
} else if (selection === "paper") {
    compare(selection, computerChoice);
}
}

function compare(choice1, choice2) {
    
    if (choice1 === choice2) {
        
        alert("The result is a tie!");
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                alert("rock wins") ;
                } else {
                alert("paper wins") ;    
                    }
            } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                alert("paper wins");
                } else {
                alert("scissors wins");    
                    }
            } else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                alert("rock wins");
                } else {
                alert("scissors wins");    
                    }
        } else if (choice1 != "rock" || choice1 != "scissors" || choice1 != "paper" ) {                     
            alert("You did not enter a valid answer.");
            }
    }
//compare(userChoice, computerChoice);


//var userChoice = prompt("Do you choose rock, paper or scissors?");







/*
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} //console.log("Computer: " + computerChoice);



function userChoice(selection) {

if (selection === "rock") {
    compare(selection, computerChoice);
    alert("hello");
} else if (selection === "scissors") {
    compare(selection, computerChoice);
} else if (selection === "paper") {
    compare(selection, computerChoice);
}
}

function compare(choice1, choice2) {
    
    if (choice1 === choice2) {
        
        alert("The result is a tie!");
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                alert("rock wins") ;
                } else {
                alert("paper wins") ;    
                    }
            } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                alert("paper wins");
                } else {
                alert("scissors wins");    
                    }
            } else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                alert("rock wins");
                } else {
                alert("scissors wins");    
                    }
        } else if (choice1 != "rock" || choice1 != "scissors" || choice1 != "paper" ) {                     
            alert("You did not enter a valid answer.");
            }
    }