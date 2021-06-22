var database;
var gameState = 0;
var playerCount = 0;
var game, player, form;
var allPlayers;
var car1I,car2I,trackI;
var car1,car2;
var a=[];
var carsAtEnd=0;

function preload() {
   car1I=loadImage("car1.png");
   car2I=loadImage("car4.png");
   trackI=loadImage("track.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.readGameState();
  if (gameState == 0) {
   game.playTheGame()
  }

  car1=createSprite(300,400)
  car1.addImage(car1I);
  car2=createSprite(150,400)
  car2.addImage(car2I);
  a.push(car1);
  a.push(car2);
 
  
}

function draw() {
  background("white");
  if(playerCount==2){
    game.writeGameState(1);
  }

  if(gameState==1){
    game.startTheGame();
  }

  if(gameState==2){
    game.end();
  }
}
