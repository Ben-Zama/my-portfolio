<template>
  <div class="layout">

    
    <!-- Header -->
    
    <header>
      
      <!-- Mobile Menu -->
       
      <mobileMenu :class="{ active: isMenuOpen }" @close="isMenuOpen = false" />

      <div class="logo"><nuxt-link to="/">BENZAMA</nuxt-link></div>

      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/services">Services</nuxt-link></li>
          <li><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </nav>

      <div class="icons">
        <div class="themetoggle">
          <themeToggle />
        </div>
        <div class="hamburger">
          <hamburger v-model="isMenuOpen" />
        </div>
      </div>
    </header>

    <!-- Pages -->

    <NuxtPage />

    <!-- Footer -->

    <footer data-aos="fade-up">
      <div class="logo">BENZAMA</div>

      <div class="icons">
        <a
          v-for="item in socialLinks"
          :key="item.id"
          :href="item.link"
          target="_blank"
        >
          <i :class="item.icon"></i>
        </a>
      </div>
      <hr />
      <div class="copyright">
        &copy; <span>{{ new Date().getFullYear() }}</span> All rights reserved.
        Developed by <a href="">Benzama</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

import themeToggle from "/components/themeToggle.vue";
import hamburger from "/components/hamburger.vue";
import mobileMenu from "/components/mobileMenu.vue";

const socialLinks = [
  { icon: "bi bi-github", link: "" },
  { icon: "bi bi-linkedin", link: "" },
  { icon: "bi bi-twitter-x", link: "" },
  { icon: "bi bi-instagram", link: "" },
];

const isMenuOpen = ref(false);

</script>