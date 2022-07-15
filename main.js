philtrumX=0;
philtrumY=0;

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(400,300);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function preload(){
mustache = loadImage("https://i.postimg.cc/mgBK5V9X/21950-4-moustache-transparent-thumb.png");
}

function draw(){
image(video,0,0,400,300);
image(mustache,philtrumX,philtrumY,75,75)
}

function take_snapshot(){
save("MeWithMustache.png");
}

function modelLoaded(){
console.log("Model is Loaded!");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    philtrumX=results[0].pose.nose.x-37.5;
    philtrumY=results[0].pose.nose.y-20;
    console.log("Philtrum X = "+philtrumX);
    console.log("Philtrum Y = "+philtrumY);
}
}