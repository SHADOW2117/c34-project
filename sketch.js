
var drawing=[];
var currentPath = [];

function setup(){
  canvas = createCanvas(1350,630);
  canvas.mousePressed(start);
}


function draw(){
background("black");
if(mouseIsPressed){
var point = {
  x:mouseX,
  y:mouseY
}
currentPath.push(point);
}
noFill();
strokeWeight(5);
stroke("white");
if (keyDown ( "y")){
stroke("yellow");
}
for (var i = 0; i<drawing.length;i++){
  var path = drawing[i];
  beginShape();
 for(var j = 0; j<path.length; j++){
  vertex(path[j].x, path[j].y);
 }
 endShape();
}

}
function start(){
  currentPath = [];
  drawing.push(currentPath);
}
