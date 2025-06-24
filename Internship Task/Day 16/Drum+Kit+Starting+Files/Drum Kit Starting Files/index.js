var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    alert(buttonInnerHTML+" Clicked")

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  

  });
}
document.addEventListener("keypress",function(e){
  makeSound(e.key);
  buttonAnimation(e.key);

})
function makeSound(key){
  switch(key){
    case "w":
    var tom1=new Audio("./sounds/tom-1.mp3");
    tom1.play()
    break;
  }
  switch(key){
    case "a":
    var tom2=new Audio("./sounds/tom-2.mp3");
    tom2.play()
    break;
  }
  switch(key){
    case "s":
    var tom3 = new Audio("./sounds/tom-3.mp3");
    tom3.play()
    break;
  }
  switch(key){
    case "d":
    var tom4=new Audio("./sounds/tom-4.mp3");
    tom4.play()
    break;
  }
  switch(key){
    case "j":
    var cr=new Audio("./sounds/crash.mp3");
    cr.play()
    break;
  }
  switch(key){
    case "k":
    var snare=new Audio("./sounds/snare.mp3");
    snare.play()
    break;
  }
  switch(key){
    case "l":
    var kick=new Audio("./sounds/kick-base.mp3");
    kick.play()
    break;
  }

}
function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout (function(){
    activeButton.classList.remove("pressed");
  },100);
}