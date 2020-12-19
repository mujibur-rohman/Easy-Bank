const toogleMenu = document.getElementsByClassName('hamburger-menu')[0];

const menu = document.getElementsByClassName('bg-menu')[0];

toogleMenu.addEventListener('click', () => {
    (menu.classList.contains('show')) ? menu.classList.remove('show') : menu.classList.add('show')
})


// SCROLL REVERAL

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.mockup, .service-item, .article`, {
    interval: 200
})