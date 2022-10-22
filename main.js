img = "";
stature = "";
function setup()
{
canvas=createCanvas(380,380);
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("stature").innerHTML = "stature : detecting objects";
}
function modelLoaded() {
console.log("modelLoaded!");
stature = true;
objectDetector.detect(img,gotResult);
}
function gotResult(error, results) 
{ 
    if (error) 
    { 
        console.log(error); 
    } 
    console.log(results);
}
function draw() 
{ 
    image(video, 0, 0, 380, 380); 
    if(stature != "") 
    { 
        r = random(255); 
        g = random(255); 
        b = random(255); 
        objectDetector.detect(video, gotResult); 
        for (i = 0; i < objects.length; i++) 
        { 
            document.getElementById("stature").innerHTML = "Stature : Object Detected"; 
            document.getElementById("number_of_objects").innerHTML = "Number of objects Detected are " + objects.length; 
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100); 
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); 
            noFill(); stroke(r,g,b); 
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
        } 
    } 
}
