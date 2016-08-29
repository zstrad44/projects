



*/ Commented this out as it was replaced by "rock_paper_scissors_game.js"


var userChoice = function (selection) {	
if (selection === "rock") {
    document.getElementById('user_answer').innerHTML = "You threw " + selection + "!";
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} document.getElementById('computer_answer').innerHTML = "I went with " + computerChoice + "!";

compare(selection, computerChoice);

} else if (selection === "scissors") {
    document.getElementById('user_answer').innerHTML = "You threw " + selection + "!";
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} document.getElementById('computer_answer').innerHTML = "I went with " + computerChoice + "!";

compare(selection, computerChoice);

} else if (selection === "paper") {
     document.getElementById('user_answer').innerHTML = "You threw " + selection + "!";
    var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} document.getElementById('computer_answer').innerHTML = "I went with " + computerChoice + "!";

compare(selection, computerChoice);

}
};

function compare(choice1, choice2) {
    
    if (choice1 === choice2) {
        
        document.getElementById('who_won').innerHTML = "It's a tie!";
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                
                document.getElementById('who_won').innerHTML = "Rock Wins!";
                
                } else {
                
                  document.getElementById('who_won').innerHTML = "Paper Wins!";
                  
                    }
            } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                
                document.getElementById('who_won').innerHTML = "Paper Wins!";
                
                } else {
                
                document.getElementById('who_won').innerHTML = "Scissors Wins!";
                  
                    }
            } else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                
                document.getElementById('who_won').innerHTML = "Rock Wins!";
                
                } else {
                
                document.getElementById('who_won').innerHTML = "Scissors Wins!";
                    
                    }
        } else if (choice1 != "rock" || choice1 != "scissors" || choice1 != "paper" ) {                     
            alert("You did not enter a valid answer.");
            }
    }

