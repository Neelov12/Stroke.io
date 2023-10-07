

// Define all variables

let bg; 
let a1;
let a2;
let button;
let coin;
var i = 75;

var gameState = "START"; 
var bX = 500;
var bY = 500;
var cX = 100;
var cY = 100;

var score = 0;
//let f = 0;

function setup() {
//  f = frameCount;
  
  bg = loadImage('Background.jpeg');
  createCanvas(1519, 781); // CHANGE
  
  button = createImg('100dollar.png','') 
//  a1 = button.position(bX,bY);
  button.size(160,67);
  button.hide();
  
  coin = createImg('coin.png', '');
//  a2 = coin.position(cX,cY);
  coin.size(160,160);
  coin.hide()
  
	textAlign(CENTER);
	
} 

function draw() {
  background(bg);
	
	if(gameState == "START"){
		home();
	}
	
	if(gameState == "GAMEON"){
		start();
      button.show();
      coin.show();
	}
	
	if(gameState == "GAMEOVER"){
	  button.hide();
      coin.hide();
      gameOver();
	}

} 

// homepage of game
function home(){
  textSize(12)
  text("SCORE: $" + score,width/2,230);
 
  text("Frame Count: " + frameCount, width/2,40);
//  text("GameState: " + gameState, width/2,60);
	
  textFont('Bungee')
  textSize(40)
  text("Pick the Money!", width/2, 150)
  textSize(18)
  text("Click Anywhere To Play", width/2,180);
	if(mouseIsPressed){
		gameState = "GAMEON";
	}

} 
//starts game
function start(){
  
  background(bg);
//  button.show()
  a1 = button.position(bX,bY);
  button.mousePressed(changeBposition);
  
  a2 = coin.position(cX,cY);
  coin.mousePressed(changeCposition);

  text("The coins are $1 and the bills are $100", width/2, i);
    
  text("SCORE: $" + score,width/2,20);
  text("Frame Count: " + frameCount, width/2,40); // test


  
//  button.hide();

	
	if(frameCount>=1000){  	// ends the game when this is true
      
	  gameOver();
      button.hide();
      coin.hide();
	}
} 

function changeBposition(){    //changes position of button randomly when clicked
        i = 1000;  //changes position of explanation test out of frame
        bX = random(width-160);
		bY = random(height-100);
  //      button.hide();
		score += 100;
        background(bg);
}

function changeCposition(){    //changes position of coin randomly when clicked
        i = 1000;  //changes position of explanation test out of frame
        cX = random(width-160);
		cY = random(height-160);
//  coin.hide();
		score += 1;
        background(bg)
}

function gameOver(){  //CHANGE THIS SECTION
  background(128);
  text("SCORE: $" + score,width/2,20);
  text("Frame Count: " + frameCount, width/2,40);
  text("GameState: " + gameState, width/2,60);
	
  text("GAME OVER", width/2,100);
  text("Click to Play Again!", width/2,200);
  
	gameState = "GAMEOVER"
} // end game Over


