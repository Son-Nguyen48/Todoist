<template>
  <div class="ml-[305px] w-full relative">
    <div class="mx-[75.5px] px-[55px] pb-[72px]">
      <TheHeader />
      <div class="pt-20">
        <ul>
          <h2 class="font-medium relative pt-5 text-[14px] pb-2">
            <span class="absolute -left-7 hover:bg-[#f5f5f5] cursor-pointer rounded-md">
              <svg width="24" height="24">
                <path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4"></path>
              </svg>
            </span>
            <span> Overdue </span>
          </h2>
          <hr />
          <li
            id="goal_1"
            class="relative cursor-pointer flex gap-2 before:content-[''] before:absolute before:-left-7 before:w-[100px] before:h-full py-2"
          >
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
              :to="{ name: 'today-task-detail', params: { idTask: '123' } }"
              class="flex w-full"
            >
              <div>
                <p>Say hello to my friend!</p>
                <div class="flex items-center gap-2">
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
                  <span class="text-[12px] text-red-400">17 Aug</span>
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
                  :to="{ name: 'today-task-detail', params: { idTask: '123' } }"
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
          </li>
          <hr />
          <li
            id="goal_1"
            class="relative cursor-pointer flex gap-2 before:content-[''] before:absolute before:-left-7 before:w-[100px] before:h-full py-2"
          >
            <button
              class="hover:bg-[#f5f5f5] rounded-md hidden absolute -left-7 drag_button hover:cursor-move"
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
              :to="{ name: 'today-task-detail', params: { idTask: '123' } }"
              class="flex w-full"
            >
              <div>
                <p>This is our goal! So play with it!</p>
                <div class="flex items-center gap-2">
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
                  <span class="text-[12px] text-red-400">17 Aug</span>
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
                  :to="{ name: 'today-task-detail', params: { idTask: '1234' } }"
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
      </div>
      <button
        class="add_section_btn before:hidden after:hidden before:content-[''] relative w-full before:w-full before:h-[1px] before:bg-[#DE483A] before:absolute before:top-3 before:left-0 after:h-6 after:w-[100px] after:content-['Add_section'] after:text-[#DE483A] after:font-semibold after:bg-white after:absolute rounded-sm after:transform after:-translate-x-1/2 py-6 after:-translate-y-full"
      ></button>
      <section class="pb-5">
        <h2 class="font-medium pb-1">New Section</h2>
        <hr />
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
      </section>
      <button
        class="add_section_btn before:hidden after:hidden before:content-[''] relative w-full before:w-full before:h-[1px] before:bg-[#DE483A] before:absolute before:top-3 before:left-0 after:h-6 after:w-[100px] after:content-['Add_section'] after:text-[#DE483A] after:font-semibold after:bg-white after:absolute rounded-sm after:transform after:-translate-x-1/2 py-6 after:-translate-y-full"
      ></button>
      <section>
        <h2 class="font-medium pb-1">New Section</h2>
        <hr />
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
      </section>
      <button
        class="add_section_btn before:hidden after:hidden before:content-[''] relative w-full before:w-full before:h-[1px] before:bg-[#DE483A] before:absolute before:top-3 before:left-0 after:h-6 after:w-[100px] after:content-['Add_section'] after:text-[#DE483A] after:font-semibold after:bg-white after:absolute rounded-sm after:transform after:-translate-x-1/2 py-6 after:-translate-y-full"
      ></button>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '../UI/TheHeader.vue'
</script>

<style scoped>
#goal_1:hover .drag_button {
  display: block;
}
#goal_1:hover .goal_control {
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
