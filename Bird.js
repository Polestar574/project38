class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  play(){
    form.hide(); 
    Player.getPlayerInfo();
     if(allPlayers !== undefined){ 
       //var display_position = 100;
        //index of the array 
        var index = 0;
         //x and y position of the cars
          var x = 0; 
          var y;
           for(var plr in allPlayers){
              //add 1 to the index for every loop
              index = index + 1 ; 
              //position the cars a little away from each other in x direction 
              x = x + 200;
               //use data form the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;
                 cars[index-1].x = x;
                 cars[index-1].y = y;
                  if (index === player.index){ 
                    cars[index - 1].shapeColor = "red"; 
                    camera.position.x = displayWidth/2;
                     camera.position.y = cars[index-1].y 
                    } 
                
                     }
                     }

                     if(keyIsDown(UP_ARROW) && player.index !== null){
                        player.distance +=10;
                         player.update();
                       }
                        drawSprites(); 
                      }
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
