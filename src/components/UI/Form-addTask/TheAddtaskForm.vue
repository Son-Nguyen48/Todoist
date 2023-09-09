<template>
  <form
    v-if="isAddFormOpen"
    :action="actionLink"
    method="POST"
    class="border-[1px] rounded-md focus-visible:border-[2px] mt-1"
  >
    <div class="pt-[10px] px-[10px]">
      <div>
        <input
          class="w-full placeholder:text-[13px] font-medium focus-visible:outline-none"
          type="text"
          placeholder="Task name"
          name="title"
          v-model="taskName"
        />
      </div>
      <div>
        <input
          class="w-full placeholder:text-[13px] focus-visible:outline-none"
          type="text"
          placeholder="Description"
          name="description"
        />
      </div>
      <div class="hidden">
        <input
          class="w-full placeholder:text-[13px] focus-visible:outline-none"
          type="text"
          placeholder="Description"
          :name="props.idProject ? 'project_id' : 'section_id'"
          :value="props.idProject ? props.idProject : props.idSection"
        />
      </div>
      <div class="flex gap-2 py-2">
        <!-- Due date button  -->

        <button
          class="px-3 py-1 border-[1px] flex gap-1 items-center rounded-md hover:bg-[#f5f5f5]"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="no_due_date text-[#666666]"
            >
              <path
                fill="currentColor"
                d="M12 2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 1H4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1zm-1.25 7a.75.75 0 110 1.5.75.75 0 010-1.5zm.75-5a.5.5 0 110 1h-7a.5.5 0 010-1h7z"
              ></path>
            </svg>
          </span>
          <span class="text-[13px] text-[#666666]">Due date</span>
        </button>

        <!-- Priority button  -->

        <button
          class="px-3 py-1 border-[1px] flex gap-1 items-center rounded-md hover:bg-[#f5f5f5]"
        >
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Gw1i-E3 text-[#666666]"
              data-icon-name="priority-icon"
              data-priority="4"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 3a.5.5 0 01.276-.447C3.025 2.179 4.096 2 5.5 2c.901 0 1.485.135 2.658.526C9.235 2.885 9.735 3 10.5 3c1.263 0 2.192-.155 2.776-.447A.5.5 0 0114 3v6.5a.5.5 0 01-.276.447c-.749.375-1.82.553-3.224.553-.901 0-1.485-.135-2.658-.526C6.765 9.615 6.265 9.5 5.5 9.5c-1.08 0-1.915.113-2.5.329V13.5a.5.5 0 01-1 0V3zm1 5.779v-5.45C3.585 3.113 4.42 3 5.5 3c.765 0 1.265.115 2.342.474C9.015 3.865 9.599 4 10.5 4c1.002 0 1.834-.09 2.5-.279v5.45c-.585.216-1.42.329-2.5.329-.765 0-1.265-.115-2.342-.474C6.985 8.635 6.401 8.5 5.5 8.5c-1.001 0-1.834.09-2.5.279z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span class="text-[13px] text-[#666666]">Priority</span>
        </button>

        <!-- Reminder Button  -->

        <button
          class="px-3 py-1 border-[1px] flex gap-1 items-center rounded-md hover:bg-[#f5f5f5]"
        >
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-[#666666]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.414 4.706l.094.093a.5.5 0 01-.707.708l-.094-.094a2 2 0 010-2.829l.379-.378a2 2 0 012.764-.062.5.5 0 01-.676.738 1 1 0 00-1.381.03l-.379.38a1 1 0 000 1.414zm9.412-1.824a1 1 0 011.381.03l.379.38a1 1 0 010 1.414l-.094.093a.5.5 0 10.707.708l.094-.094a2 2 0 000-2.829l-.379-.378a2 2 0 00-2.764-.062.5.5 0 10.676.738zm-.042 9.108A5.482 5.482 0 018 13.499a5.482 5.482 0 01-3.784-1.509l-1.362 1.362a.5.5 0 11-.708-.707l1.408-1.408a5.5 5.5 0 118.892 0l1.408 1.408a.5.5 0 01-.707.707l-1.363-1.362zM8 12.499a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM8 5v3h2a.5.5 0 110 1H7.5a.5.5 0 01-.5-.5V5a.5.5 0 111 0z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span class="text-[13px] text-[#666666]">Reminders</span>
          <span class="text-[12px] text-[#8f4700] px-1.5 rounded-sm bg-[#faead1]">PRO</span>
        </button>

        <!-- Location Button  -->

        <button
          class="px-3 py-1 border-[1px] flex gap-1 items-center rounded-md hover:bg-[#f5f5f5]"
        >
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-[#666666]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8 6.8c0 1.495-.977 3.054-2.142 4.344A16.316 16.316 0 018 12.729a16.315 16.315 0 01-1.658-1.585C5.177 9.854 4.2 8.295 4.2 6.8a3.8 3.8 0 017.6 0zm1 0C12.8 10.571 8 14 8 14s-4.8-3.429-4.8-7.2a4.8 4.8 0 119.6 0zM8 8a1.25 1.25 0 100-2.5A1.25 1.25 0 008 8z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span class="text-[13px] text-[#666666]">Location</span>
          <span class="text-[12px] text-[#8f4700] px-1.5 rounded-sm bg-[#faead1]">PRO</span>
        </button>

        <!-- More actons Button  -->

        <button class="p-1 px-2 border-[1px] flex gap-1 items-center rounded-md hover:bg-[#f5f5f5]">
          <svg width="15" height="3">
            <path
              d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <hr />
    </div>
    <div class="p-2 flex">
      <!-- Project set Button  -->

      <button class="flex gap-1 py-1 px-2 items-center rounded-md hover:bg-[#f5f5f5]">
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            class="project_icon project_icon_inbox text-[#4891c2]"
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
        <span>Inbox</span>
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7.646 9.646L4.854 6.854A.5.5 0 015.207 6h5.586a.5.5 0 01.353.854L8.354 9.646a.5.5 0 01-.708 0z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </button>

      <div class="ml-auto flex gap-2">
        <!-- Cancel Button  -->
        <button
          @click.prevent="closeAddtaskForm"
          class="bg-[#f5f5f5] py-1.5 px-4 rounded-md hover:bg-[#e5e5e5]"
        >
          Cancel
        </button>
        <!-- Save Task Button -->
        <button
          @click="submitForm(dataForm)"
          class="py-1.5 px-4 rounded-md cursor-not-allowed text-white"
          :class="taskName ? 'bg-[#DC4C3E] cursor-pointer hover:bg-[#B03D32] ' : 'bg-[#EDA59E]'"
        >
          Add task
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
const isAddFormOpen = ref(true)
const taskName = ref('')
const title = ref('')
const description = ref('')
const props = defineProps(['idProject', 'idSection'])
console.log('idProject: ', props.idProject)
console.log('idSection: ', props.idSection)
let actionLink = ref('')
  ? 'http://localhost:3000/api/addTaskInProject'
  : 'http://localhost:3000/api/addTaskInSection'
// console.log('actionLink: ', actionLink)
let dataForm = ref([])
if (props.idProject) {
  dataForm.value['title'] = title.value
  dataForm.value['description'] = description.value
  dataForm.value['project_id'] = props.project_id
} else {
  dataForm.value['title'] = title.value
  dataForm.value['description'] = description.value
  dataForm.value['section_id'] = props.section_id
}

const emitCustomEvent = defineEmits(['closeAddtaskForm'])
const closeAddtaskForm = () => {
  isAddFormOpen.value = false
  const taskAddFrom = props.idProject ? 'project' : 'section'
  const dataEmit = { isAddFormOpen: isAddFormOpen.value, taskAddFrom }
  emitCustomEvent('closeAddtaskForm', dataEmit)
}

const submitForm = (e, dataForm) => {
  e.preventDefault()
  closeAddtaskForm()
  axios
    .post(actionLink.value, dataForm)
    .then((res) => console.log('Successful!', res))
    .catch((e) => console.log(e))
}
</script>

<style lang="scss" scoped></style>
