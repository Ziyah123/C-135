video= " ";
objects= [];
status="";


function preload() {

}

function setup () {
    canvas=createCanvas(470,380);
    canvas.center(); 
    video=createCapture(VIDEO);
    video.size(470,380);                      
    video.hide();                        
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}

function draw() {
image(video,0,0, 470,380);
if(status != "") {
objectDetector.detect(img, gotResult);

for(i=0; i < objects.length; i++) {
document.getElementById("status").innerHTML="Status: Objects Detected";
document.getElementById("number_of_objects").innerHTML ="Number of objects detected: "+ objects.length;

fill("#FF0000");
percent= floor(objects[i].confidence * 100);
text(objects[i].label + ""+percent+"%", objects[i].x+15, objects[i].y +15);
noFill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}

function start() {
objectDetector= ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML= "status: detecting objects";
document.getElementById("input_text").value;
}

function modelLoaded() {
console.log("Model Loaded!");
status:true;

}

function gotResult(error, results) {
if (error){
console.log(error);
}
console.log(results);
objects=results;

}