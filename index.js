const toggleMenu = document.querySelector('.js-menu-toggle')
const menu = document.querySelector('.js-menu-drodpown')

const toggleDropdown = () => {
    menu.classList.toggle('show')
    toggleMenu.classList.toggle('close')
}

toggleMenu.addEventListener('click', () => {
    toggleDropdown()
})


const { createApp } = Vue

createApp(
    {
        data() {
            return {
                sliderPosition: 1,
            }
        }
    }
).mount('#sliders')