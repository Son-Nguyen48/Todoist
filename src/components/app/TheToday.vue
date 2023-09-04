<template>
  <div class="pt-[34px] ml-[305px] w-full">
    <div class="mx-[75.5px] px-[55px] pb-[72px]">
      <div class="flex">
        <h1 class="text-[20px] font-bold pr-2">Today</h1>
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
      <div class="mt-5">
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

            <div class="flex w-full">
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

                <RouterLink to="/comments" class="hover:bg-[#f5f5f5] rounded-sm">
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
            </div>
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

            <div class="flex w-full">
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

                <RouterLink to="/comments" class="hover:bg-[#f5f5f5] rounded-sm">
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
            </div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isViewControlOpen = ref(false)
</script>
