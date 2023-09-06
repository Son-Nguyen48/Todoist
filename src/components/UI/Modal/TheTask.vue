<template>
  <div
    class="fixed p-5 w-[750px] h-[450px] rounded-md top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 z-[999] bg-white"
  >
    <div class="flex flex-col gap-2">
      <span class="text-[24px] font-medium">{{ task.title }}</span>
      <span>{{ route.params }}</span>
      <span>{{ task }}</span>
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
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import router from '../../../router'
let task = ref()
const route = useRoute()
const goBack = () => {
  router.push({ name: 'app-inbox', params: { idProject: 'p1' } })
}
axios
  .get(`http://localhost:3000/api/getTaskDetail/?id=${route.params.idTask}`)
  .then((res) => {
    task.value = res.data
  })
  .catch((e) => {
    console.log(e)
  })
</script>

<style lang="scss" scoped></style>
