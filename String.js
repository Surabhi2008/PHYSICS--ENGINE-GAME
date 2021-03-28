class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }


    attach(body){
        this.string.bodyA=body
    }

  fly(){
      this.string.bodyA = null;
  }
    
  
    display(){
        if(this.string.bodyA){

      
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}
    
}