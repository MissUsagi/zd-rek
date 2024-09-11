<script setup>
import SectionHeader from "./SectionHeader.vue";

const images = ["Car1", "Car2", "Car3", "Car1", "Car2"];

function getImageSrc(image) {
  return new URL(`../assets/images/${image}.png`, import.meta.url).href;
}
</script>

<template>
  <section id="gallery">
    <section-header />
    <div class="w-1264 m-auto py-20 bg-yellow-200">
      <div class="flex flex-row gap-16 pb-16 bg-slate-500">
        <img
          v-for="image in images"
          class="w-600 h-446"
          :src="getImageSrc(image)"
          :alt="image"
          :key="image"
        />
      </div>
      <div class="flex gap-2 items-center justify-center">
        <div
          v-for="n in images.length"
          :key="n"
          class="w-2 h-2 rounded bg-gray-light"
          :class="{ active: n === 1 }"
        ></div>
      </div>
    </div>
  </section>
</template>

<style>
.active {
  @apply bg-primary;
}
</style>
