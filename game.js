class Game{
    constructor(){

    }
  readGameState(){
  var gameStateValue= database.ref("gameState")
  gameStateValue.on("value",function(data){
      gameState=data.val()
  })
}

   writeGameState(x){
   database.ref("/").update({
    gameState:x
   })
}
 playTheGame(){
    player = new Player();
    player.readPlayerCount()
    form= new Form();
    form.register();
 }

 startTheGame(){
    player.readAllPlayers();
    player.readCarsAtEnd();
    form.registerB.hide();
    form.inputBox.hide();
    form.greetE.hide();
    form.heading.hide();
    image(trackI,0,-displayHeight*50,displayWidth,displayHeight*51)
    var i=0,h=470;
    for(var plr in allPlayers){
      a[i].x=h;
       h=h+420;
       a[i].y= displayHeight-allPlayers[plr].distance;
       if(i+1==player.position){
         camera.position.x=displayWidth/2
         camera.position.y= a[i].y;
       }
      i=i+1;
    }
   if(keyDown(UP_ARROW)){
     player.distance=player.distance+500;
     player.createPlayerField();
   }
   if(player.distance>37800){
     console.log("hi")
    gameState=2;
     var ta=carsAtEnd+1;
     player.rank=ta;
     player.writeCarsAtEnd(ta);
     
   }
   drawSprites();
}
 
  end(){
    alert("You got a rank of "+ player.rank)
  }
}


