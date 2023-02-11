const { createApp } = Vue

createApp({
    data() {
      return {
        showMore: true,
      };
    },
}).mount("#menu");

const toggleMenu = document.querySelector(".js-menu-toggle");
const menu = document.querySelector(".js-menu-drodpown");

const toggleDropdown = () => {
  if (window.innerWidth >= 1024) return
  menu.classList.toggle("show");
  toggleMenu.classList.toggle("close");
};

toggleMenu.addEventListener("click", () => {
  toggleDropdown();
});

document.querySelectorAll('.header-nav__list-item').forEach(el => {
  if (el.classList.contains('sub')) return
  el.addEventListener("click", () => {
    toggleDropdown();
  })
})

document.querySelector('#toggle-droprown').addEventListener('click', () => {
  document.querySelector('#toggle-droprown').classList.toggle('open')
})

const infoItems = document.querySelectorAll('.info-item')
const menuItems = document.querySelectorAll('.menu-list__item .button')

infoItems.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('open')
  })
})

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    const target = el.href.split('#')[1]
    document.getElementById(target).classList.add('open')
  })
})