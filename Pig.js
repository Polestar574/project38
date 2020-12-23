class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
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
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};