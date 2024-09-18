 //Create a variable of type ARRAY called options to store values "rock", "paper", "scissors".
 const options = ["rock", "paper", "scissors"];



 //Create a function which works out the user's input
 let userInput = () => {
         //Get buttons
         const rockBtn = document.getElementsByClassName("card")[0];
         const paperBtn = document.getElementsByClassName("card")[1];
         const scissorsBtn = document.getElementsByClassName("card")[2];

         //add event listeners to buttons
         rockBtn.addEventListener('click', () => handleUserChoice(options[0]));
         paperBtn.addEventListener('click', () => handleUserChoice(options[1]));
         scissorsBtn.addEventListener('click', () => handleUserChoice(options[2]));
 }

 //Create a function which generates a random number between 0 and 2 which will dictate what option 
 //the bot will pick. Then store the result in the bot variable.

 let generateBotChoice = () => {
         //Generate a random value between 0 and 2
         let randomVal = Math.floor((Math.random() * 3));
         //Log the result in the console. 
         alert("Bot has shot: " + options[randomVal]);
         //Return the value as a string. 
         return options[randomVal];
 };



 let handleUserChoice = (userChoice) => {
         let botChoice = generateBotChoice();
         compareChoices(userChoice, botChoice);
 };



 let compareChoices = (user, bot) => {

         if (user == bot) {
                 alert("Draw");
         } else if ((user == "rock" && bot == "scissors") ||
                 (user == "paper" && bot == "rock") ||
                 (user == "scissors" && bot == "paper")) {
                 alert("player wins!");

         } else {
                 alert("bot wins!");
         }
 };


 userInput();