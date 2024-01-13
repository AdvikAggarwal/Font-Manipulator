noseX = 0;
noseY = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;
sample_text = "";
function preload()
{

}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(1050, 400);

    video = createCapture(VIDEO);
    video.position(150, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is initialised");
}
function gotPoses(results)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("The X position of the nose is: " + Math.round(noseX) + " and the Y position of the nose is: " + Math.round(noseY));

    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    difference = Math.round(leftWrist - rightWrist);
    console.log("The X position of the Left Wrist is: " + leftWrist + " and the position of the Right Wrist is: " + rightWrist);
}
function draw()
{
    background("red")
    sample_text = document.getElementById("sample").value;
    if (sample_text == "")
    {
        text("Text", noseX, noseY);
    }
    else
    {
        text(sample_text, noseX, noseY);
    }
    textSize(difference);
}