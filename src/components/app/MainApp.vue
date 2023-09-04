<template>
  <TheHeader />
  <div class="flex pt-[44px]">
    <TheMenu />
    <RouterView />
  </div>
</template>

<script setup>
import TheHeader from './TheHeader.vue'
import TheMenu from './TheMenu.vue'
import { RouterView } from 'vue-router'
</script>
