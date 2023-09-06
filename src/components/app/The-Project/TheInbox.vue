<template>
  <div class="pt-[34px] ml-[305px] w-full relative">
    <div class="mx-[75.5px] px-[55px] pb-[72px]">
      <TheHeader :idProject="route.params.idProject" :idTask="route.params.idTask" />
      <div class="mt-5">
        <ul>
          <li
            v-for="task in taskListInProject"
            :key="task.id"
            class="goal relative cursor-pointer before:content-[''] before:absolute before:-left-7 before:w-[50px] before:h-full"
          >
            <div class="flex gap-2 py-3">
              <button
                class="hover:bg-[#f5f5f5] hover:cursor-move rounded-md hidden absolute -left-7 drag_button"
              >
                <svg width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"
                  ></path>
                </svg>
              </button>

              <button
                class="relative top-1 border-[1px] rounded-full h-5 w-5"
                :class="priority[task.priority]"
              >
                <svg
                  width="24"
                  height="24"
                  class="text-[#E5E7EB] absolute -top-[3px] -left-[4px]"
                  :class="priority[task.priority]"
                >
                  <path
                    fill="currentColor"
                    d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                  ></path>
                </svg>
              </button>

              <RouterLink
                :to="{ name: 'project-task-detail', params: { idTask: task.id } }"
                class="flex w-full"
              >
                <div>
                  <p>{{ task.title }} }</p>
                  <div class="flex items-center gap-2 mt-2">
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="calendar_icon text-red-400"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.5 1h-7A1.5 1.5 0 001 2.5v7A1.5 1.5 0 002.5 11h7A1.5 1.5 0 0011 9.5v-7A1.5 1.5 0 009.5 1zM2 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7zM8.75 8a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span class="text-[12px] text-red-400">{{ task.dueDate }}</span>
                  </div>
                </div>
                <div class="goal_control ml-auto hidden items-center gap-2">
                  <button class="hover:bg-[#f5f5f5] rounded-sm">
                    <svg width="24" height="24">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="currentColor"
                          d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                        ></path>
                        <path
                          stroke="currentColor"
                          d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                        ></path>
                      </g>
                    </svg>
                  </button>

                  <button class="hover:bg-[#f5f5f5] rounded-sm">
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
                        d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>

                  <RouterLink
                    :to="{ name: 'project-task-detail', params: { idTask: task.id } }"
                    class="hover:bg-[#f5f5f5] rounded-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      data-svgs-path="sm1/comments.svg"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="nonzero"
                        d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"
                      ></path>
                    </svg>
                  </RouterLink>

                  <button
                    class="hover:bg-[#f5f5f5] rounded-sm h-6 w-6 flex justify-center items-center"
                  >
                    <svg width="15" height="3">
                      <path
                        d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </RouterLink>
            </div>
            <hr />
          </li>
          <hr />
        </ul>
        <button class="add_task_hover flex items-center gap-2 py-2 w-full">
          <span class="add_task_btn p-[2px] rounded-full">
            <svg width="13" height="13" class="text-[#DE483A]">
              <path
                d="M6 6V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
          <span class="add_task_title text-[grey] text-[14px]">Add task</span>
        </button>
        <AddSection />
      </div>
      <section class="pb-5" v-for="section in listSection" :key="section.id">
        <h2 class="font-medium pb-1">New Section</h2>
        <ul>
          <li
            v-for="task in taskListInSection"
            :key="task.id"
            class="goal relative cursor-pointer before:content-[''] before:absolute before:-left-7 before:w-[50px] before:h-full"
          >
            <div class="flex gap-2 py-3">
              <button
                class="hover:bg-[#f5f5f5] hover:cursor-move rounded-md hidden absolute -left-7 drag_button"
              >
                <svg width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"
                  ></path>
                </svg>
              </button>

              <button class="relative top-1 border-[1px] rounded-full h-5 w-5">
                <svg width="24" height="24" class="text-[#E5E7EB] absolute -top-[3px] -left-[4px]">
                  <path
                    fill="currentColor"
                    d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                  ></path>
                </svg>
              </button>

              <RouterLink
                :to="{ name: 'project-task-detail', params: { idTask: task.id } }"
                class="flex w-full"
              >
                <div>
                  <p>{{ task.title }}</p>
                  <div class="flex items-center gap-2 mt-2">
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="calendar_icon text-red-400"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.5 1h-7A1.5 1.5 0 001 2.5v7A1.5 1.5 0 002.5 11h7A1.5 1.5 0 0011 9.5v-7A1.5 1.5 0 009.5 1zM2 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7zM8.75 8a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span class="text-[12px] text-red-400">{{ task.dueDate }}</span>
                  </div>
                </div>
                <div class="goal_control ml-auto hidden items-center gap-2">
                  <button class="hover:bg-[#f5f5f5] rounded-sm">
                    <svg width="24" height="24">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          fill="currentColor"
                          d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                        ></path>
                        <path
                          stroke="currentColor"
                          d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                        ></path>
                      </g>
                    </svg>
                  </button>

                  <button class="hover:bg-[#f5f5f5] rounded-sm">
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
                        d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM5 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm12 10a1 1 0 11-2 0 1 1 0 012 0zM7 8a.5.5 0 000 1h10a.5.5 0 000-1H7z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>

                  <RouterLink
                    :to="{ name: 'project-task-detail', params: { idTask: task.id } }"
                    class="hover:bg-[#f5f5f5] rounded-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      data-svgs-path="sm1/comments.svg"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="nonzero"
                        d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"
                      ></path>
                    </svg>
                  </RouterLink>

                  <button
                    class="hover:bg-[#f5f5f5] rounded-sm h-6 w-6 flex justify-center items-center"
                  >
                    <svg width="15" height="3">
                      <path
                        d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </RouterLink>
            </div>
            <hr />
          </li>
          <hr />
        </ul>
        <button class="add_task_hover flex items-center gap-2 py-2 w-full">
          <span class="add_task_btn p-[2px] rounded-full">
            <svg width="13" height="13" class="text-[#DE483A]">
              <path
                d="M6 6V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
          <span class="add_task_title text-[grey] text-[14px]">Add task</span>
        </button>
        <AddSection />
      </section>

      <RouterView />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
