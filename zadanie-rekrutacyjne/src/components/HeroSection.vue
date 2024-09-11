<script setup></script>

<template>
  <section id="hero">
    <div class="hero-section">
      <div class="hero-section__container">
        <div class="hero-section__text-container">
          <h1 class="hero-section__heading">
            Sprzedajemy samochody <br />
            z Europy
          </h1>
          <p class="hero-section__paragraph">
            Kup komfortowy pojazd, aby każda podróż <br />
            była wyjątkowym przeżyciem.
          </p>
        </div>
        <div class="hero-section__actions">
          <base-button text="Zobacz zdjęcia" />
          <base-button text="Zadzwoń do nas" variant="secondary" />
        </div>
      </div>
      <img class="hero-section__image" src="../assets/images/HeroImage.png" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  @apply flex justify-center min-h-[700px] md:min-h-[825px] px-5 py-16 md:py-120 relative bg-blue-200;
}

.hero-section__container {
  @apply flex flex-col size-full max-w-1200 gap-y-8 sm:gap-y-12 bg-red-200;
}

.hero-section__text-container {
  @apply flex flex-col gap-4 sm:gap-8 bg-green-300;
}

.hero-section__heading {
  @apply font-bebas font-normal text-[76px] leading-none sm:leading-[84px] uppercase text-gray-dark;
}

.hero-section__paragraph {
  @apply font-condensed font-normal leading-6 text-gray-dark;
}

.hero-section__actions {
  @apply flex gap-6 items-center;
}

.hero-section__image {
  @apply absolute right-0 bottom-16 md:bottom-120 max-w-[90%];
}
</style>
