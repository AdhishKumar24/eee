left_Wrist_x=0
right_Wrist_x=0
difference=0



function setup(){
canvas = createCanvas(500,550)
canvas.position(700,100)
cam_1=createCapture(VIDEO)
posenet=ml5.poseNet(cam_1,modelloaded)
posenet.on('pose',gotPoses)
}

function gotPoses(results){
console.log(results)
left_Wrist_x=results[0].pose.leftWrist.x
right_Wrist_x=results[0].pose.rightWrist.x
difference=floor(left_Wrist_x-right_Wrist_x)
}

function modelloaded(){
    console.log("posenet loaded")
}

function draw(){
background("orange")
fill("blue")
textSize(difference)
stroke("black")
text("Adhish",120,120)
}