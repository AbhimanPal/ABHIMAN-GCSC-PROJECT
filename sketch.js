var car,wall;
function setup() {
  createCanvas(1600, 400);
  speed=random(55,90)
  weight=random(400,1500)
  car=new Car(weight,speed);
  wall=createSprite(1500,200, 60, 400);
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  car.sprite.collide(wall,deformation)
  //deformation();
  drawSprites();
 
}

function deformation()
{
	
	var def=0.5 * car.weight * car.speed* car.speed/22509;
	if(def>180)
	{
		car.sprite.shapeColor=color(255,0,0);
	}

	if(def<180 && def>100)
	{
		car.sprite.shapeColor=color(230,230,0);
	}

	if(def<100)
	{
		car.sprite.shapeColor=color(0,255,0);
	}
}
