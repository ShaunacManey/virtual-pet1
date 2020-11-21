//Create variables here
var dog
var happyDog
var foodS
var foodStock
var database

function preload()
{
  //load images here
  dogimage1=loadImage("images/dogimg.png")
  dogimage2=loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readstock);
}



function draw() {  
background(46,139,87)
if (KeyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addimage(dogimage2);
}
  drawSprites();
  text(foodS,100,80);
  //add styles here

}

function readStock(data){
food=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}