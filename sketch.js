var point,database,position,canvas,a,b
function setup()
{
database=firebase.database()
console.log(database)
canvas=createCanvas(500,500)
point=createSprite(250,250,10,10)
var pointpos =database.ref("point/position")
pointpos.on("value",read,showError)
//set1(250,250)
//point.x=300
//point.visible=false

}

function draw()
{
  if(mouseDragged())
 {
point.x=mouseX
point.y=mouseY
 }
 /* if(mouseUp(point))
  {
    writePosition(point.x,point.y)
  }*/
 /* a=point.x;
  b=point.y;
  writePosition(a,b);
  if(keyDown(LEFT_ARROW))
  {
 writePosition(-2,0)
  }
  else if(keyDown(RIGHT_ARROW))
  {
    writePosition(2,0)
  }
  else if(keyDown(UP_ARROW))
  {
    writePosition(0,-2)
  }
  else if(keyDown(DOWN_ARROW))
  {
    writePosition(0,2)
  }*/

  drawSprites();
}
function read(data)
{
position=data.val()
console.log(position.x)
point.x=position.x
point.y=position.y
}
function showError()
{
  console.log("Erorr")
}
function writePosition(x,y)
{
  database.ref("point/position").set({'x':position.x+x,'y':position.y+y})
 
}
/*function set1(x1,x2)
{
database.ref("point/position").set({'x':x1,'y':x2})

}*/

  
