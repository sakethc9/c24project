class Ground{

    constructor(x,y,width,height){
     var option = {
         isStatic : true 
     }
       this.body = Bodies.rectangle(x,y,width,height,option);
       this.width = width ;
       this.height = height ;
       World.add(world,this.body);
    
    }
    
    display(){
    var position = this.body.position ;
    rectMode(CENTER);
    fill("yellow");
    rect(position.x,position.y,this.width,this.height)
    
    
    }
    
    }