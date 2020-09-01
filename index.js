var numberOfButtons = document.querySelectorAll(".SaReGaMaPa").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".SaReGaMaPa")[i].addEventListener("click", function() {
    var ButtonClicked = this.innerHTML;
     makeSound(ButtonClicked);
     addAnimation(ButtonClicked);
  });
}

document.addEventListener("keydown", function(event) {
     makeSound(event.key);
     addAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var _1 = new Audio("./sounds/one.mp3");
      _1.play();
      break;
    case "a":
      var _2 = new Audio("./sounds/two.mp3");
      _2.play();
      break;
    case "s":
      var _3 = new Audio("./sounds/three.mp3");
      _3.play();
      break;
    case "d":
      var _4 = new Audio("./sounds/four.mp3");
      _4.play();
      break;
    case "j":
      var _5 = new Audio("./sounds/five.mp3");
      _5.play();
      break;
    case "k":
      var _6 = new Audio("./sounds/six.mp3");
      _6.play();
      break;
    case "l":
      var _7 = new Audio("./sounds/seven.mp3");
      _7.play();
      break;
    case "m":
      var _8 = new Audio("./sounds/eight.mp3");
      _8.play();
      break;
  }
}
function addAnimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
