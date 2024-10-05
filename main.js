// Conditionals: Switch Statements

//switch (expression or value //basically the condition) {

    //case choice1:
        // run this code
       // break;

    //case choice2:
        // run this different code
        //break;
    
    // add as many cases as needed

    //default:
        // run this code if no case matches
        // no need for a break here
//}



// Now lets bulid our game logic using switch statements





let playerOne = "scissors";
let computer = "rock";




switch (playerOne) {
        
    case computer:
        console.log("its a tie")
        break;

    case "rock":
        if (computer === "paper"){
            console.log("computer wins!")
        } else {
            console.log("playerOne wins!")
        }
        break;
    case "paper":
        if (computer === "scissors"){
            console.log("computer wins!")
        } else {
            console.log("playerOne wins!")
        }
        break;
        

    default:
        if (computer === "rock"){
            console.log("computer wins!")
        } else {
            console.log("playerOne wins!")
        }
        

}
