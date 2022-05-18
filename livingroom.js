status = "";

function preload()
{
    img = loadImage(background.jpg);
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center;  
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

  function draw()
  {
    if (status != undefined) {
  	  image(img, 0, 0, 640, 420);
    for (var i = 0; i < objects.length; i++) 
      document.getElementById("status").innerHTML = "Status : Objects Detected";
      
          percent=floor(objects[i].confidence*100);
          Text(objects[i].label + "confidence = " + percent + "%" + objects[i].x, objects[i].y);
          noFill();
          stroke(255, 0, 0);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
  }