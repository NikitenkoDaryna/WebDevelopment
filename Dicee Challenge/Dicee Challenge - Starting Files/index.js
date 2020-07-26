var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomSource1 = "images/" + randomImage1;
var img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src", randomSource1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomSource2 = "images/" + randomImage2;
var img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src", randomSource2);
var title = document.querySelectorAll("h1")[0];
if (randomNumber1 > randomNumber2) {
  title.textContent = "Player 1 Wins 🏳️‍🌈";
} else if (randomNumber2 > randomNumber1) {
  title.textContent = "Player 2 Wins 🏳️‍🌈";
} else {
  title.textContent = "Draw!";
}
