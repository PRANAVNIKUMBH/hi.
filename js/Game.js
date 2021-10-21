class Game {
  constructor() {}

  gs (){
    db.ref("gameState").on("value",data=>{
      gameState=data.val()
    })
  }
  //write the gameState value to the database
  us(count){
    db.ref("/").update({
      gameState:count
    })
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.gc()
    car1 = createSprite(width/2-150,height-150)
    car1.addImage(c1) 
    car1.scale=0.07
    
    car2 = createSprite(width/2+150,height-150)
    car2.addImage(c2) 
    car2.scale=0.07

    cars = [car1,car2]
  }

  play(){
    form.r()
    Player.gpi()
    if(players!==undefined){
     background("red")

     image(t,0,-height*5,width,height*6) 
     var index = 0 
     for (var i in players){
       index = index+1
       var x = players[i].positionX;
       var y = height - players[i].positionY;

       cars[index - 1].position.x = x;
       cars[index - 1].position.y = y;
       if (index===player.index){
         camera.position.y = cars[index - 1].position.y
       }
     }
     if (keyIsDown(UP_ARROW)) {
      player.positionY =player.positionY+ 10;
      player.ud();
    }

    if (keyIsDown(DOWN_ARROW)) {
      player.positionY =player.positionY-  10;
      player.ud();
    }
     drawSprites()
    }
  }
}
