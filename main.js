nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    canvas=createCanvas(600,600);
    canvas.position(650,150);
    video.size(600,600);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model has loaded");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);
    console.log(leftwristx);
    console.log(rightwristx);
    console.log(difference);
}
}
function draw(){
    background("#969A97");
    document.getElementById("square_side").innerHTML="height & width of the square will be "+difference+"px";
    fill("#590093");
    stroke("#590093");
    square(nosex,nosey,difference);
}