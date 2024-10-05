var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColours[randomNumber];
  console.log(randomNumber);
}
