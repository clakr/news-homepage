<template>
  <nav
    class="px-1.6 py-2.8 flex justify-between desktop:(pt-8.9 pb-5.51 px-16.5)"
  >
    <img
      class="w-4.4977 h-2.8 desktop:(w-6.4092 h-3.99)"
      src="/logo.svg"
      alt=""
    />
    <ul
      class="hidden desktop:(flex) c-gunmetal fs-1.5 lh-2.6 gap-x-4 items-center"
    >
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    </ul>
    <button class="desktop:hidden" @click="toggleMenu">
      <img class="w-4 h-1.7" src="/icon-menu.svg" alt="" />
    </button>
  </nav>

  <!-- overlay -->
  <div
    :class="[
      'absolute inset-0 bg-dark-space-blue/50 z-1',
      isMenuOpen ? 'block' : 'hidden',
    ]"
    @click="toggleMenu"
  />

  <!-- menu -->
  <div
    :class="[
      'fixed top-0 right-0 w-25.6 bg-almost-white z-2 h-full p-2.4 flex-col gap-y-8.63 flex transition-transform duration-150',
      isMenuOpen ? 'translate-x-0' : 'translate-x-full',
    ]"
  >
    <button class="self-end" @click="toggleMenu">
      <img src="/icon-menu-close.svg" alt="" />
    </button>
    <ul class="c-dark-space-blue fs-1.8 lh-2.4 space-y-2.4">
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;

  toggleBodyOverflow();
}

function toggleBodyOverflow() {
  const body = document.querySelector("body");
  if (!body) return;

  body.style.overflowY = isMenuOpen.value ? "hidden" : "unset";
}
</script>
