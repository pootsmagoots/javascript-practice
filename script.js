// var multiply = function(num1 , num2){
//   return (num1 * num2)
// }
// multiply(3, 4)


// var computerChoice = Math.random(0)
//   if (computerChoice < 1){
//     console.log("help")
//   }


// console.log(computerChoice)


// var userChoice = prompt("Do you choose rock, BOMB, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);

// var compare = function(choice1, choice2){

//   if(choice1 === choice2){
//     return prompt("It was a TIE! Please choose again rock, BOMB, paper or scissors?");
// }
//   else if (choice1 === "rock"){
//       if (choice2 === "scissors")
//       return("rock wins");
//       else
//       return ("paper wins")
// }
//   else if (choice1 === "paper"){
//       if(choice2 === "rock")
//       return("paper wins")
//     else
//     return ("scissors wins")
//   }
//   else if (choice1 === "BOMB"){
//     if(choice2 === "rock")
//     return("rock wins")
//     if(choice2 === "paper")
//     return("BOMB wins BITCH")
//     else
//     return("scissors wins!!!")
//     return("BOMB WINS BITCH!!")
//   }
//   if (choice1 != "rock" != "paper" != "BOMB" != "scissors"){
//   return ("computer wins automatically, because of your stupidity")
//   }
// }

// compare(userChoice, computerChoice)





// var text = "Hello my names is travis batts"

// var myName = "Travis Batts"

// var hits = []

// for(let i = 0; i <= text.length; i++){
//     console.log(text[i])

//     if(text[i] === myName[0]){


//         for( let j = i; j <= i + myName.length; i++){
//             hits.push(text[j]);




//         }
//     }

// }

// if(hits.length === 0){
//     console.log("your name wasnt found")
// }
// else {
//     console.log(hits);
// }








// var UserChoice = prompt("Please choose Rock, Paper, or Scissors... Also BOMB")
// var ComputerChoice = Math.random();
// if (ComputerChoice <= 0.36){
//   ComputerChoice = "rock"
//   if(ComputerChoice <= 0.68){
//     ComputerChoice = "paper"
//     console.log(computerChoice)
//   }
// }




// let food = "apple"

// for(let i = 0; i < food.length; i ++){
//   console.log(food[i])

// }



// let colors = ["purple", "red", "black"]


// for(let i = 0; i < colors.length; i++){
//   console.log("my favorite colors are " + colors);
// }


// var car = {type:"Fiat", model:"500", color:"white"};

// colors.push("purple")
// colors.pop()
// console.log(colors)

// var person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// };

// person.eyeColor



// var array = [1, 2, 3];

// for (var i = 0, sum = 0; i < array.length; sum += array[i++])
//     ;
//     console.log(array)

// var car = {
//   make: "mazda",
//   year: 2017,
//   color: "blue"
// }





// var firstName = prompt("what is your first name?");

// var lastName = prompt("what is your last name?");


// var combineName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();


// var combineLength = combineName.length;


// alert("The string \"" + combineName + "\" is " + combineLength + " characters long.");


// var models = [
//   type = ["mazda", "toyota", "dodge"],

//   ]


//   type[0]

//   var numbers = [1,2,3,4,5]
//   var total = 0

//   for(var i = 0; i < numbers.length; i++){
//       total += numbers[i]
//   }
//   console.log(total)

// x = [1,2,3,4,5]
// var total = 0

// for( let i = 0; i < x.length; i++){
//   total += x[i]
// }
// console.log(total)



// var array = [1,2,3,4,5];

// array.pop()
// console.log(array)

// array.push(5)
// array.unshift(4)
// console.log(array);





//var secondsPerMin = 60;
//var minsPerHour = 60;
//var hoursPerDay = 24;
//var daysPerWeek = 7;
//var weeksPerYear = 52;
//var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
//document.write("There are " + secondsPerDay + " seconds in a day");
//
//
//var YearsAlive = 30;
//var totalSecondsAlive = YearsAlive * secondsPerDay;
//
//document.write(" I have been alive for more than " + totalSecondsAlive);

// var userInput = prompt("please give us a number");
// var userSecondInput = prompt("please give us another number");
// var number = parseInt(userInput);
// var number2 = parseInt(userSecondInput);

// var randomNumber = Math.floor(Math.random() * (number - number2 + 1 )) + number2;
// //document.write(randomNumber);

