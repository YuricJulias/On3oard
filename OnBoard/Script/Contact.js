const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const form = document.getElementById('Form');

form.addEventListener('submit',(e) => {
    let message = [];

    if(firstname.value === '' || firstname.value == null)
    {
        alert('First Name is Required !!!');
        return;
    }

    if(lastname.value === '' || lastname.value == null)
    {
        alert('Last Name is Required !!!');
        return;
    }

    if(email.value === '' || email.value == null)
    {
        alert('Email is Required !!!');
        return;
    }

    alert("Terima Kasih Telah Menghubungi Kami");

    window.location.href = "Home.html";
    e.preventDefault();
});