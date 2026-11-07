document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.navbar-mobile-menu-items');
    const toggleMenu = document.querySelector('.navbar-mobile-menu-toggle');

    toggleMenu = document.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    })
})