<template>
  <!-- <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> -->
    <ul class="wrapper">
      <li class="group item cursor-pointer" v-for="iconComponentName in filteredIconNames" :key="iconComponentName"
        :title="iconComponentName" @click="copyName(iconComponentName)">
        <component :is="Icons[iconComponentName]" />
        <div
          class="text-xs antialiased text-center truncate text-slate-500 text-wrap w-full h-4 group-hover:overflow-visible group-hover:break-words">
          {{ iconComponentName }}
        </div>
      </li>
    </ul>
  <!-- </div> -->
</template>

<script setup>
import { ref, computed } from "vue";
import * as Icons from "@/map.js";
import useClipboard from "vue-clipboard3";
import "vue-m-message/dist/style.css";
import Message from "vue-m-message";

// Props
const props = defineProps({
  iconNames: Array
});

// Methods
const copyName = async (name) => {
  await useClipboard().toClipboard(name);
  Message.success('已复制: ' + name);
};

// Computed
const filteredIconNames = computed(() => {
  return props.iconNames;
});
</script>

<style scoped>
  .wrapper {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: 2rem;
    margin: 0;
    width: 100%;
    padding-bottom: 3rem;
  }
  
  .item {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    padding: 1rem;
    border-radius: 0.5rem;
    /* position: relative; */
    aspect-ratio: 1 / 1;
    cursor: pointer;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    margin: 0;
    box-shadow:
      0 0 0 1px rgba(0, 0, 0, 0.02),
      0 1px 3px -1px rgba(0, 0, 0, 0.2);
  }
  
  .item:hover {
    box-shadow:
      0 0.3px 0.4px rgba(0, 0, 0, 0.02),
      0 0.9px 1.5px rgba(0, 0, 0, 0.045),
      0 3.5px 6px rgba(0, 0, 0, 0.09);
  }
  </style>