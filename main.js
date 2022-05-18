status = "";
objects = "";
video = "";

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
      image(video, 0, 0, 480, 380);
      if(status != "")
      {
          percent=floor(objects[i].confidence*100);
          Text(objects[i].label + "confidence = " + percent + "%" + objects[i].x, objects[i].y);
          objectDetector.detect(video, gotResult);
                
          for (i = 0; i < objects.length; i++)
          {
              document.getElementById("status").innerHTML = "Status: Objects Detected";
              document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + objects.length;

              fill("#FF0000");
              percent = floor(objects[i].confidence * 100);
              Text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
              noFill();
              stroke("#FF0000");
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
      }
  }