const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

$(".Beli-btn").click(function(){
    alert("Beli Sekarang ?")
    window.location.href = "PembelianTiket.html";
});

$(document).ready(function(){
    $("#paket").fadeIn("slow");
    $("#paket-btn").fadeIn("slow");
});