<script setup>
import { ref, useTemplateRef } from "vue";
import GallerySectionHeader from "./GallerySectionHeader.vue";

const images = ["Car1", "Car2", "Car3", "Car4", "Car5", "Car6"];
const imagesRefs = useTemplateRef("images");

function getImageSrc(image) {
  return new URL(`../../assets/images/${image}.png`, import.meta.url).href;
}

const translateX = ref("");
const activeTab = ref(0);

const moveToSlide = (index) => {
  activeTab.value = index;
  const width = imagesRefs.value[index].width;
  const gapBetweenImages = 64;

  const translateValue = index * (width + gapBetweenImages);
  translateX.value = `transition: all 1s ease-out; transform: translateX(-${translateValue}px)`;
};
</script>

<template>
  <section id="gallery" class="gallery">
    <gallery-section-header />

    <div class="gallery__carousel">
      <div class="gallery__carousel-slider" :style="translateX">
        <img v-for="image in images" class="gallery-section__carousel-item" :src="getImageSrc(image)" :alt="image" :key="image" ref="images" />
      </div>

      <div class="gallery__dots">
        <div v-for="(image, index) in images" :key="index" class="dot" :class="{ 'dot-active': activeTab === index }" @click="moveToSlide(index)" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery__carousel {
  @apply max-w-[1264px] m-auto py-12 sm:py-20;
}

.gallery__carousel-slider {
  @apply flex flex-row gap-16 pb-12 sm:pb-16;
}

.gallery__carousel-item {
  @apply w-full max-w-[600px] max-h-[446px];
}

.gallery__dots {
  @apply flex-centered gap-2;
}

.dot {
  @apply w-2 h-2 rounded bg-gray-light cursor-pointer;
}
.dot-active {
  @apply bg-primary;
}
</style>
