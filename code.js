// Hides and displays the Green Div.

// creates a new element
var newDiv = document.createElement("div");  
newDiv.style.height = "200px";
newDiv.style.width = "400px";
newDiv.style.backgroundColor = "green";
newDiv.style.overflow = "hidden"

// adds the new element to the DOM
var target = document.getElementById('part2');
document.body.insertBefore(newDiv,target);

// Appends text to the element
var newContent = document.createTextNode("Box 1"); 
newDiv.appendChild(newContent);

// changes color in the DIV
  newDiv.addEventListener('mousemove', function(event) {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  newDiv.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
});
  
newDiv.id = "box";  

// calls the functions by clicking on the buttons
function slideIn(elem){
  var element = document.getElementById(elem);
  element.style.transition = "height 1.0s linear 0s";
  element.style.height = "200px";
}
function slideOut(elem){
  var element = document.getElementById(elem);
  element.style.transition = "height 1.0s linear 0s";
  element.style.height = "0px";
}





// Part2

// Calls the function by clicking on the button
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
