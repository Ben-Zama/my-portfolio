<template>

  <div class="mobileMenuWrapper">

    <div class="menu">

      <!-- Headshot -->

      <img src="/assets/images/headshot.jpg" alt="" />

      <!-- Name Section -->

      <div class="intro">
        <p class="name">Benzama Musa</p>
        <p class="role">Frontend Web Developer</p>
      </div>

      <!-- Navigation Links -->

      <nav>
        <ul>
          <h2>Links</h2>

          <li @click="$emit('close')"><nuxt-link to="/">Home</nuxt-link></li>
          <li @click="$emit('close')">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="/services">Services</nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="/projects">Projects</nuxt-link>
          </li>
          <li @click="$emit('close')">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>

      <!-- Social Links -->

      <div class="socialLinks">
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
        &copy; <span>{{ new Date().getFullYear() }}</span> All rights
        reserved.<br />
        Developed by <a href="">Benzama</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const socialLinks = [
  { icon: "bi bi-github", link: "" },
  { icon: "bi bi-linkedin", link: "" },
  { icon: "bi bi-twitter-x", link: "" },
  { icon: "bi bi-instagram", link: "" },
];
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: var(--secondary-color);
  box-shadow: 2px 2px 8px var(--shadow-color);
  border-radius: 10px;
  padding: 50px 25px;
  z-index: 2;

  img {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    object-fit: cover;
  }

  .intro {
    text-align: center;
    color: var(--primary-color);
    .name {
      font-size: 20px;
      font-family: sub-header-font;
    }
    .role {
      font-size: 12.5px;
      font-family: body-font;
      opacity: 0.75;
    }
  }

  nav {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      font-family: sub-header-font;
      h2 {
        font-family: header-font;
      }
    }
  }

  .socialLinks {
    display: flex;
    align-items: center;
    gap: 15px;
    a {
      height: 35px;
      width: 35px;
      border: 1px solid var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12.5px;
      transition: 0.25s ease;
      &:hover {
        background-color: var(--primary-color);
        color: var(--accent-color);
        transform: scale(1.2);
      }
    }
  }
  hr {
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--accent-color);
  }
  .copyright {
    font-family: body-font;
    text-align: center;
    a {
      color: var(--accent-color);
    }
  }
}
</style>