<template>
  <div id="app">
    <div class="home">
      <div class="gridContainer">
        <!-- Grid 1 -->

        <div class="grid grid1">
          <gridCard :showButton="false">
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
          </gridCard>
        </div>

        <!-- Grid 2 -->

        <nuxtLink to="/about" class="grid grid2">
          <gridCard></gridCard>
        </nuxtLink>

        <!-- Grid 3 -->

        <nuxtLink to="/projects" class="grid grid3">
          <gridCard></gridCard>
        </nuxtLink>

        <!-- Grid 4 -->

        <div class="grid grid4">
          <gridCard :showButton="false"></gridCard>
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
</script>

<!-- Grids -->

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.grid1 {
  
}
</style>
