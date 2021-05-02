
var activeTimer = false;
var cancelTimer = false;

function startTimer(foodTypeTime) {
  if(!activeTimer){
      cancelTimer = false;
      activeTimer = true;
      document.getElementById("body").style.animationPlayState = "paused";
      document.getElementById("body").style.backgroundColor = "white";


      var downloadTimer = setInterval(function(){
        if(cancelTimer){
          document.getElementById("countdown").innerHTML = "Canceled!";
          clearInterval(downloadTimer);
          cancelTimer = false;
          activeTimer = false;
          return;
          
        }
        if(foodTypeTime <= 0){
          clearInterval(downloadTimer);
          document.getElementById("countdown").innerHTML = "Finished!";
          var audio = new Audio('./sound/sizzle.mp3');
          audio.play();
          //document.getElementById("body").style.animationPlayState = "running";
          activeTimer = false;
        } else {
          document.getElementById("countdown").innerHTML = foodTypeTime + " seconds remaining";
        }
        foodTypeTime -= 1;
      }, 1000);
  }
}
function CancelTimer(){
  cancelTimer = true;
  
}