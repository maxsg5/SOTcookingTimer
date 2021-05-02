
var activeTimer = false;
var cancelTimer = false;

function startTimer(foodTypeTime) {
  if(!activeTimer){
      activeTimer = true;
      document.getElementById("body").style.animationPlayState = "paused";
      document.getElementById("body").style.backgroundColor = "white";


      //var timeleft = 5;
      var downloadTimer = setInterval(function(){
        if(cancelTimer){
          clearInterval(downloadTimer);
          cancelTimer = false;
        }
        if(foodTypeTime <= 0){
          clearInterval(downloadTimer);
          document.getElementById("countdown").innerHTML = "Finished!";
          var audio = new Audio('./sound/sizzle.mp3');
          audio.play();
          //document.getElementById("body").style.animationPlayState = "running";
          activeTimer = false;
        } else {
          document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
      }, 1000);
  }
}

function startFishTimer() {
    if(!activeTimer){
        activeTimer = true;
        document.getElementById("body").style.animationPlayState = "paused";
        document.getElementById("body").style.backgroundColor = "white";


        var timeleft = 5;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished!";
            var audio = new Audio('./sound/sizzle.mp3');
            audio.play();
            //document.getElementById("body").style.animationPlayState = "running";
            activeTimer = false;
          } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
          }
          timeleft -= 1;
        }, 1000);
    }
}

function startTrophyFishTimer() {
    if(!activeTimer){
        activeTimer = true;
        document.getElementById("body").style.animationPlayState = "paused";
        document.getElementById("body").style.backgroundColor = "white";

        var timeleft = 90;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished!";
            var audio = new Audio('./sound/sizzle.mp3');
            audio.play();
            activeTimer = false;
          } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
          }
          timeleft -= 1;
        }, 1000);
    }
}

function startMeatTimer() {
    if(!activeTimer){
        activeTimer = true;
        document.getElementById("body").style.animationPlayState = "paused";

        var timeleft = 60;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished!";
            var audio = new Audio('./sound/sizzle.mp3');
            audio.play();
            activeTimer = false;
          } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
          }
          timeleft -= 1;
        }, 1000);
    }
}


function startMegladonMeatTimer() {
    if(!activeTimer){
        activeTimer = true;
        document.getElementById("body").style.animationPlayState = "paused";

        var timeleft = 120;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished!";
            var audio = new Audio('./sound/sizzle.mp3');
            audio.play();
            activeTimer = false;
          } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
          }
          timeleft -= 1;
        }, 1000);
    }
}

function startKrakenMeatTimer() {
    if(!activeTimer){
        activeTimer = true;
        document.getElementById("body").style.animationPlayState = "paused";

        var timeleft = 120;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished!";
            var audio = new Audio('./sound/sizzle.mp3');
            audio.play();
            activeTimer = false;
          } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
          }
          timeleft -= 1;
        }, 1000);
    }
}