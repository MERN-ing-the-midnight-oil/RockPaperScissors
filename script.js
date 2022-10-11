




// State: what data do we need to keep track of?
var wins = 0;
var losses = 0;
var ties = 0;
var userChoice = "";
var computerChoice = "";


// 1. Show prompt asking for R,P,S (UI)
// 2. User submits selection (Event)
// 3. Store value in userChoice (Update state)
var userChoice = window.prompt("Rock, Paper, Scissors, Shoot! (Enter 'R', 'P', or 'S')")
console.log((userChoice)+" is the user's choice");


// HANDLE EVENT

// 4. Generate a random computer selection (Update state)

var compOptions = ["R","P","S"]

var computerChoiceNum = Math.floor(Math.random()*compOptions.length);

//console.log((computerChoiceNum)+" is the computer's choice number ")


var computerChoice = compOptions[computerChoiceNum] // gives a letter R, P, or S from compOptions array using a random index number 

//console.log((computerChoice)+" is the computer's choice letter ")

window.alert("The Computer has chosen "+(computerChoice))
// 5. Alert with computer choice (UI)

//make an two-character array that gets the user's choice and computer's choice side-by-side called match
var match = [userChoice,computerChoice].toString();   //I had to use toString to turn match into a string, because you can't compare arrays directly as it turns out.

//NONE OF THE FOLLOWING IS WORKING
        if (match)==="R,R";{
            //add one to number of ties
            var ties = ties+1
        }
        if (match)==="R,P";{
            //add one to number of losses
            var losses = losses +1
        }
        if (match)==="R,S";{
            //add one to number of wins
            var wins = wins+1
        }


        if (match)==="P,R";{
            //add one to number of wins
            var wins = wins+1
        }
        if (match)==="P,P";{
            //add one to number of ties
            var ties = ties+1
        }
        if (match)==="P,S";{
            //add one to number of losses
            var losses = losses +1
        }


        if (match)==="S,R";{
            //add one to number of  losses
            var losses = losses +1
        }
        if (match)==="S,P";{
            //add one to nubmer of wins
            var wins = wins+1
        }
        if (match)==="S,S";{
            //add one to number of ties
            var ties = ties+1
        }

window.alert("You have won "+wins+" games so far.")
window.alert("You have lost "+losses+" games so far.")
window.alert("You have tied "+ties+" games so far.")


// 6. Compare (Update State)
//    6.1 if user rock:
//      6.1.1 if cpu rock then add 1 to draws
//      6.1.2 if cpu scissors then add 1 to wins
//      6.1.3 if cpu paper then add one to losses
//    6.2 if user paper:
//      6.2.1 if cpu rock then add 1 to wins
//      6.2.2 if cpu scissors then add 1 to losses
//      6.2.3 if cpu paper then add one to draws
//    6.3 if user scissors:
//      6.3.1 if cpu rock then add 1 to losses
//      6.3.2 if cpu scissors then add 1 to draws
//      6.3.3 if cpu paper then add one to wins
// 7. Alert user of outcome (UI)
// 5. Alert user of scoreboard (UI)
// 6. Confirm play again (Event)
// HANDLE EVENT
//    6.1 if true, start over

/************************************************
 * Questions:
 * 1. How can we trigger the game so that we can restart it later?
 * 2. How do we randomly choose an answer?
 */
