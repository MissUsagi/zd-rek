<script setup>
import HeroSection from "./components/HeroSection.vue";
import GallerySection from "./components/GallerySection.vue";
import SeoSection from "./components/SeoSection.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="body relative">
    <!-- <base-button text="Kliknij" variant="primary">sdfsd</base-button> -->
    <!-- całe body ma miec 1200px -->
    <!-- podzielimy chyba na header main and footer -->
    <img src="../src/assets/svg/serpent.svg" alt="decoration_image" class="absolute -z-10 right-120" />
    <the-header />
    <main>
      <hero-section class="m-auto" />
      <gallery-section />
      <seo-section />
    </main>
    <the-footer />
  </div>
</template>
