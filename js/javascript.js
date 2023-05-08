// Toggle class active nav-navbar
const navNavbar = document.querySelector('.nav-navbar');

// Ketika Icon Menu Diklik
document.querySelector('#menu').onclick = () => {
    navNavbar.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan bar modal di mobile device
const navMenu = document.querySelector('#menu');
document.addEventListener('click', function(e){
    if (!navMenu.contains(e.target) && !navNavbar.contains(e.target)) {
        navNavbar.classList.remove('active');
    }
});
