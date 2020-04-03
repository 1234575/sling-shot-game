class Catapault{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 10
      }
      this.bodyA= bodyA
      this.pointB = pointB
      this.Catapault= Constraint.create(options);
      World.add(world, this.Catapault);
  }

  
  
  fly(){
      this.Catapault.bodyA = null;
  }

  display(){
    
      if(this.Catapault.bodyA){
          var pointA = this.Catapault.bodyA.position;
          var pointB = this.pointB;
          push();
          
          stroke("black");
          if(pointA.x < 220) {
              strokeWeight(1);
              line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
              line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3)
          }
          else{
              strokeWeight(0.000005);
             line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
  
          }
         
          
          pop();
      }
  }
  
}