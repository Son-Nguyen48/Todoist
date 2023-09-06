<template>
  <div
    class="fixed w-[864px] h-[550px] rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] bg-white"
  >
    <div class="h-12 px-4 flex items-center">
      <div class="flex gap-1 items-center">
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            class="project_icon project_icon_inbox text-[#47cac4]"
          >
            <g fill="currentColor">
              <path
                d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z"
                opacity="0.1"
              ></path>
              <path
                d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z"
              ></path>
            </g>
          </svg>
        </span>
        <span class="text-[12.5px]">Inbox</span>
      </div>
      <div class="ml-auto flex items-center gap-2">
        <button
          class="rounded-md h-8 w-8 leading-8 flex justify-center items-center hover:bg-[#F5F5F5]"
        >
          <svg width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.854 7.604a.5.5 0 01-.708 0L7 1.457.854 7.604a.5.5 0 01-.708-.707l6.5-6.5a.5.5 0 01.708 0l6.5 6.5a.5.5 0 010 .707z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          class="rounded-md h-8 w-8 leading-8 flex justify-center items-center hover:bg-[#F5F5F5]"
        >
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.146 8.397a.5.5 0 01.708 0L12 14.543l6.146-6.146a.5.5 0 01.708.707l-6.5 6.5a.5.5 0 01-.708 0l-6.5-6.5a.5.5 0 010-.707z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          class="rounded-md h-8 w-8 leading-8 flex justify-center items-center hover:bg-[#F5F5F5]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" transform="translate(3 10)">
              <circle cx="2" cy="2" r="2"></circle>
              <circle cx="9" cy="2" r="2"></circle>
              <circle cx="16" cy="2" r="2"></circle>
            </g>
          </svg>
        </button>
        <button
          class="rounded-md h-8 w-8 leading-8 flex justify-center items-center hover:bg-[#F5F5F5]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="currentColor"
              d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <hr />
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
