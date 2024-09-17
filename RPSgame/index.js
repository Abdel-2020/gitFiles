 //Create a variable of type ARRAY called options to store values "rock", "paper", "scissors".
 const options = ["rock", "paper", "scissors"];
 //Create a variable of type STRING called player which stores the input of the player.
 let player = "";
 //Create a variable of type STRING called bot which stores the input of the bot.
 let bot = "";
 
 
 
 //Create a function which reads the players input and stores it in the player variable.
 let userInput = () => {
 
 
         let answer = prompt("Rock, Paper, Scissors.... Shoot! ").toLowerCase();
         //Check if user has entered the correct value
         //first use toLowerCase in order to make string consistent
         if (options.includes(answer)){
 			console.log("Player has shot: " + answer);
                 return answer;
         }else{
                 console.log("Invalid Input");
         }
 }

 
 //Create a function which generates a random number between 0 and 2 which will dictate what option 
 //the bot will pick. Then store the result in the bot variable.
 
 
 let botInput = () => {
 				//Generate a random value between 0 and 2
                 let randomVal = Math.floor((Math.random()*3));
 				//Log the result in the console. 
                 console.log("Bot has shot: " + options[randomVal]);
				//Return the value as a string. 
                 return options[randomVal];
   
 
         };
 
 
 player = userInput();
 bot = botInput();
 
 
 //Create a function which works out the victor.
 
 let score = () => {
 		player;
 		bot;
 
         if (player == bot){
           console.log("Draw");
         }else if ((player == "rock" && bot == "scissors") || 
 		(player == "paper" && bot == "rock") || 
 		(player == "scissors" && bot == "paper")){
                                 console.log("player wins!");
                         } else {
                                 console.log("bot wins!");
                        }
 };
 
 score();