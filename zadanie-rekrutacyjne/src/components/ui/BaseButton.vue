<script setup>
import { computed } from "vue";
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "secondary"].includes(value);
    },
  },
});

const btnVariant = computed(() => `btn-${props.variant}`);
</script>

<template>
  <button type="button" class="btn" :class="btnVariant">{{ text }}</button>
</template>

<style scoped>
.btn {
  @apply flex items-center justify-center h-12 px-6 py-3 font-semibold text-center rounded-lg cursor-pointer;
}

.btn-primary {
  @apply text-white bg-primary hover:bg-blue-400;
}

.btn-secondary {
  @apply text-primary bg-white border-2 border-primary hover:bg-blue-100;
}
</style>
