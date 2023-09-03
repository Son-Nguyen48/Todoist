<template>
  <TheHeader />
  <div class="flex pt-[44px]">
    <TheMenu />
    <p class="ml-[305px]">Project</p>
    <component :is="fullPath !== 'project' ? ProjectDetail : null"></component>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import TheHeader from '../TheHeader.vue'
import TheMenu from '../TheMenu.vue'
import ProjectDetail from './ProjectDetail.vue'

const route = useRoute()
console.log('route: ', route)
const fullPath = route.fullPath.trim('/')
console.log('fullPath: ', fullPath)
</script>
