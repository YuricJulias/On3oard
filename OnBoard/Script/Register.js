const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});

const names = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const address = document.getElementById('address')
const form = document.getElementById('Form');

form.addEventListener('submit',(e) => {
    let message = [];

    if(names.value === '' || names.value == null)
    {
        alert('Name is Required !!!');
        return;
    }

    if(email.value === '' || email.value == null)
    {
        alert('Email is Required !!!');
        return;
    }

    if(address.value === '' || address.value == null)
    {
        alert('Address is Required !!!');
        return;
    }


    if(password.value <= 6 )
    {
        alert('Password need to be longer than 6 character');
        return;
    }

    if(password.value >= 20 )
    {
        alert('Password need to be less than 20 character');
        return;
    }
    alert("Submit Berhasil");

    window.location.href = "Home.html";
    e.preventDefault();
});