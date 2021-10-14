var ball;
var hypnoticBall, database, position;   

function setup(){
    //console.log("test");
    database = firebase.database();
    console.log(database);
    //console.log("test");
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

    var hypnoticBallPosition = database.ref("Ball/position");
    hypnoticBallPosition.on("value", readPosition, showError);
   
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}*/

function writePosition(x,y){
    database.ref("Ball/position").set({
        "x": position.x + x,
        "y": position.y + y

    });

}

function readPosition(data){
    position = data.val();
    console.log(position.x);

    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;

}
function showError(){
    //nada melhor do que não fazer nada, só pra (esqueci a letra)
}
