
//Dice 1
var n = Math.random();
n=n*6;

var randomNumber1 = Math.floor(n) + 1; // 1-6 random no.

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSrc = randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSrc);

//Dice 2

var randomNumber2 = Math.floor( Math.random()*6 ) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSrc2 =  randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSrc2);



if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🏅 Player1 Wins!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🏅 Player2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
