<template>
  <div class="projects">
    <!-- Page Title -->

    <div class="pageTitle" data-aos="fade-up">
      <i class="bi bi-claude"></i>
      <h2>Portfolio</h2>
      <i class="bi bi-claude"></i>
    </div>

    <div class="content">
      <div class="sort" data-aos="fade-up">
        <button class="active">All</button>
        <button>Professional</button>
        <button>Personal</button>
      </div>

      <div class="portfolio">
        <div
          v-for="item in portfolio"
          :key="item"
          class="card"
          data-aos="fade-up"
        >
          <div class="image">
            <img :src="item.image" alt="" />
          </div>
          <div class="popup">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <div class="icons">
              <a href="" target="_blank">
                <i class="bi bi-link-45deg"></i>
              </a>
              <a href="" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <infinite-slider data-aos="fade-up" />

    <get-in-touch data-aos="fade-up" />
  </div>
</template>

<script setup>
useHead ({
  title: 'My works',
})

import image from "@/assets/images/project.png";

const portfolio = [
  {
    name: "Bluebrain landing Page",
    description:
      "The official website for Bluebrain agro & allied service Ltd.",
    link: "",
    image: image,
    githubRepo: "",
  },
  { link: "", githubRepo: "" },
  { link: "", githubRepo: "" },
  { link: "", githubRepo: "" },
  { link: "", githubRepo: "" },
  { link: "", githubRepo: "" },
];
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.projects {
  .content {
    padding: 0 5%;

    .sort {
      display: flex;
      gap: 15px;
      button {
        padding: 7.5px 15px;
        background-color: var(--secondary-color);
        color: var(--primary-color);
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s;
        &.active {
          background-color: var(--accent-color);
        }
        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .portfolio {
      margin: 50px 0;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 350px;
      gap: 25px;
      .card {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--secondary-color);
        padding: 10px;
        border-radius: 15px;
        box-shadow: 2px 2px 8px var(--shadow-color),
          -2px -2px 8px var(--shadow-color);
        overflow: hidden;
        .image {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
            transition: transform 0.3s;
          }
        }

        .popup {
          position: absolute;
          left: 50%;
          bottom: -100%;
          width: calc(100% - 40px);
          height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          transform: translateX(-50%);
          background-color: var(--secondary-color);
          color: var(--primary-color);
          padding: 0 10px;
          border-radius: 10px;
          text-align: center;
          transition: bottom 0.3s;
          h2 {
            font-family: sub-header-font;
            font-size: 17.5px;
          }
          p {
            font-family: body-font;
            font-size: 12.5px;
          }
          .icons {
            display: flex;
            gap: 15px;
            a {
                width: 35px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid var(--primary-color);
                border-radius: 50%;
                transition: all .3s;
                &:hover {
                    background-color: var(--primary-color);
                    color: var(--accent-color);
                    transform: scale(1.15);
                }
            }
          }
        }

        &:hover {
            padding: 0;
          .image {
            img {
              transform: scale(1.1);
            }
          }
          .popup {
            bottom: 20px;
          }
        }
      }
    }
  }

  @include respond-between(sm, lg) {
    .content {
      padding: 0 7.5%;
      .portfolio {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @include respond-between(sm, lg) {
    .content {
      padding: 0 10%;
      .portfolio {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 50px;
      }
    }
  }
}
</style>