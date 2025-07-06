<template>
  <div class="aboutPage">
    <!-- Page Title -->

    <div class="pageTitle" data-aos="fade-up">
      <i class="bi bi-claude"></i>
      <h2>About</h2>
      <i class="bi bi-claude"></i>
    </div>

    <!-- Page Content -->

    <div class="content">
      <div class="gridContainer">
        <!-- Grid 1 - Image -->

        <div class="grid grid1" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <div class="image">
                <img src="@/assets/images/headshot.jpg" alt="" />
              </div>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid 2 - About -->

        <div class="grid grid2" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <h3>Benzama Musa</h3>
              <transition name="expand">
                <p :class="{ clamped: !showFullBio }" @click="toggleBio">
                  I’m a passionate Frontend Developer with two years of
                  experience transforming design concepts into fast, responsive,
                  and accessible web applications. I specialize in modern
                  JavaScript (ES6+), TypeScript, and Vue.js, paired with CSS3,
                  Sass, Tailwind, or Bootstrap to create pixel-perfect
                  interfaces. My workflow emphasizes clean, maintainable code,
                  performance optimization, and cross‑browser compatibility,
                  ensuring every site feels native on desktop and mobile alike.
                  I thrive on collaboration: working closely with designers,
                  back‑end engineers, and product managers to bring visions to
                  life—and I’m always eager to learn new technologies or improve
                  existing processes. Whether architecting complex component
                  libraries, integrating RESTful APIs, or fine‑tuning animations
                  for a seamless user experience, I aim to deliver solutions
                  that delight users and drive business results.
                  <span class="readmore">
                    {{ showFullBio ? " Show Less" : "… Read More" }}
                  </span>
                </p>
              </transition>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid 3 - Resume -->

        <a
          href="/resume.pdf"
          target="_blank"
          class="grid grid3"
          data-aos="fade-up"
        >
          <grid-card>
            <div class="wrapper">
              <div class="image">
                <img src="@/assets/images/resume.svg" alt="" />
              </div>
              <div class="text">
                <p>View my Resume</p>
                <h2>Resume</h2>
              </div>
            </div>
          </grid-card>
        </a>

        <!-- Grid 4 - Work Experience -->

        <div class="grid grid4" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <div class="header">
                <div class="icon">
                  <i class="bi bi-briefcase-fill"></i>
                </div>
                <h3>Work Experience</h3>
              </div>
              <hr />
              <div class="body">
                <li>
                  <div class="left">
                    <h3>Greysoft Technologies</h3>
                    <p>Intern</p>
                  </div>
                  <div class="right">
                    <div>2023 - 2024</div>
                  </div>
                </li>
              </div>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid 5 - Education -->

        <div class="grid grid5" data-aos="fade-up">
          <grid-card-2>
            <div class="wrapper">
              <div class="header">
                <div class="icon">
                  <i class="bi bi-mortarboard-fill"></i>
                </div>
                <h3>Education</h3>
              </div>
              <hr />
              <div class="body">
                <li>
                  <div class="left">
                    <h3>Redeemers University</h3>
                    <p>BSc in Computer Science</p>
                  </div>
                  <div class="right">
                    <div>2024 - 2028</div>
                  </div>
                </li>
              </div>
            </div>
          </grid-card-2>
        </div>

        <!-- Grid 6 - Stats -->

        <div class="grid grid6" data-aos="fade-up">
          <grid-card-2>
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
          </grid-card-2>
        </div>

        <!-- Grid 7 - Profiles -->

        <div class="grid grid7" data-aos="fade-up">
          <grid-card>
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
          </grid-card>
        </div>
      </div>
    </div>

    <infinite-slider data-aos="fade-up" />

    <get-in-touch data-aos="fade-up" />
  </div>
</template>

<script setup>
useHead ({
  title: 'About me',
})

import { ref } from "vue";

const showFullBio = ref(false);

function toggleBio() {
  showFullBio.value = !showFullBio.value;
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.aboutPage {
  .wrapper {
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
  }

  /* Grid 1 - About */

  .grid1 {
    .wrapper {
      padding: 15px !important;

      .image {
        width: 100%;
        height: 275px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
          padding: 0;
          margin: 0;
        }
      }
    }
  }

  @include respond-between(sm, highest) {
    .grid1 {
      .wrapper {
        .image {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  /* Grid 2 - About */

  .grid2 {
    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 25px;
      .clamped {
        overflow: hidden;
        display: -webkit-box;
        line-clamp: 10;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
      }

      @include respond-between (sm, lg) {
        .clamped {
          display: block;
        }
        .readmore {
          display: none;
        }
      }

      /* the little “Read More” text */
      .readmore {
        color: var(--accent-color);
        font-family: sub-header-font;
        text-decoration: underline;
        margin-left: 4px;
        cursor: pointer;
      }

      /* transition on max-height → smooth expand/collapse */
      .expand-enter-active,
      .expand-leave-active {
        transition: max-height 0.3s ease;
      }
      .expand-enter-from,
      .expand-leave-to {
        max-height: 4.5em; /* roughly 3 lines × 1.5em line-height */
      }
      .expand-enter-to,
      .expand-leave-from {
        max-height: 20em; /* big enough to show full text */
      }

      h3 {
        font-family: header-font;
        font-size: 25px;
        font-weight: bold;
      }

      p {
        font-family: body-font;
        letter-spacing: 1px;
      }
    }
  }

  /* Grid 3 - Resume */

  .grid3 {
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0 !important;
      gap: 25px;
      .image {
        width: 100%;
        padding: 25px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  /* Grid 4 & 5 - Work Experience & Education */

  .grid4,
  .grid5 {
    .wrapper {
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        div {
          width: 27.5px;
          height: 27.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--accent-color);
          border-radius: 50%;
        }
        h3 {
          font-family: header-font;
          font-weight: bold;
        }
      }

      hr {
        margin: 15px 0;
        opacity: 0.25;
        border-radius: 5px;
      }

      .body {
        li {
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;

          .left {
            display: flex;
            flex-direction: column;
            gap: 5px;

            h3 {
              font-family: sub-header-font;
              font-size: 17.5px;
            }

            p {
              font-family: body-font;
              font-size: 12.5px;
            }
          }
          .right {
            div {
              background-color: var(--primary-color);
              border-radius: 5px;
              padding: 5px 10px;
              white-space: nowrap;
              font-family: header-font;
              font-weight: bold;
              font-size: 12.5px;
              color: var(--secondary-color);
            }
          }
        }
      }
    }
  }

  /* Grid 6 - Stats */

  .grid6 {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 25px;
      padding: 10px 0;
      div {
        width: max-content;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        text-align: center;
        border-radius: 25px 0 25px 0;
        box-shadow: 2px 2px 8px var(--shadow-color),
          -2px -2px 8px var(--shadow-color);
        padding: 15px 30px;
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

  @include respond-between(sm, highest) {
    .grid6 {
      .wrapper {
        flex-direction: row;

        div {
          height: max-content;
          padding: 25px 10px;
        }
      }
    }
  }

  /* Grid 7 - Profiles */

  .grid7 {
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0 !important;
      .icons {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding: 40px 0 50px 0;
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
}
</style>