// var message = "<p>" + randomNumber + " is a number between " + number2 + " + number + "</p>";

// document.write(message);




// alert("Let's do some Math!");

// var userInput = prompt("Please give me a number");

// userInput = parseFloat(userInput);



// var userInput2 = prompt("Please give me a second number");
// userInput2 = parseFloat(userInput2);

// var message = "<h1> Math with the numbers " +  userInput + " and " + userInput2 + "</h1>";


// //    "3 + 4 = 7"
//   message +=  "<h3>" + userInput + " + " +  userInput2 + " = " + (userInput + userInput2) + "</h3>";
//   message += '<br>'


// message += userInput + " * " + userInput2 + " = " +
//   (userInput * userInput2);
// message += '<br>'
// message += userInput + " / " + userInput2 + " = " +
//   (userInput / userInput2);
// message += '<br>'
// message += userInput + " - " + userInput2 + " = " +
//   (userInput - userInput2);

// document.write(message);




// var answer = prompt("What is the programming language is the name of a gem?");
// if (answer.toUpperCase() === "RUBY" ) {
//   document.write("<p>You're RIGHT!</p>");
// } else{ document.write("<p> WRONG! </p>");

// }



//for an ordered list of 1-100 output fizz if divisible by 3. buzz if divisible by 5 and fizzbuzz if divisible by both 3 and 5, the page has an empty div#output and you are asked to output an ordered list to it, with integers left as empty list items and strings output normall (fizz, buzz, fizzbuzz)






// Keep the output in a variable
// var output = '';

// Loop from 1 to 100
// for(i = 1; i <= 100; i++){
//     output += i + ' = ';
//     if (i % 3 == 0) output += 'Fizz';
//     if (i % 5 == 0) output += 'Buzz';
//     output += '<br />';

// }

// Use jQuery to output the results, because it's easy.
// $('body').html(output);


// for( var i=1; i<100; i++ ) {
//     if( (i%3) === 0 && (i%5) === 0 ) {
//         console.log( "FizzBuzz" );
//     }else if( (i%3) === 0 ) {
//         console.log( "Fizz" );
//     }else if( (i%5) === 0 ) {
//         console.log( "Buzz" );
//     }else{
//         console.log( i );
//     }
// }


// for (var i = 1; i <=100; i++){
//   if( (i%3) === 0 && (i%5) === 0){
//   console.log("Fizzbuzz");
//   }else if ( (i%3) === 0){
//   console.log("buzz");
//   }else if ( (i%5) === 0){
//   console.log("fizz");
//   }else {
//     console.log(i)
//   }

// }


// var randomnumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("please give me a number between 1 and 6");
// if (parseInt(guess) === randomnumber) {
//   document.write("you got a match!");
// }else {
// document.write( "<p>" + ' Sorry. The number was ' + randomnumber + ' </p>');
// }




// Stuff I have written on my own

// for ( let i = 1; i <= 100; i++){
//   if( (i%3) === 0 && (i%5) === 0){
//     console.log("FizzBuzz");
//   }else if( (i % 5) === 0) {
//     console.log("Buzz");
//   }else if ((i%3)=== 0) {
//     console.log("Fizz");
//   }else {
//     console.log(i);
//   }
// }



// var num1 = prompt("please give me a number between 1 and 6");
// num1 = parseInt(num1);
// var computer = Math.floor(Math.random() * 6) + 1;

// if (num1 === computer) {
//   document.write("<p> You got a match! Computer's number was " + computer + " and your number was " + num1 + " </p>");
// } else {
//   document.write("<p> Sorry the number was " + computer + " computer wins!"+"</p>");
// }

// alert("Lets do some Math");
// var num1 = prompt("please give me a number");
// num1 = parseFloat(num1);
// var num2 = prompt("please give me another number");
// num2 = parseFloat(num2);
// var addition = num1 + num2;
// var subtraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// document.write("<p> " + "Okay so " + num1 + " + " + num2 + " = " + addition + " </p>");
// document.write("<p> " + "Okay so " + num1 + " * " + num2 + " = " + multiplication + " </p>");
// document.write("<p> " + "Okay so " + num1 + " / " + num2 + " = " + division + " </p>");
// document.write("<p> " + "Okay so " + num1 + " - " + num2 + " = " + subtraction + " </p>");
// if (prompt !== parseInt || parseFloat) {
//   alert("you must enter a number");
// }

