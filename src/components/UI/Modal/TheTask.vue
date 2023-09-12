<template>
  <div
    class="fixed w-[864px] h-[550px] rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] bg-white"
  >
    <!-- The header of Task Modal  -->
    <div class="h-12 px-4 flex items-center">
      <div class="flex gap-1 items-center">
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            class="project_icon project_icon_inbox text-[#40a7a1]"
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

      <!-- Task Modal controller -->
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
          class="rounded-md h-8 w-8 leading-8 flex justify-center items-center hover:bg-[#F5F5F5] relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" transform="translate(3 10)">
              <circle cx="2" cy="2" r="2"></circle>
              <circle cx="9" cy="2" r="2"></circle>
              <circle cx="16" cy="2" r="2"></circle>
            </g>
          </svg>
          <TaskPopover />
        </button>
        <button
          @click="goBack"
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
    <div class="flex h-full">
      <div class="flex flex-col flex-1 gap-4 pt-4 px-4">
        <!-- Main content task  -->
        <div class="flex gap-2 pb-3">
          <!-- Priority icon button  -->

          <button
            class="relative top-1 border-[1px] rounded-full h-5 w-5"
            :class="priorityBorder[task?.priority]"
          >
            <svg
              width="24"
              height="24"
              class="absolute -top-[3px] -left-[4px]"
              :class="priorityText[task?.priority]"
            >
              <path
                fill="currentColor"
                d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
              ></path>
            </svg>
          </button>

          <div>
            <p class="text-[18px] font-medium">{{ task?.title }}</p>
            <div v-if="!task?.description" class="flex gap-2 pt-5">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12.5 16a.5.5 0 010 1h-5a.5.5 0 010-1h5zm3.864-4c.351 0 .636.224.636.5 0 .245-.225.45-.522.492l-.114.008H7.636C7.285 13 7 12.776 7 12.5c0-.245.225-.45.522-.492L7.636 12h8.728zm0-4c.351 0 .636.224.636.5 0 .245-.225.45-.522.492L16.364 9H7.636C7.285 9 7 8.776 7 8.5c0-.245.225-.45.522-.492L7.636 8h8.728z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span>Description</span>
            </div>
            <div else class="pt-5">
              <p class="text-[14px]">{{ task?.description }}</p>
            </div>
          </div>
        </div>
        <!-- Button Add sub Task -->
        <div class="pl-6 py-3">
          <button
            @click="isAddFormOpen = true"
            v-if="!isAddFormOpen"
            class="flex gap-0.5 rounded-md pr-2 py-1 hov3r:bg-[#f5f5f5] transition-colors ease-linear duration-300"
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6a.462.462 0 00-.461.462v5.077H6.462a.462.462 0 100 .922h5.077v5.077a.461.461 0 10.922 0v-5.077h5.077a.461.461 0 100-.922h-5.077V6.462A.462.462 0 0012 6z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span class="text-[14px]">Add sub-task</span>
          </button>
          <TheAddtaskForm
            v-else
            :isAddFormOpen="isAddFormOpen"
            @closeAddtaskForm="closeAddtaskForm"
          />
        </div>

        <!-- Comment zone  -->
        <div class="pl-5 py-3">
          <div class="flex gap-2">
            <span>
              <img
                class="rounded-full"
                src="https://dcff1xvirvpfp.cloudfront.net/286130c8f376483aa10ce65739b7d3dd_small.jpg"
                alt="theson1106"
              />
            </span>
            <div class="w-full">
              <input
                type="text"
                placeholder="Comment"
                class="w-full placeholder:text-black border-[1px] py-1 px-2 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-[260px] border-l-[1px] pt-3 px-4 h-full flex flex-col gap-2">
        <div class="w-full">
          <p class="pb-2 text-[14px] px-2">Project</p>
          <button
            class="flex items-center w-full rounded-md py-1 px-3 hover:bg-[#f5f5f5] transition-colors ease-linear duration-300 mb-2"
          >
            <div class="flex gap-1 items-center">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  class="project_icon project_icon_inbox text-[#40a7a1]"
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
              <span class="text-[12px]">Inbox</span>
            </div>
            <span class="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 10l-4 4-4-4"
                  fill="none"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <hr />
        </div>
        <div class="w-full">
          <p class="pb-2 text-[14px] px-2">Due date</p>
          <button
            class="flex items-center w-full rounded-md py-1 px-3 hover:bg-[#f5f5f5] transition-colors ease-linear duration-300 mb-2"
          >
            <div class="flex gap-1 items-center">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="task-due-date-button date_overdue text-red-600"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM3 4a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm8.5 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM4.5 5a.5.5 0 000 1h7a.5.5 0 000-1h-7z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="text-[12px]">{{ task?.dueDate }}</span>
            </div>
            <span class="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 10l-4 4-4-4"
                  fill="none"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <hr />
        </div>
        <div class="w-full">
          <p class="pb-2 text-[14px] px-2">Priority</p>
          <button
            class="flex items-center w-full rounded-md py-1 px-3 hover:bg-[#f5f5f5] transition-colors ease-linear duration-300 mb-2"
          >
            <div class="flex gap-1 items-center">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Gw1i-E3"
                  :class="priorityText[task?.priority]"
                  data-icon-name="priority-icon"
                  data-priority="1"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.276 2.553A.5.5 0 002 3v10.5a.5.5 0 001 0V9.829c.585-.216 1.42-.329 2.5-.329.765 0 1.265.115 2.342.474 1.173.391 1.757.526 2.658.526 1.404 0 2.475-.178 3.224-.553A.5.5 0 0014 9.5V3a.5.5 0 00-.724-.447C12.692 2.845 11.763 3 10.5 3c-.765 0-1.265-.115-2.342-.474C6.985 2.135 6.401 2 5.5 2c-1.404 0-2.475.179-3.224.553z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="text-[12px]">P{{ task?.priority }}</span>
            </div>
            <span class="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 10l-4 4-4-4"
                  fill="none"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <hr />
        </div>
        <div class="w-full">
          <button
            class="flex items-center w-full rounded-md py-1 px-3 hover:bg-[#f5f5f5] transition-colors ease-linear duration-300 mb-2"
          >
            <div class="flex gap-1 items-center">
              <span class="text-[14px]">Labels</span>
            </div>
            <span class="ml-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-[#8e8e8e]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6a.462.462 0 00-.461.462v5.077H6.462a.462.462 0 100 .922h5.077v5.077a.461.461 0 10.922 0v-5.077h5.077a.461.461 0 100-.922h-5.077V6.462A.462.462 0 0012 6z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>
          <div class="mb-2 px-2 flex items-center gap-1 rounded-md bg-[#f5f5f5] max-w-max py-1">
            3 <span>Job</span>
            <button
              class="hover:bg-[#bdafaf] rounded-sm transition-colors ease-linear duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.854 8.146L12 11.293l3.146-3.147a.502.502 0 01.708.708L12.707 12l3.147 3.146a.502.502 0 01-.708.708L12 12.707l-3.146 3.147a.502.502 0 01-.708-.708L11.293 12 8.146 8.854a.502.502 0 01.708-.708z"
                  fill="currentColor"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </button>
          </div>
          <hr />
        </div>
        <div class="w-full">
          <button
            class="flex w-full rounded-md py-1 px-3 hover:bg-[#f5f5f5] transition-colors ease-linear duration-300 mb-2"
          >
            <div class="flex gap-1 items-center">
              <span class="text-[14px]">Reminder</span>
              <span class="text-[12px] text-[#8f4700] px-1.5 rounded-sm bg-[#faead1]">PRO</span>
            </div>
            <span class="ml-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-[#8e8e8e]"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 6.995V9H9V6.995C9 5.895 9.9 5 11.01 5h1.988C14.102 5 15 5.897 15 6.995zM8 9V6.995A3.003 3.003 0 0111.01 4h1.988A3.002 3.002 0 0116 6.995V9h.994C18.102 9 19 9.887 19 11v6c0 1.105-.897 2-2.006 2H7.006A1.998 1.998 0 015 17v-6c0-1.105.897-2 2.006-2H8zm-2 2v6c0 .556.446 1 1.006 1h9.988c.557 0 1.006-.448 1.006-1v-6c0-.556-.446-1-1.006-1H7.006C6.449 10 6 10.448 6 11zm4 3a2 2 0 104 0 2 2 0 00-4 0zm2 1a1 1 0 100-2 1 1 0 000 2z"
                ></path>
              </svg>
            </span>
          </button>
          <hr />
        </div>
        <div class="w-full">
          <button
            class="flex w-full rounded-md py-1 px-3 hover:bg-[#f5f5f5] transition-colors ease-linear duration-300 mb-2"
          >
            <div class="flex gap-1 items-center">
              <span class="text-[14px]">Location</span>
              <span class="text-[12px] text-[#8f4700] px-1.5 rounded-sm bg-[#faead1]">PRO</span>
            </div>
            <span class="ml-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-[#8e8e8e]"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 6.995V9H9V6.995C9 5.895 9.9 5 11.01 5h1.988C14.102 5 15 5.897 15 6.995zM8 9V6.995A3.003 3.003 0 0111.01 4h1.988A3.002 3.002 0 0116 6.995V9h.994C18.102 9 19 9.887 19 11v6c0 1.105-.897 2-2.006 2H7.006A1.998 1.998 0 015 17v-6c0-1.105.897-2 2.006-2H8zm-2 2v6c0 .556.446 1 1.006 1h9.988c.557 0 1.006-.448 1.006-1v-6c0-.556-.446-1-1.006-1H7.006C6.449 10 6 10.448 6 11zm4 3a2 2 0 104 0 2 2 0 00-4 0zm2 1a1 1 0 100-2 1 1 0 000 2z"
                ></path>
              </svg>
            </span>
          </button>
          <hr />
        </div>
      </div>
    </div>
  </div>
  <div
    @click="goBack"
    class="h-screen w-screen bg-slate-300 opacity-60 fixed top-0 left-0 z-[100]"
  ></div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import TaskPopover from '../Popover/TaskPopover.vue'
