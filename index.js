import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
const { createApp } = Vue;

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const videoPopup = document.querySelector('.video-popup')
const videoPopupIframe = document.querySelector('#video-frame')
const video = document.querySelectorAll('.js-video')
video.forEach((el, i) => {
  el.addEventListener('click', () => {
    const link = el.getAttribute('data-video') + '?controls=0&autoplay=1'
    videoPopup.classList.remove('hidden')
    videoPopupIframe.src = link
  })
})

videoPopup.addEventListener('click', e => {
  videoPopup.classList.add('hidden')
  videoPopupIframe.src = ''
})

const swiperCards = new Swiper(".slider-about-slider", {
  loop: true,
  effect: "fade",
  autoHeight: true,
  spaceBetween: 50,
  speed: 500,
  allowTouchMove: false,
  
  fadeEffect: {
    crossFade: true
  },
});

const swiperText = new Swiper('.slider-about-tslider', {
  loop: true,
  effect: 'fade',
  spaceBetween: 50,
  speed: 500,
  
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    mousewheel: {
      thresholdDelta: 20,
      eventsTarget: '.slider-about-container'
    },

  breakpoints: {
    768: {
      navigation: false,
    }
  }
})

swiperText.on('slideChange', (s) => {
  swiperCards.slideTo(s.activeIndex)
})

if (window.innerWidth < 768) {
  swiperText.mousewheel.disable()
}

createApp({
  data() {
    return {
      sliderPosition: 0,
      lastRangePosition: 0,
      currentPosition: 1,
      midRange: 0,
      innerWidth: window.innerWidth
    };
  },

  created() {
    this.sliderPosition =
      this.lastRangePosition =
      this.midRange =
        parseInt(this.maxRange / 2);
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth
    })
  },

  methods: {
    handleRangeChange(e) {
      setTimeout(() => {
        const newVal = e.target.value;
  
        if (newVal - this.lastRangePosition >= 0) {
          const rangeTarget =
            this.currentPosition === 0 && newVal <= this.midRange
              ? this.midRange
              : this.maxRange;
          this.sliderPosition = rangeTarget
          if (this.currentPosition === 0 && newVal > this.midRange)
            this.currentPosition += 2;
          else this.currentPosition++;
          this.lastRangePosition = rangeTarget;
        } else if (newVal - this.lastRangePosition < 0) {
          const rangeTarget =
            this.currentPosition === 2 && newVal > this.midRange
              ? this.midRange
              : 0;
            this.sliderPosition = rangeTarget
  
          if (this.currentPosition === 2 && newVal <= this.midRange)
            this.currentPosition -= 2;
          else this.currentPosition--;
          this.lastRangePosition = rangeTarget;
        }
      }, 0)
    },

    handleSlideClick(side) {
      if (this.innerWidth < 768) return;

      if (side === "left" && this.currentPosition !== 2) {
        this.sliderPosition = this.maxRange
        this.currentPosition++;
        this.lastRangePosition = this.maxRange;
      } else if (side === "right" && this.currentPosition !== 0) {
        this.sliderPosition = 0
        this.currentPosition--;
        this.lastRangePosition = 0;
      }
    },

    handleThumbClick() {
      if (this.sliderPosition === 0 || this.sliderPosition === this.maxRange) {
        this.sliderPosition = this.midRange
        this.currentPosition = 1
        this.lastRangePosition = this.sliderPosition
      }
    }
  },

  computed: {
    maxRange() {
      const wWidth = this.innerWidth;

      if (wWidth >= 1440) {
        return 1300;
      } else if (wWidth < 1440 && wWidth >= 1024) {
        return 908;
      } else if (wWidth < 1024 && wWidth >= 768) {
        return 748;
      }
    },
  },
}).mount("#slider");

createApp({
  data() {
    return {
      showMore: true,
    };
  },

  mounted() {
    if (window.innerWidth < 768) {
      this.showMore = false;
    }
  },
}).mount("#pharms");

const faqElems = document.querySelectorAll('.faq-list__item-sum')

faqElems.forEach((el, i) => {
  el.addEventListener('click', () => {
    el.classList.toggle('open')
  })
})