// import { computed } from 'vue'
import AddSection from '../../UI/The-button/AddSection.vue'
import TheHeader from '../../UI/TheHeader.vue'
import { useRoute, RouterView } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const priority = {
  1: 'border-[#D1453B] text-[#D1453B]',
  2: 'border-[#EB8909] text-[#EB8909]',
  3: 'border-[#246FE0] text-[#246FE0]',
  4: 'border-[#FFFFFF] text-[#FFFFFF]'
}

let taskListInProject = ref([])
let taskListInSection = ref([])
let listSection = ref([])
axios
  .get('https://sonnguyen48todoist.000webhostapp.com/api/getAllTaskInProject/')
  .then((response) => {
    taskListInProject.value = response.data.taskList
  })
  .catch((error) => {
    console.error(error)
  })

axios.get('https://sonnguyen48todoist.000webhostapp.com/api/getAllTaskInSection/').then((res) => {
  taskListInSection.value = res.data.taskList
})

axios.get('https://sonnguyen48todoist.000webhostapp.com/api/getAllSection/').then((res) => {
  listSection.value = res.data.sectionList
})
</script>

<style scoped>
.goal:hover .drag_button {
  display: block;
}
.goal:hover .goal_control {
  display: flex;
}

button.add_section_btn:hover::before,
button.add_section_btn:hover::after {
  display: inline;
}

button.add_task_hover:hover .add_task_btn {
  background: #de483a;
}
button.add_task_hover:hover .add_task_btn svg {
  color: white;
}
button.add_task_hover:hover .add_task_title {
  color: #de483a;
}
</style>
