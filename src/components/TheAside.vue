<template>
  <aside class="bg-dark-space-blue c-white py-2.4 px-2.1 desktop:(p-3.2/2.4)">
    <h3 class="c-yellow fs-3.2 fw-700 lh-3.2 desktop:(fs-4 lh-4)">New</h3>
    <article
      v-for="(article, index) in articles"
      :key="index"
      class="py-3 space-y-.8 [&:not(:last-of-type)]:border-b-1 border-gunmetal [&:last-of-type]:pb-0"
    >
      <h4 class="c-almost-white fs-2 fw-800 lh-2.4">
        {{ article.title }}
      </h4>
      <p class="c-silver fs-1.5 lh-2.6">
        {{ article.description }}
      </p>
    </article>
  </aside>
</template>

<script lang="ts" setup>
type Article = {
  title: string;
  description: string;
};

const articles: Article[] = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
</script>
