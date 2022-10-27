window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




AOS.init();

$(function(){
    $('.chart').easyPieChart({
        size:160,
        barColor:"#FFB400",
        scaleLength:0,
        lineWidth:15,
        trackColor:"#636161",
        lineCap:"circle",
        animate:2000,
    })
})