// message = "<h1> " + " Math with numbers!!! " + num1 + " + " + num2 + " = " + (num1 + num2) + " </h1>";
// message += "<br>"
// message += "<h1> " + " Math with numbers!!! " + num1 + " - " + num2 + " = " + (num1 - num2) + " </h1>";
// message += "<br>"
// message += "<h1> " + " Math with numbers!!! " + num1 + " * " + num2 + " = " + (num1 * num2) + " </h1>";
// message += "<br>"
// message += "<h1> " + " Math with numbers!!! " + num1 + " - " + num2 + " = " + (num1 - num2) + " </h1>";
// document.write(message);


// var userInput = prompt("is Bennett a weenie? Pick a number between 1-6");
// userInput = parseInt(userInput);
// var computer = Math.floor(Math.random() * 6) + 1;
// if (userInput < computer) {
//   alert("Your a little boy TOUCHER!!!!! Computer WINS!");
// } if (userInput == 2){
//   alert("Blake is the best you Clown!!!!");
// }else if (computer < userInput) {
//   alert("You are a nice clean upstanding cutie");
// }







// let loggedIn = true
// let level = "admin"

// if ( loggedIn === true && level === 'admin') {
//   alert("Access granted.");
// }


/*

The Random Guessing Game Generates a number between 1 and 6


//assume the player didn't guess correctly
var correctGuess = false;

// Generates random number
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

// Asks the player for a guess
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

conditional statements starting with player guessing right then breaking down guess with greater than and less than conditions
1. guess right
2. guessed to0 low
3. guess too high

if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
  if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
  }
} else if ( parseInt(guess) > randomNumber ) {
   var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
  if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
  }
}
// player guess correctly and Paragraph is printed onto screen / or player guessed wrong and else is printed onto document.
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

// end of application
*/





/*
//starting variables
var point = 1;
var score = 0;
var bonus = 2;
var maxScore = 12;


//beginning of game
alert("You are going to take a quiz!, based off American states " + "Max Amount of points a player can receive is " + maxScore);
var correctAnswer = ("Awesome you got it right!");
var incorrectAnswer = ("Sorry that answer is wrong!");


 Questions about the game 1 - 10
all questions count towards a score with a max of 10

var firstQuestion = prompt("What is the largest state in the United States?");
if (firstQuestion.toLowerCase() === "alaska"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  alert("Womp, Womp, Your score is " + score);
}

var secondQuestion = prompt("What is the capital of Ohio?");
if (secondQuestion.toLowerCase() === "columbus"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}

var thirdQuestion = prompt("What state has the capital of Frankfurt?");
if (thirdQuestion.toLowerCase() === "kentucky"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}

var fourthQuestion = prompt("What is the capital of Florida?");
if (fourthQuestion.toLowerCase() === "tallahassee"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}

var fifthQuestion = prompt("Which city receives the most amount of snow in the CONTINENTAL U.S.?");
if (fifthQuestion.toLowerCase() === "syracuse"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}


var sixthQuestion = prompt("What is the capital of Nevada?");
if (sixthQuestion.toLowerCase() === "carson city"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}


var seventhQuestion = prompt("Which state is directly above Texas?");
if (seventhQuestion.toLowerCase() === "oklahoma"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}


var eighthQuestion = prompt("Which state is directly below Washington?");
if (eighthQuestion.toLowerCase() === "oregon"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}


var ninthQuestion = prompt("Which two STATES lie directly to the north and to the south of Virginia?");
if (ninthQuestion.toLowerCase() === "maryland north carolina"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}


var tenthQuestion = prompt("What is the LONGEST river in the United States? (Answer might surprise you)");
if (tenthQuestion.toLowerCase() === "missouri river"){
  alert(correctAnswer);
  score +=  point;
  alert("Huzzah! Your score is " + score);
}else {
  alert(incorrectAnswer);
  score -= point;
  alert("Womp, Womp, Your score is " + score);
}

// Bonus Question
var bonusQuestion = prompt("BONUS! This question is worth two points!!! What is the tallest mountain in the ENTIRE U.S.?");
if (bonusQuestion.toLowerCase() === "denali") {
   alert(correctAnswer)
   score += bonus ;
  alert("ALLLLL RIGHT you crushed it! Bonus points for you, your score is now " + score);
}else {
 alert(incorrectAnswer);
 alert("ouch!!!! Hope that didn't hurt your pride. Your score however stays the same at " + score);
}

//Winner rewards
if (score === 10 || score === 11 || score === 12) {
  alert("You are a brilliant soul, way smarted than most people");
  document.write("<h1><strong>You receive the GOLDEN CROWN!</strong></h1>");
} else if (score === 9 || score === 8) {
  alert("Not too bad there, almost a brilliant one");
  alert("Here is your SILVER CROWN");
  document.write("<h1><strong> GOOD JOB!</strong></h1>")
} else if (score === 8 || score === 7 ) {
  alert("Only needed a few more for a perfect 10, study up a little bit. But overall good job!");
  alert("You recieve the BRONZE Crown!");
  document.write("<h1><strong> Not too bad!</strong></h1>")
}else {
  alert("What a shame, didn't even place for a crown. YOU need to STUDY your American Geography more! No Crown for you!")
  document.write("<h1><strong> You failed sorry! </strong></h1>");
}

*/


