<template>
  <div id="app">
    <div class="home">
      <div class="gridContainer">
        <!-- Grid 1 -->

        <div v class="grid grid1" data-aos="fade-up">
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

        <!-- Grid 2 - About -->

        <nuxtLink to="/about" v class="grid grid2" data-aos="fade-up">
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

        <!-- Grid 3 - Projects -->

        <nuxtLink to="/projects" v class="grid grid3" data-aos="fade-up">
          <gridCard>
            <div class="wrapper">
              <div class="image">
                <img src="@/assets/images/project.svg">
              </div>
              <div class="text">
                <p>What I've worked on</p>
                <h2>Projects</h2>
              </div>
            </div>
          </gridCard>
        </nuxtLink>

        <!-- Grid 4 - Skills -->

        <div v class="grid grid4" data-aos="fade-up">
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
                  :breakpoints="{
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      effect: 'slide',
                    },
                  }"
                >
                  <SwiperSlide v-for="skill in skills" :key="skill.id">
                    <img :src="skill.icon" class="skill-icon" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </gridCard>
        </div>

        <!-- Grid 5 - Services -->

        <nuxtLink to="/services" v class="grid grid5" data-aos="fade-up">
          <gridCard>
            <div class="wrapper">
              <div class="icons">
                <i class="bi bi-code-slash"></i>
                <i class="bi bi-phone"></i>
                <i class="bi bi-laptop"></i>
                <i class="bi bi-gear"></i>
              </div>
              <div class="text">
                <p>What I can do</p>
                <h2>Services</h2>
              </div>
            </div>
          </gridCard>
        </nuxtLink>

        <!-- Grid 6 - Profiles -->

        <nuxtLink to="/contact" v class="grid grid6" data-aos="fade-up">
          <gridCard>
            <div class="wrapper">
              <div class="icons">
                <div>
                  <i class="bi bi-linkedin"></i>
                </div>
                <div>
                  <i class="bi bi-github"></i>
                </div>
              </div>
              <div class="text">
                <p>Connect with me</p>
                <h2>Profiles</h2>
              </div>
            </div>
          </gridCard>
        </nuxtLink>

        <!-- Grid 7 - Stats -->

        <div v class="grid grid7" data-aos="fade-up">
          <gridCard :showButton="false">
            <div class="wrapper">
              <div>
                <h2>02</h2>
                <p>Years Experience</p>
              </div>
              <div>
                <h2>25+</h2>
                <p>Completed Projects</p>
              </div>
            </div>
          </gridCard>
        </div>

        <!-- Grid 8 - Contact -->

        <nuxtLink to="/contact" v class="grid grid8" data-aos="fade-up">
          <gridCard>
            <div class="wrapper">
              <div class="icon">
                <i class="bi bi-stars"></i>
              </div>
              <div class="text">
                <p>
                  Let's <br />
                  work <span>together</span>
                </p>
              </div>
            </div>
          </gridCard>
        </nuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead ({
  title: 'Benzama Musa | Frontend Web Developer',
})

import gridCard from "@/components/gridCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import HTML5 from "@/assets/icons/html.png";
import CSS3 from "@/assets/icons/css.png";
import JavaScript from "@/assets/icons/javascript.png";
import TypeScript from "@/assets/icons/typescript.png";
import VueJS from "@/assets/icons/vue.png";
import Nuxt from "@/assets/icons/nuxt.png";
import TailwindCSS from "@/assets/icons/tailwind.png";
import Bootstrap from "@/assets/icons/bootstrap.png";
import SASS from "@/assets/icons/sass.png";
import Firebase from "@/assets/icons/firebase.png";
import Quasar from "@/assets/icons/quasar.png";
import Pinia from "@/assets/icons/pinia.svg";

const skills = [
  { id: 1, name: "HTML5", icon: HTML5 },
  { id: 2, name: "CSS3", icon: CSS3 },
  { id: 3, name: "JavaScript", icon: JavaScript },
  { id: 4, name: "TypeScript", icon: TypeScript },
  { id: 5, name: "Bootstrap", icon: Bootstrap },
  { id: 6, name: "Tailwind CSS", icon: TailwindCSS },
  { id: 7, name: "SASS", icon: SASS },
  { id: 8, name: "Vue.js", icon: VueJS },
  { id: 9, name: "Nuxt.js", icon: Nuxt },
  { id: 10, name: "Quasar", icon: Quasar },
  { id: 11, name: "Pinia", icon: Pinia },
  { id: 12, name: "Firebase", icon: Firebase }
];
</script>

<!-- Grids -->

<style lang="scss">
@import "@/assets/styles/main.scss";

.home {
  /* Base text */

  .text {
    text-align: start;
    color: var(--primary-color);
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

  @include respond-between('sm', 'lg') {
    .grid1 {
      .wrapper {
        flex-direction: row;
        gap: 50px;
        .image {
          height: 200px;
          width: 175px;
          img {
            border-radius: 25px 0 25px 0;
          }
        }
        .text {
          width: 35%;
          > div {
            h2 {
              margin-top: 1px;
              font-size: 25px;
            }
          }
          > p {
            font-size: 15px;
          }
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
      .signature {
        margin-top: 25px;
        font-family: signature-font;
        font-size: 75px;
        color: var(--accent-color);
      }
    }
  }

  @include respond-between('sm', 'lg') {
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
    }
  }

  @include respond-between('sm', 'lg') {
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
      ::before {
        background-color: transparent;
      }
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

  @include respond-between('lg', 'max') {
    .grid4 {
      .wrapper {
        .slider {
          .mySwiper {
            .swiper-slide {
              .skill-icon {
                width: 100px;
                height: 100px;
              }
            }
          }
        }
      }
    }
  }

  /* Grid 5 - Services */

  .grid5 {
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0;
      gap: 10px;
      .icons {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 35px;
        i {
          font-size: 25px;
          color: var(--primary-color);
          opacity: 0.75;
        }
      }
    }
  }

  /* Grid 6 - Profiles */

  .grid6 {
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0;
      gap: 10px;
      .icons {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        div {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--primary-color);
          box-shadow: 2px 2px 8px var(--shadow-color),
            -2px -2px 8px var(--shadow-color);
        }
      }
    }
  }

  /* Grid 7 - Stats */

  .grid7 {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 25px;
      padding: 10px 0;
      div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 25px 0 25px 0;
        box-shadow: 2px 2px 8px var(--shadow-color),
          -2px -2px 8px var(--shadow-color);
        h2 {
          font-family: header-font;
        }
        p {
          font-family: sub-header-font;
          opacity: 0.75;
        }
      }
    }
  }

  @include respond-between('sm', 'lg') {
    .grid7 {
      .wrapper {
        padding: 20px;
      }
    }
  }

  @include respond-between('lg', 'max'){
    .grid7 {
      .wrapper {
        flex-direction: row;
        padding: 20px;
        gap: 35px;
        div {
          height: max-content;
          width: max-content;
          padding: 35px;
        }
      }
    }
  }

  /* Grid 8 - Contact */

  .grid8 {
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0;
      .icon {
        position: relative;
        font-size: 50px;
        color: var(--primary-color);
        opacity: 0.5;
        i {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .text {
        p {
          font-size: 25px;
          font-family: header-font;
          opacity: 1;
          font-weight: bold;
          span {
            color: var(--accent-color);
          }
        }
      }
    }
  }

  @include respond-between('sm', 'lg') {
    .grid8 {
      .wrapper {
        .icon {
          font-size: 60px;
        }
        .text {
          p {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>