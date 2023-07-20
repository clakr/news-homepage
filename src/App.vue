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
  <div
    class="pt-.4 px-1.6 pb-8 grid gap-y-6.4 max-w-60 mx-auto laptop:(grid-cols-[1fr_35rem] gap-7.2/3 pt-0 px-16.5 pb-13 max-w-unset)"
  >
    <TheHero />
    <TheAside />
    <TheList />
  </div>
</template>

<style scoped></style>
