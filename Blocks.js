class Blocks
{
		constructor(x,y,w,h)
		{
			var options={
				isStatic:false
				}
			this.x=x;
			this.y=y;
			this.w=w
			this.h=h
			this.image=loadImage("apple.png")
			
			this.body=Bodies.rectangle(x, y, w, h , options);
           
			 World.add(world, this.body);
	
		}
		display()
		{
				
				var groundPos=this.body.position;		
	
				push()
				translate(groundPos.x, groundPos.y);
				
				//strokeWeight(4);
				fill("#00FFFF")
				//rect(0,0,this.w, this.h);
				
				imageMode(CENTER);
	          	//rectMode(CENTER);
		        image(this.image, 0,0,this.h*2, this.w*2)
               
				pop()
				
		}
	
	}