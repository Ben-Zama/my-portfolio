<template>
  <div id="app">
    <div class="home">
      <div class="gridContainer">
        <!-- Grid 1 -->

        <div class="grid grid1">
          <gridCard :showButton="false">
            <div class="wrapper">
              <div class="image">
                <img src="@/assets/images/headshot.jpg" alt="" />
              </div>
              <div class="text">
                <div>
                  <p>Frontend Web Developer</p>
                  <h2>Benzama Musa</h2>
                </div>
                <p>
                  Creative web developer crafting fast, responsive, and
                  user-friendly websites with modern technologies.
                </p>
              </div>
            </div>
          </gridCard>
        </div>

        <!-- Grid 2 -->

        <nuxtLink to="/about" class="grid grid2">
          <gridCard>
            <div class="wrapper">
              <div class="signature">
                <p>Benzama</p>
              </div>
              <div class="text">
                <p>More about me</p>
                <h2>About</h2>
              </div>
            </div>
          </gridCard>
        </nuxtLink>

        <!-- Grid 3 -->

        <nuxtLink to="/projects" class="grid grid3">
          <gridCard>
            <div class="wrapper">
              <div class="image">
                <img src="@/assets/images/project.svg" alt="" />
              </div>
              <div class="text">
                <p>What I've worked on</p>
                <h2>Projects</h2>
              </div>
            </div>
          </gridCard>
        </nuxtLink>

        <!-- Grid 4 -->

        <div class="grid grid4">
          <gridCard :showButton="false">
            <div class="wrapper">
              <div class="slider">
                <Swiper
                  :modules="[Autoplay]"
                  :slides-per-view="1"
                  effect="fade"
                  :autoplay="{ delay: 3000, disableOnInteraction: false }"
                  loop
                  :observer="true"
                  :observe-parents="true"
                  class="mySwiper"
                >
                  <SwiperSlide v-for="skill in skills" :key="skill.id">
                    <img
                      :src="skill.icon"
                      class="skill-icon"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </gridCard>
        </div>

        <!-- Grid 5 -->

        <nuxtLink to="/services" class="grid grid5">
          <gridCard></gridCard>
        </nuxtLink>

        <!-- Grid 6 -->

        <nuxtLink to="/profiles" class="grid grid6">
          <gridCard></gridCard>
        </nuxtLink>

        <!-- Grid 7 -->

        <div class="grid grid7">
          <gridCard :showButton="false"></gridCard>
        </div>

        <!-- Grid 8 -->

        <nuxtLink to="/contact" class="grid grid8">
          <gridCard></gridCard>
        </nuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import gridCard from "@/components/gridCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';

import HTML5 from "@/assets/icons/html.png";
import CSS3 from "@/assets/icons/css.png";
import JavaScript from "@/assets/icons/javascript.png";
import VueJS from "@/assets/icons/vue.png";
import Nuxt from "@/assets/icons/nuxt.png";
import TailwindCSS from "@/assets/icons/tailwind.png";
import Bootstrap from "@/assets/icons/bootstrap.png";
import SASS from "@/assets/icons/sass.png";
import Firebase from "@/assets/icons/firebase.png";

const skills = [
  { id: 1, name: "HTML5", icon: HTML5 },
  { id: 2, name: "CSS3", icon: CSS3 },
  { id: 3, name: "JavaScript", icon: JavaScript },
  { id: 4, name: "Vue.js", icon: VueJS },
  { id: 5, name: "Nuxt.js", icon: Nuxt },
  { id: 6, name: "Tailwind CSS", icon: TailwindCSS },
  { id: 7, name: "Bootstrap", icon: Bootstrap },
  { id: 8, name: "SASS", icon: SASS },
  { id: 9, name: "Firebase", icon: Firebase }
];
</script>

<!-- Grids -->

<style lang="scss">
@import "@/assets/styles/main.scss";

/* Grid 1 */

.grid1 {
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .image {
    height: 100px;
    width: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .text {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    > div {
      p {
        font-family: sub-header-font;
        font-size: 12.5px;
        opacity: 0.75;
      }
      h2 {
        font-family: header-font;
      }
    }
    > p {
      font-family: body-font;
      font-size: 12.5px;
    }
  }
}

@include respond(lg) {
  .grid1 {
    .wrapper {
      flex-direction: row;
      gap: 25px;
      .image {
        height: 200px;
        width: 175px;
        img {
          border-radius: 50px 0 50px 0;
        }
      }
      .text {
        width: 50%;
      }
    }
  }
}

/* Grid 2 - About */

.grid2 {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 0;
  }
  .signature {
    margin-top: 25px;
    font-family: signature-font;
    font-size: 75px;
    color: var(--accent-color);
  }
  .text {
    text-align: start;
    p {
      font-family: sub-header-font;
      font-size: 12.5px;
      opacity: 0.75;
    }
    h2 {
      font-family: header-font;
      font-size: 20px;
    }
  }
}

@include respond(md) {
  .grid2 {
    .wrapper {
      .signature {
        margin-top: 50px;
      }
    }
  }
}

/* Grid 3 - Project*/

.grid3 {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
    gap: 10px;
    .image {
      width: 100%;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .text {
      text-align: start;
      p {
        font-family: sub-header-font;
        font-size: 12.5px;
        opacity: 0.75;
      }
      h2 {
        font-family: header-font;
        font-size: 20px;
      }
    }
  }
}

@include respond(md) {
  .grid3 {
    .wrapper {
      .image {
        height: 200px;
      }
    }
  }
}

/* Grid 4 - Skills highlight */

.grid4 {
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .slider {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      .mySwiper {
        width: 100%;
        height: 100%;
        background-color: transparent;
        
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          .skill-icon {
            width: 150px;
            height: 150px;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>