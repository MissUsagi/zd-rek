<script setup>
import { computed } from "vue";
const props = defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
});

const btnText = computed(() => (props.isExpanded ? "Zwiń" : "Rozwiń"));

const arrowRotation = computed(() => (props.isExpanded ? "rotate-180" : ""));
</script>

<template>
  <button type="button" class="btn-expand">
    {{ btnText }} <span><img src="../../assets/svg/arrow.svg" alt="Arrow" :class="arrowRotation" /></span>
  </button>
</template>

<style scoped>
.btn-expand {
  @apply flex items-center gap-1.5 max-w-fit pb-1.5 font-condensed text-sm text-white border-b-2 border-white hover:border-primary cursor-pointer;
}
</style>
