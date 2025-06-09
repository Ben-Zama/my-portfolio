<template>
  <div class="infiniteSlider relative" ref="infiniteSlider">
    <div class="fade-left"></div>
    <div class="fade-right"></div>
    <div class="innerSlider" :style="sliderStyle">
      <div
        v-for="(item, index) in infiniteSliderItems"
        :key="index"
        class="slide"
      >
        <i class="bi bi-claude"></i>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sliderItems = [
  { id: 1, name: 'Landing Pages' },
  { id: 2, name: 'E-Commerce Landing Page' },
  { id: 4, name: 'Portfolios' },
  { id: 3, name: 'Web Apps' },
]

const infiniteSliderItems = Array(20).fill(sliderItems).flat()
const infiniteSlider = ref(null)
const offset = ref(0)
const speed = 0.5 
let animationFrameId

const sliderStyle = ref({ transform: 'translateX(0)' })

function animate() {
  offset.value += speed
  if (infiniteSlider.value) {
    const contentWidth = infiniteSlider.value.scrollWidth
    if (offset.value >= contentWidth / 2) {
      offset.value = 0
    }
    sliderStyle.value = {
      transform: `translateX(-${offset.value}px)`
    }
  }
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  animationFrameId = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.infiniteSlider {
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: var(--secondary-color);
  border: solid var(--primary-color);
  border-width: 1px 0 1px 0;
  box-shadow: 2px 2px 8px var(--shadow-color), -2px -2px 8px var(--shadow-color);

  .fade-left,
  .fade-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 1;
    pointer-events: none;
  }

  .fade-left {
    left: 0;
    background: linear-gradient(to left, transparent, var(--secondary-color));
  }

  .fade-right {
    right: 0;
    background: linear-gradient(to right, transparent, var(--secondary-color));
  }

  .innerSlider {
    position: relative;
    display: flex;
    width: max-content;
    padding: 25px 0;

    .slide {
      display: flex;
      align-items: center;
      gap: 25px;
      padding: 0 0 0 25px;
      font-size: 1.25rem;
      white-space: nowrap;

      p {
        font-family: sub-header-font;
      }

      i {
        opacity: 0.75;
      }
    }
  }
}

@include respond(md) {
  .infiniteSlider {
    .innerSlider {
      .slide {
        gap: 50px;
        padding: 0 0 0 50px;
      }
    }
  }
}
</style>
