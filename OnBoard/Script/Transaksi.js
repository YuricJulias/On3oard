const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

const Asal = document.getElementById('Asal');
const Tujuan = document.getElementById('Tujuan');
const Tanggal = document.getElementById('Tanggal');
const Dewasa = document.getElementById('Dewasa');
const Bayi = document.getElementById('Bayi');

form.addEventListener('submit',(e) => {
    let message = [];

    if(Asal.value === '' || Asal.value == null)
    {
        alert('Kolom Asal masih Kosong !!!');
        return;
    }

    if(Tujuan.value === '' || Tujuan.value == null)
    {
        alert('Kolom Tujuan masih Kosong !!!');
        return;
    }

    if(Tanggal.value === '' || Tanggal.value == null)
    {
        alert('Kolom Tanggal masih Kosong !!!');
        return;
    }
    if(Dewasa.value === '' || Dewasa.value == null)
    {
        alert('Kolom Dewasa masih Kosong !!!');
        return;
    }
    if(Bayi.value === '' || Bayi.value == null)
    {
        alert('Kolom Bayi masih Kosong !!!');
        return;
    }

    alert("Terima Kasih Sudah Membeli Tiket");

    window.location.href = "Homepage.html";
    e.preventDefault();
});