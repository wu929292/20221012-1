function setup() {
  createCanvas(windowWidth,windowHeight);

}  
function draw() {
  background('#C71585');//背景
  noFill()//不充滿
  //stroke(255)//線條
  rectMode(CENTER)
  
  for(let i=0;i<(width/50);i++){
   for(let j=0;j<int(height/50);j=j+1){
    stroke(255,0,0)
    ellipse(25+(i*50),25+(j*50),mouseX/50)
    stroke(0,255,0)
    rect((25+(i*50),25+(j*50),mouseX/50))
    stroke(0,0,256)
    ellipse(50+(i*50),50+(j*50),mouseX/25)
    stroke('#C71585')
    rect(50+(i*50),50+(j*50),mouseX/25)
    stroke('#FFFF00')
    ellipse(50+(i*50),0+(j*50),mouseX/25)
    stroke('#00FF80')
    ellipse(25+(i*50),25+(j*50),mouseX/2)
  }
  }
}
