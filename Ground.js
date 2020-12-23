class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
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
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
