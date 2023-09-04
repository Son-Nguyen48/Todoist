<template>
  <div
    class="absolute p-5 shadow-md w-[750px] h-[450px] rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] bg-white"
  >
    <span>The Comments</span>
    <span>{{ route.params }}</span>
    <RouterLink
      class="px-4 py-2 border-[1px] bg-red-200 hover:transform hover:scale-105 rounded-md"
      :to="{ name: 'app-inbox', params: { idProject: '123' } }"
      >Back</RouterLink
    >
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped></style>
