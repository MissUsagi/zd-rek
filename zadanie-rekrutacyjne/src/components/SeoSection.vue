<script setup>
import { ref } from "vue";
const expandFirstCol = ref(false);
const expandSecondCol = ref(false);

const textContent = {
  title: "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.",
  paragraph:
    "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et ",
  firstColExpandedContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna massa, fringilla ullamcorper lectus sed, lacinia condimentum nunc. Morbi dictum hendrerit eros sit amet convallis. Praesent pretium posuere congue. Nunc auctor pellentesque ligula, at euismod dolor hendrerit in. Sed sed tempor dolor.",
  secondColExpandedContent:
    "Aliquam erat volutpat. Nullam leo lacus, suscipit id aliquet sit amet, dictum eget eros. Etiam a lacus eget neque scelerisque aliquet. Donec laoreet ex sapien. Phasellus eu lacus porta, ornare nunc at, interdum urna. Sed ac euismod neque, et pretium felis. In eget mi ullamcorper, eleifend ante ac, aliquet diam.",
};
</script>

<template>
  <section id="seo">
    <div class="flex-centered container-dark">
      <div class="seo-section__container container">
        <div class="seo-section__text-col">
          <h3 class="seo-section__title">{{ textContent.title }}</h3>
          <p class="seo-section__text">{{ textContent.paragraph }}<span v-show="!expandFirstCol">[...]</span></p>
          <p v-show="expandFirstCol" class="seo-section__text" v-text="textContent.firstColExpandedContent" />
          <expand-button @click="expandFirstCol = !expandFirstCol" :isExpanded="expandFirstCol" />
        </div>

        <div class="seo-section__text-col">
          <h3 class="seo-section__title">{{ textContent.title }}</h3>
          <p class="seo-section__text">{{ textContent.paragraph }}<span v-show="!expandSecondCol">[...]</span></p>
          <p v-if="expandSecondCol" class="seo-section__text" v-text="textContent.secondColExpandedContent" />
          <expand-button @click="expandSecondCol = !expandSecondCol" :isExpanded="expandSecondCol" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.seo-section__container {
  @apply flex flex-col sm:flex-row justify-between gap-10 py-16 sm:py-[88px];
}
.seo-section__text-col {
  @apply size-full max-w-[576px] flex flex-col gap-4;
}

.seo-section__title {
  @apply font-bebas text-2xl leading-9;
}

.seo-section__text {
  @apply font-condensed text-sm;
}
</style>
