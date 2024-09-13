<script setup>
import TheHeader from "./components/layouts/TheHeader.vue";
import MainContent from "./components/layouts/MainContent.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
</script>

<template>
  <div class="relative overflow-x-hidden">
    <img src="../src/assets/svg/serpent.svg" alt="decoration_image" class="absolute right-0 max-w-fit -z-10" />
    <the-header />
    <main-content />
    <the-footer />
  </div>
</template>
