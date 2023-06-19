const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

$(document).ready(function(){
    $("#heading").fadeIn(1000);
    $("#p1").fadeIn(2000);
    $("#p2").fadeIn(2500);
    $("#p3").fadeIn(3000);
    $("#p4").fadeIn(3500);
});