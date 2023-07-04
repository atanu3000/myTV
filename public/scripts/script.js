const body = document.querySelector('body');
const search = document.querySelector('#search');
const searchBar = document.querySelector('.searchBar');
const cross = document.querySelector('.cross');
search.addEventListener('click', () => searchBar.classList.add('active')); // add active class with the searchBar
cross.addEventListener('click', () => searchBar.classList.remove('active')); // remove active class from the searchBar

const p_menu = document.querySelector(".p_menu");
// const p_list = document.querySelectorAll(".p_menu li");
profile.addEventListener('click', () => p_menu.classList.toggle('active'));
// body.addEventListener('click', () => p_menu.classList.remove('active'));
// p_list.forEach((list) => {
//     list.addEventListener('click', () => p_menu.classList.remove('active'));
// });

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