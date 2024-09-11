<script setup>
import { ref } from "vue";

const tabs = ["Samochody osobowe", "Samochody dostawcze"];
const selectedTabIndex = ref(0);

function setSelectedTab(index) {
  selectedTabIndex.value = index;
}
</script>

<template>
  <div class="section-header__container">
    <div>
      <h2 class="section-header__header-small">Prezentacja firmy</h2>
      <h3 class="header-3">Zobacz naszą galerię zdjęć</h3>
    </div>
    <div class="section-header__tabs">
      <span
        v-for="(tab, index) in tabs"
        :key="tab"
        class="tab"
        :class="{ 'tab-active': selectedTabIndex === index }"
        @click="setSelectedTab(index)"
        >{{ tab }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.section-header__container {
  @apply flex flex-col gap-4 sm:gap-6 max-w-[1264px] size-full m-auto px-5 xl:px-0;
}

.section-header__header-small {
  @apply font-condensed text-lg sm:text-[22px] text-primary;
}

.section-header__tabs {
  @apply flex items-center gap-6 sm:gap-12 font-flex;
}
</style>
