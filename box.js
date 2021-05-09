class Block{
  constructor(x, y, width, height,color) {
      var options = {
         
          restitution :0.4,
          friction :0.4,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color= color;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      console.log(this.Visiblity);
       if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();      
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill (this.color)
      rect(0,0,this.width, this.height);
      pop();
   }
   else{
    World.remove(world, this.body);
    this.Visiblity = this.Visiblity -5;
      tint(255,this.Visiblity);
   }
  }
   score(){
    if(this.Visiblity <0 && this.Visiblity >= -105){
      Score++
    }
   }
    }