var buttonColours=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var gamePattern=[];
var randomChosenColour;
var userChosenColour;
var level=0;
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
 audio.play();
}

function nextSequence(){
userClickedPattern=[];
  $("h1").text("level "+level);
  level++;
  var randomNumber=Math.floor((Math.random()*4));
 randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}

function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");
  setTimeout(function() {
$("#" + currentColor).removeClass("pressed");
}, 100);
}

function statover(){
  level=0;
  gamePattern=[];
  $("h1").text("Press A Key to Start");
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userChosenColour)
  {
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  }
  else{
    console.log("fail");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },100);
    statover();
  }

}

$(".btn").on("click",function handler()
{
    userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

$(document).on("keypress",function excecte(){
  nextSequence();
})

//nextSequence();
