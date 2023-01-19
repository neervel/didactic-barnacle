const openMenu = document.querySelector('.js-menu-open')
const closeMenu = document.querySelector('.js-menu-close')
const menu = document.querySelector('.js-menu-drodpown')

const toggleDropdown = () => {
    menu.classList.toggle('show')
    openMenu.classList.toggle('hide')
    closeMenu.classList.toggle('hide')
}

openMenu.addEventListener('click', () => {
    toggleDropdown()
})

closeMenu.addEventListener('click', () => {
    toggleDropdown()
})