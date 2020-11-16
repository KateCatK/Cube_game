window.onload = function() {
    
var Player_1 = Math.floor(Math.random() * 5) + 1;
var Player_2 = Math.floor(Math.random() * 5) + 1;

if(Player_1 > Player_2)
  document.getElementById("result").innerHTML = "Player 1 Wins!";
else{
    if(Player_1 < Player_2)
      document.getElementById("result").innerHTML = "Player 2 Wins!";
    else document.getElementById("result").innerHTML = "Draw!";
}

var downloadingImage_1 = document.getElementById("cube_1");
var downloadingImage_2 = document.getElementById("cube_2");

if(Player_1 == 1) downloadingImage_1.src = "./assets/img/Cube_1.png";
if(Player_1 == 2) downloadingImage_1.src = "./assets/img/Cube_2.png";
if(Player_1 == 3) downloadingImage_1.src = "./assets/img/Cube_3.png";
if(Player_1 == 4) downloadingImage_1.src = "./assets/img/Cube_4.png";
if(Player_1 == 5) downloadingImage_1.src = "./assets/img/Cube_5.png";
if(Player_1 == 6) downloadingImage_1.src = "./assets/img/Cube_6.png";

if(Player_2 == 1) downloadingImage_2.src = "./assets/img/Cube_1.png";
if(Player_2 == 2) downloadingImage_2.src = "./assets/img/Cube_2.png";
if(Player_2 == 3) downloadingImage_2.src = "./assets/img/Cube_3.png";
if(Player_2 == 4) downloadingImage_2.src = "./assets/img/Cube_4.png";
if(Player_2 == 5) downloadingImage_2.src = "./assets/img/Cube_5.png";
if(Player_2 == 6) downloadingImage_2.src = "./assets/img/Cube_6.png";
};