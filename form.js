var modal0 = document.getElementById("myModal-0");
var btn0 = document.getElementById("myBtn-0");
var span0 = document.getElementsByClassName("close")[0];
btn0.onclick = function() {
  modal0.style.display = "block";
}
span0.onclick = function() {
  modal0.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
}

var modal1 = document.getElementById("myModal-1");
var btn1 = document.getElementById("myBtn-1");
var span1 = document.getElementsByClassName("close")[1];
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


var modal2 = document.getElementById("myModal-2");
var btn2 = document.getElementById("myBtn-2");
var span2 = document.getElementsByClassName("close")[2];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


