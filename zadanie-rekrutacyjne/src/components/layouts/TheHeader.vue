<script setup>
import MainNavigation from "./MainNavigation.vue";
</script>

<template>
  <header id="header" class="flex-centered py-4">
    <div class="container flex-centered-between">
      <a href="#"><img src="../../assets/svg/Logo.svg" alt="Logo" class="size-full" /></a>
      <main-navigation />
      <div class="hidden sm:inline">
        <base-button text="Zadzwoń do nas" />
      </div>
    </div>
  </header>
</template>
