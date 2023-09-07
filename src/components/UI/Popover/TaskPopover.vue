<template>
  <div class="absolute hidden -bottom-48 -left-48 border-[1px] rounded-sm p-2 w-48 h-48">
    {{ route.params.idTask }}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('route: ', route)
</script>

<style lang="scss" scoped></style>
