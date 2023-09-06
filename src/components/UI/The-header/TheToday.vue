<template>
  <div class="flex fixed bg-white z-20 pt-[34px] left-[350px] right-20">
    <h1 class="text-[20px] font-bold pr-2 pl-20">Today</h1>
    <span class="text-[14px] text-[grey] leading-8">Sun 3 Sep</span>
    <div class="flex ml-auto">
      <button
        @click="isViewControlOpen = true"
        @blur="isViewControlOpen = false"
        class="flex gap-1 hover:bg-[#f5f5f5] rounded-md px-3 py-1 relative"
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M15 14.5a2 2 0 011.936 1.498L19.5 16a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 17a.5.5 0 010-1l8.564-.002A2 2 0 0115 14.5zm-.982 1.81l.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0014 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0016 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 00-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 011.936 1.498L19.5 11a.5.5 0 010 1l-8.563.001a2.001 2.001 0 01-3.874 0L4.5 12a.5.5 0 010-1l2.564-.002A2 2 0 019 9.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0010 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 009 10.5zm6-6a2 2 0 011.936 1.498L19.5 6a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 7a.5.5 0 010-1l8.564-.002A2 2 0 0115 4.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0015 5.5z"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </svg>
        </span>
        <span class="text-[14px]">View</span>
        <div
          v-if="isViewControlOpen"
          class="absolute -bottom-[264px] -left-[200px] w-[300px] px-3 shadow-lg rounded-md z-30 bg-white py-[6px]"
        >
          <ul class="w-full">
            <li class="py-1">
              <div class="flex w-full px-3 py-1">
                <span class="font-medium">View</span>
                <span class="ml-auto">
                  <svg width="24" height="24">
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="currentColor"
                        d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
                      ></path>
                      <circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
                <div class="flex gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm0 1H6a2.001 2.001 0 00-1.995 1.85L4 6v12c0 1.054.816 1.918 1.85 1.995L6 20h12a2.001 2.001 0 001.995-1.85L20 18V6a2.001 2.001 0 00-1.85-1.995L18 4zm-1 11.5a.5.5 0 01.09.992L17 16.5H7a.5.5 0 01-.09-.992L7 15.5h10zm0-4a.5.5 0 01.09.992L17 12.5H7a.5.5 0 01-.09-.992L7 11.5h10zm0-4a.5.5 0 01.09.992L17 8.5H7a.5.5 0 01-.09-.992L7 7.5h10z"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-[14px] text-[grey]">Layout</span>
                </div>
                <div class="flex gap-1 ml-auto">
                  <span class="text-[14px] text-[grey]">List</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      class="text-[grey]"
                    >
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
                </div>
              </div>
            </li>
            <hr />
            <li class="py-1">
              <div class="flex w-full px-3 py-1">
                <span class="font-medium">Sort</span>
                <span class="ml-auto">
                  <svg width="24" height="24">
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="currentColor"
                        d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
                      ></path>
                      <circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
                <div class="flex gap-1">
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm0 1H6a2 2 0 00-1.995 1.85L4 6v12a2 2 0 001.85 1.994L6 20h12a2 2 0 001.994-1.85L20 18V6a2 2 0 00-1.85-1.995L18 4zm-3 4.5A1.5 1.5 0 0013.5 7h-5A1.5 1.5 0 007 8.5v5A1.5 1.5 0 008.5 15h5a1.5 1.5 0 001.5-1.5v-5zM8.5 8h5l.09.008A.5.5 0 0114 8.5v5l-.008.09a.5.5 0 01-.492.41h-5l-.09-.008A.5.5 0 018 13.5v-5l.008-.09A.5.5 0 018.5 8zm.585 8a1.5 1.5 0 001.415 1h5a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1-1.415V15.5a.5.5 0 01-.5.5H9.085z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-[14px] text-[grey]">Grouping</span>
                </div>
                <div class="flex gap-1 ml-auto">
                  <span class="text-[14px] text-[grey]">None (default)</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      class="text-[grey]"
                    >
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
                </div>
              </div>
              <div class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
                <div class="flex gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M16.854 5.146l3 3a.502.502 0 01-.708.708L17 6.707V18.5a.5.5 0 01-1 0V6.707l-2.146 2.147a.502.502 0 01-.708-.708l3-3a.502.502 0 01.708 0zM7.5 5a.5.5 0 01.5.5v11.791l2.146-2.145a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L7 17.293V5.5a.5.5 0 01.5-.5z"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-[14px] text-[grey]">Sorting</span>
                </div>
                <div class="flex gap-1 ml-auto">
                  <span class="text-[14px] text-[grey]">Default</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      class="text-[grey]"
                    >
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
                </div>
              </div>
            </li>
            <hr />
            <li class="py-1">
              <div class="flex w-full px-3 py-1">
                <span class="font-medium">Filter</span>
                <span class="ml-auto">
                  <svg width="24" height="24">
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="currentColor"
                        d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
                      ></path>
                      <circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
                <div class="flex gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M12 13.5c3.323 0 5.803.697 7.427 2.119A2.5 2.5 0 0117.78 20H6.22a2.5 2.5 0 01-1.647-4.381C6.197 14.197 8.677 13.5 12 13.5zm0 1c-3.102 0-5.353.633-6.768 1.871A1.5 1.5 0 006.22 19h11.56a1.502 1.502 0 00.989-2.629C17.352 15.133 15.101 14.5 12 14.5zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 1a3 3 0 100 6 3 3 0 000-6z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-[14px] text-[grey]">Assigned to</span>
                </div>
                <div class="flex gap-1 ml-auto">
                  <span class="text-[14px] text-[grey]">Default</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      class="text-[grey]"
                    >
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
                </div>
              </div>
            </li>
          </ul>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isViewControlOpen = ref(false)
</script>

<style lang="scss" scoped></style>