import TheAddtaskForm from '../Form-addTask/TheAddtaskForm.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import router from '../../../router'

let task = ref()
const isAddFormOpen = ref(false)

const route = useRoute()
const priorityBorder = {
  1: 'border-[#D1453B] ',
  2: 'border-[#EB8909] ',
  3: 'border-[#246FE0] ',
  4: 'border-[#FFFFFF] '
}
const priorityText = {
  1: ' text-[#D1453B]',
  2: ' text-[#EB8909]',
  3: ' text-[#246FE0]',
  4: ' text-[#FFFFFF]'
}

const closeAddtaskForm = (data) => {
  console.log('data: ', data)
  isAddFormOpen.value = data.isAddFormOpen
  console.log('isAddFormOpen: ', isAddFormOpen.value)
}
console.log('fullPath: ', route.fullPath)
const pathArray = route.fullPath.split('/')
console.log(pathArray)

const goBack = () => {
  router.push({ name: 'app-inbox', params: { idProject: pathArray[3] } })
}
watchEffect(() => {
  axios
    .get(
      `https://sonnguyen48todoist.000webhostapp.com/api/getTaskDetail/?id=${route.params.idTask}`
    )
    .then((res) => {
      task.value = res.data
    })
    .catch((e) => {
      console.log(e)
    })
})
</script>

<style lang="scss" scoped></style>
