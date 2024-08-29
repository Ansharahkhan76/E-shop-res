let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
}