/*
// declare program variables
var num1;
var num2;
var message;
// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);

//If user tries to divide by 0 or not enter a number
if (num2 === 0) {
  alert("you can not divide by 0 sorry, please refresh the application");
} else if ( isNaN(num1) || isNaN(num2) ){
  alert("you did not enter a number!, please refresh the application");
} else {


// build an HTML message
message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);

// write message to web page
document.write(message);

}


*/




// var array = [1,2,3,4,5];
// var total = 0;


// for(let i = 0; i < array.length; i ++){
//   total += array[i]

// }



// console.log(total)



// for(let i = 1; i <= 100; i ++){
//   if ((i%3) === 0 && (i&5) === 0){
//     console.log("FIZZBUZZ " + [i]);
//   } else if (((i % 3) === 0)){
//     console.log("Buzz " + [i]);
//   } else if ((i % 5) === 0){
//     console.log("Fizz " + [i]);
//   } else {
//     console.log(i);
//   }
// }




// function isEmailEmpty() {
// var field = document.getElementById('email');
// if (field value === " ") {
//   return true;
// }else {
//   return false;
// }
// }

// var fieldTest = isEmailEmpty();
// if (fieldTest === true ) {
//   alert("Please type your email address");
//   }





// function max(num1, num2){
//   var area = num1 * num2;
//   if ( num1 < num2) {
//     return num1
// }else {
//   return num2
// }

// }

// console.log(max(10,5));






 // Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// function randomNumber(upper , lower) {
// var random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
//   return random;
// }

// console.log ( randomNumber ( 1, 6));







// function randomNumber ( upper, lower) {
//   var random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
//   return random;
// }


/*
//Starting variables

var userInput = prompt("please choose a number between 1-6");

var correct = "Awesome you got the answer right";

var incorrect = "Sorry you got the answer wrong";

var computer = Math.floor(Math.random() * 6 ) + 1;

var reveal = " your response was " + userInput + " and computer was " + computer;


// condition statements comparing Users responses

if (parseInt(userInput) === computer) {
  alert(correct);
  alert(reveal);
}else if (parseInt(userInput) < computer) {
  alert("You need to guess higher");
  var newGuess = prompt("please try again, guess higher than " + userInput);
  if (parseInt(newGuess === computer)) {
    alert(correct);
    alert(reveal);
   }else {
     alert(incorrect);
     alert(reveal);
   }
  }
 else if (parseInt(userInput) > computer) {
  alert("You need to guess lower")
  var newGuess2 = prompt("please try again, guess lower than " + userInput);
  if (parseInt(newGuess2) === computer) {
    alert(correct);
    alert(reveal);
  }else {
    alert(incorrect);
    alert(reveal);
  }
}else {
  alert(incorrect);
  alert("The correct response was " + computer + "and yours was " + userInput);
}

*/




/*

function getRandomNumber( lower, upper ) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error("Sorry not a number");
 }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log( getRandomNumber( 'nine', 24 ) );
console.log( getRandomNumber( 1, 100 ) );
console.log( getRandomNumber( 200, 'five hundred' ) );
console.log( getRandomNumber( 1000, 20000 ) );
console.log( getRandomNumber( 50, 100 ) );
*/

// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var guess;
// var attempts = 0;


// function getRandomNumber(upper){
//   return Math.floor(Math.random() * upper ) + 1;

// }




// while (guess !== randomNumber ) {
//   guess = getRandomNumber(upper);
//   attempts += 1;
// }

