const body = document.querySelector('body');
const search = document.querySelector('#search');
const searchBar = document.querySelector('.searchBar');
const cross = document.querySelector('.cross');
search.addEventListener('click', () => searchBar.classList.add('active')); // add active class with the searchBar
cross.addEventListener('click', () => searchBar.classList.remove('active')); // remove active class from the searchBar

const p_menu = document.querySelector(".p_menu");
profile.addEventListener('click', () => p_menu.classList.toggle('active'));

const scrollTop = document.querySelector('.top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});
scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Function to toggle between login and signup forms
const toggleForms = () => {
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
    }
};

// Add event listeners to the login and signup links
var loginLink = document.getElementById('login-link');
var signupLink = document.getElementById('signup-link');

loginLink.addEventListener('click', toggleForms);
signupLink.addEventListener('click', toggleForms);

// to show and hide the password field
let passwords = document.querySelectorAll('#password');
let toggle_visibility = document.querySelectorAll('#toggle_visibility');

toggle_visibility.forEach((element, index) => {
    let password = passwords[index];
    element.addEventListener('click', function() {
        if (password.type === 'password') {
            password.type = 'text';
            this.name = 'eye-off';
        } else {
            password.type = 'password';
            this.name = 'eye';
        }
    });
})



// to show the password and confirm password is macth or not
$(document).ready(function() {
    $('#cPassword').on('input', function() {
      let password = $('#password').val();
      let confirmPassword = $(this).val();
  
      if (password === confirmPassword) {
        $('#passwordMatch').text('Password match').css('color', 'green');
      } else {
        $('#passwordMatch').text('Password do not match').css('color', 'red');
      }
    });
  });
  