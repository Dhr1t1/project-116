lipsX=0;
lipsY=0;

function preload(){
    lips=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(lips,lipsX-25,lipsY+20,55,55)
}

function take_snap(){
    save('LipstickPicture.png');
}

function modelLoaded(){
    console.log('PoseNet is loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lipsX=results[0].pose.nose.x;
        lipsY=results[0].pose.nose.y;
        console.log("lipsX= "+lipsX);
        console.log("lipsY= "+lipsY)
    }
}