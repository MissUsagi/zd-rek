<script setup>
import CategoryTabs from "../ui/CategoryTabs.vue";

const tabs = ["Samochody osobowe", "Samochody dostawcze"];
</script>

<template>
  <div class="gallery-header__container">
    <div class="gallery-header__headings">
      <h2 class="title-small">Prezentacja firmy</h2>
      <h3 class="title-large">Zobacz naszą galerię zdjęć</h3>
    </div>
    <category-tabs :tabs="tabs" />
  </div>
</template>

<style scoped>
.gallery-header__container {
  @apply flex flex-col gap-4 sm:gap-6 max-w-[1264px] w-full m-auto px-5 xl:px-0;
}
</style>
