<template>
  <ul class="grid gap-y-3.2 laptop:(col-span-2 grid-cols-3 gap-0/3)">
    <li
      v-for="(listItem, index) in ListItems"
      :key="index"
      class="grid grid-cols-[10rem_1fr] gap-.9/2.4"
    >
      <img class="row-span-3" :src="listItem.img" alt="" />
      <span class="c-silver fs-3.2 fw-700 lh-3.2">
        {{ (index + 1).toString().padStart(2, "0") }}
      </span>
      <h4 class="mt-.3 c-dark-space-blue fs-1.8 fw-800 lh-2.4">
        {{ listItem.title }}
      </h4>
      <p class="c-gunmetal fs-1.5 lh-2.6">
        {{ listItem.description }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
type ListItem = {
  img: string;
  title: string;
  description: string;
};

const ListItems: ListItem[] = [
  {
    img: "/image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: "/image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    img: "/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];
</script>
