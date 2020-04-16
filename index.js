


// We are creating a number will be random and assigned to the src value of the dice imgs
// the number needs to be betweeen 1 and 6.
var randomNumber1 = Math.floor (Math.random () * 6) + 1;

// Now we will make it = the name of the image of the dice png files

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;// images.dice1.png - images.dice6

// There are going to be two images representing the dice and we need to input the src we have created.
// Var image1 selects the first img elements in the html
 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src" , randomImageSource);
// Now do the same thing for number 2.
 var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src", randomImageSource2);


 //Now we need a way of telling the users who won.

 if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
 }
 else if (randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
 }
 else {
   document.querySelector("h1").innerHTML = "Draw!";
 }
