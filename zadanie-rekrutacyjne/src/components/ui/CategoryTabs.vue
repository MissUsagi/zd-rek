<script setup>
import { ref } from "vue";
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

const selectedTabIndex = ref(0);

function setSelectedTab(index) {
  selectedTabIndex.value = index;
}
</script>

<template>
  <div class="category-tabs">
    <span v-for="(tab, index) in tabs" :key="tab" class="tab" :class="{ 'tab-active': selectedTabIndex === index }" @click="setSelectedTab(index)">{{
      tab
    }}</span>
  </div>
</template>

<style scoped>
.category-tabs {
  @apply flex items-center gap-6 sm:gap-12 font-flex text-sm xs:text-base;
}

.tab {
  @apply font-flex cursor-pointer;
}

.tab-active {
  @apply font-semibold text-primary border-b border-primary;
}
</style>
