<script setup lang="ts">
import { inject, onBeforeMount } from "vue";

const addSRHeading = inject("addSRHeading") as () => void;

onBeforeMount(() => {
  addSRHeading();
});
</script>

<template>
  <nav class="px-1.6">
    <img src="/logo.svg" alt="" />
    <button>
      <img src="/icon-menu.svg" alt="" />
    </button>
  </nav>
</template>

<style scoped></style>
