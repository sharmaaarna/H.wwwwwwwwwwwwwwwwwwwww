noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/qM0VYGKW/Haha-removebg-preview.png");
}

function setup(){
    Canvas=createCanvas(400,400);
    Canvas.center();
    Video=createCapture(VIDEO);
    Video.hide();

    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(Video,0,0,400,400);
    image(clown_nose,noseX,noseY,100,80);
}

function modelLoaded(){
    console.log("poseNetIsLoaded");
}

function gotPoses(result){
    if(result.length >0)
    noseX=result[0].pose.nose.x-220;
    noseY=result[0].pose.nose.y-70;
}

function savePic(){
    save("Haha.jpg");
}