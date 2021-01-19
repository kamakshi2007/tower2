class Block {
    constructor(x, y, width, height,color) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height,color,options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.visibility = 255;
      
      World.add(world, this.body);
    }
    display(){
   
      if(this.body.speed<4){
        
        var angle = this.body.angle;
        push();
       
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,30,40);
        
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-3;
        tint(255,this.Visibility);
        
        pop();
      }
    }
  }
  