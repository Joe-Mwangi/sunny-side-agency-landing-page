const menuBar = document.querySelector('.icon')
const links = document.querySelector('.links')
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('menu')
    links.classList.toggle('show-links')
})