// document.write("<p>The random number was " + randomNumber + "</p>");
// document.write("<p> It took the computer " + attempts + " attemps to get it right.</p>");



// var secret = prompt("what is the password?");
// attempt = 0;

// while (secret !== "opensesame" ) {
//   var secret = prompt("That is not it! Try again")
//   attempt += 1;
// }

// document.write("It took you " + attempt + " attempts");


// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber( upper ) {
//   var num = Math.floor(Math.random() * upper) + 1;
//   return num;
// }


// while (guessCount < 6) {
//   guess = prompt("I'm thinkin of a number between 1 and 10")
//   guessCount += 1;
// if (parseInt(guess) === randomNumber){
//     correctGuess = true
//   } if (isNaN(guess)) {
//     alert("You need to guess a Number!");
//   } if ( guess > 10) {
//     alert("I said between 1-10!")
//     break;
//   }
// }
// if (correctGuess) {
//   document.write ("You guessed the number! " + randomNumber );
//   document.write("it took you " + guessCount + " attempts " + "to get it right!");
// } else {
//   alert("sorry you used up all your chances");
// }

// var html = '';
// var red;
// var green;
// var blue;
// var rgbColor;
// var counter = 0;


// for (var i = 0; i < 10; i ++) {
// red = Math.floor(Math.random() * 256 );
// green = Math.floor(Math.random() * 256 );
// blue = Math.floor(Math.random() * 256 );
// rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// html += '<div style="background-color:' + rgbColor + '"></div>';

// }
// document.write(html);


// var html = '';
// var rgbColor;

// function randomRGB() {
//   return Math.floor(Math.random() * 256);
// }

// function randomColor() {
//   var color = 'rgb(';
//   color += randomRGB()  + ',';
//   color += randomRGB()  + ',';
//   color += randomRGB()  + ',';
//   return color
// }

// function print(message) {
//   document.write(message);
// }

// for (var i = 0; i < 10; i += 1) {
//   rgbColor = randomColor();
//   html += '<div style="background-color:' + rgbColor + '"></div>';
// }

// print(html);


// text = '';
// for( let i = 5; i > 0; i -= 1){
//   text += i + ' ';
// }
// console.log(text);



// var playList = [
//   'I Did It My Way',
//   'Respect',
//   'Imagine',
//   'Born to Run',
//   'Louie Louie',
//   'Maybellene'
// ];

// function print(message) {
//   document.write(message);
// }

// function printList( list ) {
//   var listHTML = '<ol>';
//   for ( var i = 0; i < list.length; i++){
//     listHTML += '<li>' + list[i] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// printList(playList);


// var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
// var search;



// function print(message) {
//   document.write( '<p>' + message + '</p>');
// }

// while (true) {
// search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit")
// search = search.toLowerCase();
// if (search === 'quit') {
//   break;
// } else if ( search === 'list') {
//   print ( inStock.join(', '));
// } else {
//   if ( inStock.indexOf( search ) > -1 ){
//     print('Yes we have ' + search + ' in stock ');
//   }else {
//     print( search + ' is not in stock ' );
//   }
// }
// }



// var playList = [
//   ['I Did it my way', ' frank sinatra'],
//   ['respect', ' aretha franklin'],
//   ['imagine', ' john lennon'],
//   ['born to run', ' Bruce Spingstein'],
//   ['louie louie', ' The kingsmen'],
//   ['maybellene', ' chuck berry']
// ];

// function print(message) {
//   document.write(message);
// }

// function printSongs( songs ) {
//   var listHTML = '<ol>';
//   for ( var i = 0; i < songs.length; i += 1) {
//     listHTML += '<li>' + songs[i][0] + ' bye ' + songs[i][1] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// printSongs(playList);


var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

var correctAnswers = 0;
var question;
var answer;
var response;


function print(message) {
  document.write(message);
}

var correct = []
var wrong = []

function buildList(arr) {
 var listHTML = "<ol>";
 for ( var i = 0; i < arr.length; i++) {
  listHTML += "<li>" + arr[i] + "</li>";
 }
 listHTML += "</ol>";
 return listHTML
}


for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correct.push(question);
    correctAnswers += 1;
  } else {
   wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += "<h1> You got these questions right </h1>";
html += buildList(correct);
html += "<h1> You got these questions wrong </h1>";
html += buildList(wrong);
print(html);
