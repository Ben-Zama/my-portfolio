<template>
  <div class="servicesPage">
    <!-- Page Title -->
    <div class="pageTitle" data-aos="fade-up">
      <i class="bi bi-claude"></i>
      <h2>Services</h2>
      <i class="bi bi-claude"></i>
    </div>

    <div class="content">
      <!-- Services -->
      <div class="services">
        <div
          v-for="item in services"
          :key="item"
          class="service"
          data-aos="fade-up"
        >
          <i :class="item.icon"></i>
          <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Work Process -->
      <div class="process">
        <div class="pageTitle" data-aos="fade-up">
          <i class="bi bi-claude"></i>
          <h2>My work Process</h2>
          <i class="bi bi-claude"></i>
        </div>
        <div class="container">
          <div class="processContainer">
            <div
              v-for="item in workProcess"
              :key="item"
              class="step"
              data-aos="fade-up"
            >
              <h2>{{ item.step }}</h2>
              <div></div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tools & Technologies -->
    <div class="skills" data-aos="fade-up">
      <div class="pageTitle" data-aos="fade-up">
        <i class="bi bi-claude"></i>
        <h2>Tools & Technologies</h2>
        <i class="bi bi-claude"></i>
      </div>
      <div class="container">
        <div
          v-for="item in skills"
          :key="item"
          class="image"
          data-aos="fade-up"
        >
          <img :src="item.icon" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>

    <infinite-slider data-aos="fade-up" />

    <!-- FAQs Section -->

    <div class="faqs">
      <div class="pageTitle" data-aos="fade-up">
        <i class="bi bi-claude"></i>
        <h2>Faqs</h2>
        <i class="bi bi-claude"></i>
      </div>
      <div class="faqsContainer" data-aos="fade-up">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          :class="['faq', { active: activeIndex === index }]"
        >
          <div class="title" @click="toggle(index)">
            <h2>{{ item.title }}</h2>
            <div>
              <i
                :class="activeIndex === index ? 'bi bi-dash' : 'bi bi-plus'"
              ></i>
            </div>
          </div>
          <div class="body">
            <p :class="{ visible: activeIndex === index }">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>

    <get-in-touch data-aos="fade-up" />
  </div>
</template>

<script setup>
import { ref } from "vue";

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
  { id: 12, name: "Firebase", icon: Firebase },
];

const services = [
  {
    title: "Web Development",
    icon: "bi-code-slash",
    description:
      "I build fast, responsive websites using modern technologies (HTML5, CSS3, JavaScript, VueJS, etc.) to deliver an engaging user experience.",
  },
  {
    title: "Mobile App Development",
    icon: "bi-phone-fill",
    description:
      "I develop cross‑platform mobile apps with Quasar framework, ensuring smooth performance and native‑like UX on iOS and Android.",
  },
  {
    title: "Web Maintenance",
    icon: "bi-gear-fill",
    description:
      "I provide ongoing support—updates, security patches, backups, and performance tweaks—to keep your site running smoothly.",
  },
];

const workProcess = [
  {
    step: "01",
    name: "Discovery & Planning",
    details:
      "We discuss your goals, audience, and project scope to align on vision, features, and timelines.",
  },
  {
    step: "02",
    name: "Design & Structure",
    details:
      "I create a layout and user interface plan to ensure the structure is clean, responsive, and user-friendly.",
  },
  {
    step: "03",
    name: "Frontend Development",
    details:
      "Using HTML, CSS, JavaScript, and modern frameworks, I bring the design to life with clean and optimized code.",
  },
  {
    step: "04",
    name: "Testing & Delivery",
    details:
      "I test across devices and browsers, fix bugs, and deliver a fast, accessible, and fully functional website.",
  },
];

