<script setup>
import MainNavigation from "./MainNavigation.vue";
</script>

<template>
  <header class="flex-centered py-4">
    <div class="flex-centered-between container">
      <a href="#"><img src="../assets/images/Logo.png" alt="Logo" /></a>
      <main-navigation />
      <div class="hidden sm:inline">
        <base-button text="Zadzwoń do nas" />
      </div>
    </div>
  </header>
</template>
