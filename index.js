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
                sliderPosition: 650,
                lastRangePosition: 650,
                currentPosition: 1,
                maxRange: 1300,
                midRange: 650,
            }
        },

        methods: {
            handleRangeChange(e) {
                const newVal = e.target.value

                if (newVal - this.lastRangePosition >= 0) {
                    const rangeTarget = this.currentPosition === 0 && newVal <= this.midRange ? this.midRange : this.maxRange
                    while(this.sliderPosition < rangeTarget) {
                        this.sliderPosition++
                    }
                    if (this.currentPosition === 0 && newVal > this.midRange) this.currentPosition += 2
                    else this.currentPosition++
                    this.lastRangePosition = rangeTarget
                } else if ((newVal - this.lastRangePosition < 0)) {
                    const rangeTarget = this.currentPosition === 2 && newVal > this.midRange ? this.midRange : 0
                    while(this.sliderPosition > rangeTarget) {
                        this.sliderPosition--
                    }
                    if (this.currentPosition === 2 && newVal <= this.midRange) this.currentPosition -= 2
                    else this.currentPosition--
                    this.lastRangePosition = rangeTarget
                }
            },

            handleSlideClick(side) {
                if (side === 'left' && this.currentPosition !== 2) {
                    while(this.sliderPosition < this.maxRange) {
                        this.sliderPosition++
                    }
                    this.currentPosition++
                    this.lastRangePosition = this.maxRange
                } else if (side === 'right' && this.currentPosition !== 0) {
                    while(this.sliderPosition > 0) {
                        this.sliderPosition--
                    }
                    this.currentPosition--
                    this.lastRangePosition = 0
                }
            }
        }
    }
).mount('#sliders')