const faqs = ref([
  {
    title: "What tech do you use?",
    body: "HTML5, CSS3 (or SCSS), vanilla JS, and Vue/Nuxt. I can integrate Tailwind or Bootstrap if requested.",
  },
  {
    title: "What do you need from Me?",
    body: "Provide design files (Figma, XD, Sketch), brand assets (logos, colors, fonts), and content. If you lack designs, I can help with basic wireframes.",
  },
  {
    title: "In how many days can you deliver?",
    body: "I can deliver in time ranging from 3 - 10 days depending on the project.",
  },
  {
    title: "Can you handle deployment?",
    body: "Yes. I supply deployment instructions for Netlify, Vercel, or your preferred host. Assisted deployment is available for an extra fee.",
  },
  {
    title: "Is SEO included?",
    body: "I implement SEO basics—semantic HTML, meta tags, and optimized assets to boost ranking and performance.",
  },
]);

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.servicesPage {
  /* Services */

  .content {
    padding: 0 5%;

    .services {
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 0 10px;
      .service {
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 20px;
        background-color: var(--secondary-color);
        box-shadow: 2px 2px 8px var(--shadow-color),
          -2px -2px 8px var(--shadow-color);
        text-align: center;
        border-radius: 15px;
        i {
          font-size: 30px;
          color: var(--accent-color);
        }
        div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          h2 {
            font-family: sub-header-font;
          }
          p {
            font-family: body-font;
          }
        }
      }
    }
  }

  /* Work Process */

  .process {
    margin: 50px 0;
    .container {
      .processContainer {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 50px;
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
          padding: 5px 35px;
          h2 {
            font-family: header-font;
            font-size: 35px;
            color: var(--primary-color);
            opacity: 0.5;
          }
          div {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: var(--accent-color);
          }
          h3 {
            font-family: sub-header-font;
            font-size: 20px;
          }
          p {
            font-family: body-font;
            font-size: 15px;
          }
        }
      }
    }
  }

  /* Tools & technologies */

  .skills {
    margin: 50px 0;
    background-color: var(--secondary-color);
    padding: 0 5% 25px 5%;
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 200px;
      gap: 25px;
      .image {
        width: 100%;
        height: 100%;
        padding: 10px;
        p {
          margin-top: 5px;
          text-align: center;
          font-family: body-font;
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.3s, transform 1s;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  /* FAQs section */

  .faqs {
    width: 100%;
    padding: 50px 5%;
    .faqsContainer {
      display: flex;
      flex-direction: column;
      gap: 25px;
      .faq {
        display: flex;
        flex-direction: column;
        padding: 20px 10px;
        background-color: var(--secondary-color);
        box-shadow: 2px 2px 8px var(--shadow-color),
          -2px -2px 8px var(--shadow-color);
        border-radius: 5px;
        transition: all 0.3s ease;
        &.active {
          .title {
            h2 {
              font-weight: bold;
            }
          }
          .body {
            p {
              max-height: 200px;
              opacity: 1;
              margin-top: 10px;
            }
          }
        }
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          h2 {
            font-size: 20px;
            font-family: sub-header-font;
            font-weight: normal;
          }
          > div {
            border: 1px solid var(--accent-color);
            color: var(--accent-color);
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
          }
        }
        .body {
          p {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.3s ease;
            font-family: body-font;
            font-size: 15px;
          }
          p.visible {
            max-height: 200px;
            opacity: 1;
            margin-top: 10px;
          }
        }
      }
    }
  }
}

@include respond(md) {
  .servicesPage {
    .content {
      padding: 0 7.5%;

      /* Services */

      .services {
        flex-direction: row;
        justify-content: space-evenly;
        .service {
          padding: 20px 10px;
        }
      }

      /* Work Process */

      .process {
        .container {
          .processContainer {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }
    }

    /* Tools & Technologies */

    .skills {
      .container {
        grid-template-columns: repeat(6, 1fr);
        .image {
          padding: 20px;
        }
      }
    }

    /* FAQs */

    .faqs {
      padding: 50px 20%;
      .faqsContainer {
        .faq {
          padding: 20px;
        }
      }
    }
  }
}

@include respond(lg) {
  .servicesPage {
    .content {
      padding: 0 15%;

      /* Services */

      .services {
        .service {
          padding: 20px 30px;
        }
      }
      /* Work Process */

      .process {
        .container {
          .processContainer {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      }
    }

    /* Tools & Technologies */

    .skills {
      padding: 0 10% 25px 10%;
      .container {
        .image {
          padding: 25px;
          width: 75%;
          height: 75%;
          img {
            filter: grayscale(100%);
          }
          &:hover {
            p {
              opacity: 1;
              transform: translateY(0);
            }
            img {
              filter: none;
            }
          }
        }
      }
    }

    /* FAQs */

    .faqs {
      padding: 50px 30%;
      .faqsContainer {
        .faq {
          padding: 20px 30px;
        }
      }
    }
  }
}
</style>
