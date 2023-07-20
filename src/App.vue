<script setup lang="ts">
import { inject, onBeforeMount } from "vue";
import TheNav from "./components/TheNav.vue";
import TheHero from "./components/TheHero.vue";
import TheAside from "./components/TheAside.vue";
import TheList from "./components/TheList.vue";

const addSRHeading = inject("addSRHeading") as () => void;
const changeKeyboardBtnBackgroundColor = inject(
  "changeKeyboardBtnBackgroundColor"
) as () => void;

onBeforeMount(() => {
  addSRHeading();
  changeKeyboardBtnBackgroundColor();
});
</script>

<template>
  <TheNav />
  <main class="pt-.4 px-1.6 pb-8 grid gap-y-6.4">
    <TheHero />
    <TheAside />
    <TheList />
  </main>
</template>

<style scoped></style>
