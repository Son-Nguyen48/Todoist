<template>
  <div
    class="fixed p-5 w-[864px] h-[550px] rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] bg-white"
  >
    <div class="flex items-center gap-2">
      <span>The Comments of Project</span>
      <span>{{ route.params }}</span>
      <!-- <RouterLink
        class="px-4 py-2 border-[1px] bg-red-200 hover:transform hover:scale-105 rounded-md"
        :to="{ name: 'app-inbox', params: { idProject: 'p1' } }"
        >Back</RouterLink
      > -->
    </div>
  </div>
  <div
    @click="goBack"
    class="h-screen w-screen bg-slate-300 opacity-60 fixed top-0 left-0 z-[100]"
  ></div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
import router from '../../../router'
const goBack = () => {
  router.push({ name: 'app-inbox', params: { idProject: route.params.idTask } })
}
</script>

<style lang="scss" scoped></style>
