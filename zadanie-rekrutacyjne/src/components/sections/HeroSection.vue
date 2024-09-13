<template>
  <section id="hero" class="hero">
    <div class="hero__content container">
      <div class="hero__text-content">
        <h1 class="hero__title">
          Sprzedajemy samochody <br />
          z Europy
        </h1>
        <p class="hero__text">
          Kup komfortowy pojazd, aby każda podróż <br />
          była wyjątkowym przeżyciem.
        </p>
      </div>
      <div class="hero__actions">
        <base-button text="Zobacz zdjęcia" class="dynamic-size" />
        <base-button text="Zadzwoń do nas" class="dynamic-size" variant="secondary" />
      </div>
    </div>
    <img class="hero__image" src="../../assets/images/HeroImage.png" />
  </section>
</template>

<style scoped>
.hero {
  @apply relative min-h-[700px] md:min-h-[825px] py-16 md:py-[120px];
}

.hero__content {
  @apply flex flex-col gap-8 sm:gap-12 m-auto;
}

.hero__text-content {
  @apply flex flex-col gap-4 sm:gap-8;
}

.hero__title {
  @apply font-bebas text-6xl sm:text-[76px] uppercase leading-none sm:leading-[84px] text-gray-dark;
}

.hero__text {
  @apply font-condensed leading-6 text-gray-dark;
}

.hero__actions {
  @apply flex flex-col items-center xs:flex-row gap-2 xs:gap-6;
}

.hero__image {
  @apply absolute right-0 bottom-16 md:bottom-[120px] max-w-[90%];
}
</style>
