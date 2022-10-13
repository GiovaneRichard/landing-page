let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu-area');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-opened');
});