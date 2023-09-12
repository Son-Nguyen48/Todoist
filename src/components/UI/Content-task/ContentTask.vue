<template>
  <div ref="target">
    <div class="flex gap-2 py-3" v-if="!isEditFormOpen">
      <!-- Button drag and drop  -->
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
      <!-- Priority icon button  -->
      <button
        class="relative top-1 border-[1px] rounded-full h-5 w-5"
        :class="priorityBorder[task.priority]"
      >
        <svg
          width="24"
          height="24"
          class="absolute -top-[3px] -left-[4px]"
          :class="priorityText[task.priority]"
        >
          <path
            fill="currentColor"
            d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
          ></path>
        </svg>
      </button>
      <!-- The main content  -->
      <RouterLink
        :to="{ name: 'project-task-detail', params: { idTask: task.id } }"
        class="flex w-full"
      >
        <div>
          <p class="text-[14px]">{{ task.title }}</p>
          <p class="text-[12px] text-[#928484]">{{ task.description }}</p>
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
        <div class="goal_control ml-auto hidden items-center gap-2 mr-5">
          <!-- Edit task button  -->

          <button @click.prevent="openEditForm" class="hover:bg-[#f5f5f5] rounded-md p-0.5">
            <svg width="24" height="24">
              <g fill="none" fill-rule="evenodd">
                <path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path>
                <path
                  stroke="currentColor"
                  d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                ></path>
              </g>
            </svg>
          </button>

          <!-- Due date button  -->

          <button @click.prevent="console.log(1)" class="hover:bg-[#f5f5f5] rounded-md p-0.5">
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

          <!-- add comment button  -->

          <RouterLink
            :to="{ name: 'project-task-detail', params: { idTask: task.id } }"
            class="hover:bg-[#f5f5f5] rounded-md p-0.5"
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

          <!-- More task actions  -->

          <button
            @click.prevent="isActionControlOpen = true"
            class="hover:bg-[#f5f5f5] rounded-md h-6 w-6 flex justify-center items-center p-0.5 relative"
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
      <!-- popover of more action button  -->
      <div
        v-if="isActionControlOpen"
        class="popover fixed top-1/2 transform -translate-y-1/2 left-2/3 w-[300px] px-3 shadow-lg rounded-md z-30 bg-white py-[6px]"
      >
        <ul class="w-full">
          <li class="py-1">
            <!-- Add task Above Button  -->

            <button class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
              <div class="flex gap-1">
                <span>
                  <svg width="24" height="24" class="text-[#898989]">
                    <path
                      fill="currentColor"
                      d="M9 6.74L6.35 9.4a.5.5 0 01-.7-.7l3.53-3.54a.5.5 0 01.7 0l3.55 3.53a.5.5 0 01-.71.7L10 6.69V18.5a.5.5 0 11-1 0V6.74zM17 15h2.5a.5.5 0 110 1H17v2.5a.5.5 0 11-1 0V16h-2.5a.5.5 0 110-1H16v-2.5a.5.5 0 111 0V15z"
                    ></path>
                  </svg>
                </span>
                <span class="text-[14px] text-[black]">Add task above</span>
              </div>
            </button>

            <!-- Add task Blow Button  -->

            <button class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
              <div class="flex gap-1">
                <span>
                  <svg width="24" height="24" class="text-[#898989]">
                    <path
                      fill="currentColor"
                      d="M9 17.26L6.35 14.6a.5.5 0 00-.7.7l3.53 3.54a.5.5 0 00.7 0l3.55-3.53a.5.5 0 00-.71-.7L10 17.31V5.5a.5.5 0 10-1 0v11.76zM17 9h2.5a.5.5 0 100-1H17V5.5a.5.5 0 10-1 0V8h-2.5a.5.5 0 100 1H16v2.5a.5.5 0 101 0V9z"
                    ></path>
                  </svg>
                </span>
                <span class="text-[14px] text-[black]">Add task below</span>
              </div>
            </button>

            <!-- Edit task button  -->

            <button
              @click.prevent="openEditForm"
              class="flex w-full items-center px-3 py-1 hover:bg-[#f5f5f5] rounded-md"
            >
              <div class="flex gap-1">
                <span>
                  <svg width="24" height="24" class="text-[#898989]">
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
                </span>
                <span class="text-[14px] text-[black]">Edit task</span>
              </div>
              <div class="ml-auto">
                <span class="text-[14px] text-[grey]"> Ctrl E </span>
              </div>
            </button>
          </li>
          <hr />

          <li class="py-1">
            <!-- Edit due date  -->

            <div class="flex w-full items-center px-3 py-1">
              <span class="text-[12px]">Due date</span>
              <span class="ml-auto text-[14px]">T</span>
            </div>
            <div class="flex gap-3 w-full px-3 py-1 rounded-md">
              <button class="hover:bg-[#f5f5f5] p-1 rounded-md">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  class="scheduler-suggestions-item-icon--today text-[#70a968]"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g fill="currentColor" fill-rule="nonzero">
                    <path
                      d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z"
                      opacity=".1"
                    ></path>
                    <path
                      d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.5 4a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1z"
                    ></path>
                    <text
                      font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                      font-size="11"
                      transform="translate(4 2)"
                      font-weight="500"
                    >
                      <tspan x="9.5" y="18" text-anchor="middle">10</tspan>
                    </text>
                  </g>
                </svg>
              </button>
              <button class="hover:bg-[#f5f5f5] p-1 rounded-md">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  class="scheduler-suggestions-item-icon--tomorrow text-[#c38b43]"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g fill="currentColor" fill-rule="nonzero">
                    <path d="M14 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" opacity=".1"></path>
                    <path
                      d="M10.939 21.391a.5.5 0 0 1 .27.653L9.68 25.74a.5.5 0 1 1-.924-.383l1.53-3.695a.5.5 0 0 1 .654-.271zm6.776.27l1.53 3.696a.5.5 0 0 1-.923.383l-1.531-3.696a.5.5 0 0 1 .924-.382zM14 8a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-7.391 9.061a.5.5 0 0 1-.27.654l-3.696 1.53a.5.5 0 0 1-.383-.923l3.696-1.531a.5.5 0 0 1 .653.27zm15.435-.27l3.696 1.53a.5.5 0 0 1-.383.924l-3.695-1.53a.5.5 0 1 1 .382-.924zM14 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2.643 8.755l3.695 1.53a.5.5 0 1 1-.382.924L2.26 9.68a.5.5 0 1 1 .383-.924zm23.367.27a.5.5 0 0 1-.27.653l-3.696 1.531a.5.5 0 0 1-.382-.924l3.695-1.53a.5.5 0 0 1 .653.27zM9.678 2.26l1.531 3.696a.5.5 0 0 1-.924.382l-1.53-3.695a.5.5 0 1 1 .923-.383zm9.297-.27a.5.5 0 0 1 .27.653l-1.53 3.695a.5.5 0 1 1-.924-.382l1.53-3.696a.5.5 0 0 1 .654-.27z"
                    ></path>
                  </g>
                </svg>
              </button>
              <button class="hover:bg-[#f5f5f5] p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  class="scheduler-suggestions-item-icon--weekend text-[#246fed]"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M19.3 6c2 0 3.7 1.6 3.7 3.7V11a2.5 2.5 0 013 2.4v5c0 1.4-1 2.5-2.4 2.5H21v.5a.5.5 0 01-1 0V21H8v.5a.5.5 0 01-1 0V21H4.5A2.5 2.5 0 012 18.5v-5a2.5 2.5 0 013-2.4V9.7C5 7.7 6.6 6 8.7 6h10.6zm4.2 6c-.8 0-1.4.6-1.5 1.4V17H6v-3.5a1.5 1.5 0 00-3-.1v5.1c0 .8.6 1.4 1.4 1.5h19.1c.8 0 1.4-.6 1.5-1.3v-5.2c0-.8-.7-1.5-1.5-1.5zm-4.2-5H8.7A2.7 2.7 0 006 9.5v2c.6.5 1 1.2 1 2V16h14v-2.5c0-.8.4-1.5 1-2V9.7C22 8.3 20.9 7 19.5 7h-.2z"
                  ></path>
                </svg>
              </button>
              <button class="hover:bg-[#f5f5f5] p-1 rounded-md">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  class="text-[#C0c0c0]"
                >
                  <path
                    fill="currentColor"
                    d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 1a8 8 0 100 16 8 8 0 000-16zm3.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                  ></path>
                </svg>
              </button>
              <button class="hover:bg-[#f5f5f5] p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  class="text-[#2d2d2d]"
                >
                  <path
                    fill="currentColor"
                    d="M21 11.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-7 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-7 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm14 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                  ></path>
                </svg>
              </button>
            </div>

            <!-- Edit priority  -->

            <div class="flex w-full items-center px-3 py-1">
              <span class="text-[12px]">Priority</span>
              <span class="ml-auto text-[14px]">Y</span>
            </div>
            <div class="flex gap-3 w-full px-3 py-1 rounded-md">
              <button
                @click="setPriority('1', task.id, task)"
                class="hover:bg-[#f5f5f5] p-1 rounded-md"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Gw1i-E3 text-[#d1453b]"
                  data-icon-name="priority-icon"
                  data-priority="1"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button @click="setPriority('2', task.id)" class="hover:bg-[#f5f5f5] p-1 rounded-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Gw1i-E3 text-[#eb8909]"
                  data-icon-name="priority-icon"
                  data-priority="1"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button @click="setPriority('3', task.id)" class="hover:bg-[#f5f5f5] p-1 rounded-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Gw1i-E3 text-[#246fd0]"
                  data-icon-name="priority-icon"
                  data-priority="1"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.223 4.584A.5.5 0 004 5v14.5a.5.5 0 001 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0020 13V4.5a.5.5 0 00-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button @click="setPriority('4', task.id)" class="hover:bg-[#f5f5f5] p-1 rounded-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Gw1i-E3"
                  data-icon-name="priority-icon"
                  data-priority="4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 5a.5.5 0 01.223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.822 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0120 4.5V13a.5.5 0 01-.223.416c-1.09.727-2.518 1.084-4.277 1.084-1.113 0-1.92-.197-3.658-.776C10.204 13.178 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777V19.5a.5.5 0 01-1 0V5zm4.5 7c-1.367 0-2.535.216-3.5.654V5.277c.886-.515 2.05-.777 3.5-.777.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.367 0 2.535-.216 3.5-.654v7.377c-.886.515-2.05.777-3.5.777-.97 0-1.704-.178-3.342-.724C10.421 12.196 9.613 12 8.5 12z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </li>

          <hr />

          <!-- Reminder Pro option button  -->

          <li class="py-1">
            <div class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
              <button class="w-full flex gap-1 items-center rounded-md hover:bg-[#f5f5f5]">
                <span>
                  <svg width="24" height="24" class="text-[#898989]">
                    <path
                      fill="currentColor"
                      d="M6.355 17.438a7.5 7.5 0 1111.29 0l1.709 1.708a.5.5 0 01-.708.708l-1.708-1.709A7.471 7.471 0 0112 20a7.47 7.47 0 01-4.938-1.855l-1.708 1.709a.5.5 0 01-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-7h2.5a.5.5 0 110 1h-3a.5.5 0 01-.5-.5V8a.5.5 0 111 0v4zm4.604-6.896a.5.5 0 01-.708-.708l.336-.335a2.5 2.5 0 013.536 0l.671.671a2.5 2.5 0 010 3.536l-.335.336a.5.5 0 01-.708-.708l.336-.335a1.5 1.5 0 000-2.122l-.671-.671a1.5 1.5 0 00-2.122 0l-.335.336zM4.605 7.898a.5.5 0 01-.707.707l-.337-.337a2.5 2.5 0 010-3.536l.671-.671a2.5 2.5 0 013.536 0l.337.337a.5.5 0 01-.707.707l-.337-.337a1.5 1.5 0 00-2.122 0l-.671.671a1.5 1.5 0 000 2.122l.337.337z"
                    ></path>
                  </svg>
                </span>
                <span class="text-[14px] text-[#000000]">Reminders</span>
                <span class="text-[12px] text-[#8f4700] px-1.5 rounded-sm bg-[#faead1]">PRO</span>
              </button>
            </div>
          </li>

          <hr />

          <li class="py-1">
            <!-- Move to Project button  -->

            <button class="flex w-full items-center px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
              <div class="flex gap-1">
                <span>
                  <svg width="24" height="24" class="text-[#898989]">
                    <g fill="none" transform="translate(4 4)">
                      <circle cx="8" cy="8" r="7.5" stroke="currentColor"></circle>
                      <path
                        fill="currentColor"
                        d="M10.11 7.82L8.15 5.85a.5.5 0 11.7-.7l2.83 2.82a.5.5 0 010 .71l-2.83 2.83a.5.5 0 11-.7-.7l1.98-1.99H4.5a.5.5 0 110-1h5.61z"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span class="text-[14px] text-[#000000]">Move to project</span>
              </div>
              <div class="ml-auto">
                <span class="text-[12px]">V</span>
              </div>
            </button>

            <!-- Duplycate button  -->

            <button class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
              <div class="flex gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#898989]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.26756 5H18C18.5523 5 19 5.44772 19 6V16.7324C19.5978 16.3866 20 15.7403 20 15V6C20 4.89543 19.1046 4 18 4H9C8.25972 4 7.61337 4.4022 7.26756 5ZM6 7H15C16.1046 7 17 7.89543 17 9V18C17 19.1046 16.1046 20 15 20H6C4.89543 20 4 19.1046 4 18V9C4 7.89543 4.89543 7 6 7ZM5 9C5 8.44772 5.44772 8 6 8H15C15.5523 8 16 8.44772 16 9V18C16 18.5523 15.5523 19 15 19H6C5.44772 19 5 18.5523 5 18V9ZM11 14H13.5C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13H11V10.5C11 10.2239 10.7761 10 10.5 10C10.2239 10 10 10.2239 10 10.5V13H7.5C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14H10V16.5C10 16.7761 10.2239 17 10.5 17C10.7761 17 11 16.7761 11 16.5V14Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span class="text-[14px] text-[#000000]">Duplicate</span>
              </div>
            </button>

            <!-- Copy link to task  -->

            <button class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md">
              <div class="flex gap-1">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-[#898989]"
                  >
                    <path
                      d="M8.354 12.95l-.708-.707L5.88 14.01a3 3 0 104.242 4.243l3.536-3.536a3 3 0 000-4.242l-.707.707a2 2 0 010 2.828l-3.536 3.536a2 2 0 11-2.828-2.829l1.768-1.767z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M15.778 11.182l.707.707 1.768-1.768A3 3 0 1014.01 5.88l-3.535 3.535a3 3 0 000 4.243l.707-.707a2 2 0 010-2.829l3.535-3.535a2 2 0 112.829 2.828l-1.768 1.768z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span class="text-[14px] text-[#000000]">Copy link to task</span>
              </div>
              <div class="ml-auto">
                <span>
                  <kbd
                    class="l-x-sujkj-BdLQOUK+onwA== xivNdw8VtfMO4dChMoK+4g== a83bd4e0 _266d6623 _2a3b75a1 text-[12px] text-[#898989]"
                    >⇧</kbd
                  >
                </span>
                <span class="text-[12px] text-[#898989]">Ctrl</span>
              </div>
            </button>
          </li>

          <hr />

          <li class="py-1">
            <!-- Delete task button  -->
            <button
              @click="isDeleteDialogOpen = true"
              class="flex w-full px-3 py-1 hover:bg-[#f5f5f5] rounded-md"
            >
              <div class="flex gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="text-[#DE483A]"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h24v24H0z"></path>
                      <rect width="14" height="1" x="5" y="6" fill="currentColor" rx="0.5"></rect>
                      <path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path>
                      <path
                        stroke="currentColor"
                        d="M17.5 6.5h-11V18A1.5 1.5 0 008 19.5h8a1.5 1.5 0 001.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0014 3.5h-4A1.5 1.5 0 008.5 5v1.5z"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span class="text-[14px] text-[#DE483A]">Delete task</span>
              </div>
              <div class="ml-auto">
                <span>
                  <kbd
                    class="l-x-sujkj-BdLQOUK+onwA== xivNdw8VtfMO4dChMoK+4g== a83bd4e0 _266d6623 _2a3b75a1 text-[12px] text-[#898989]"
                    >⇧</kbd
                  >
                </span>
                <span class="text-[12px] text-[#898989]">Delete</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <TheAddtaskForm
      @closeAddtaskForm="(val) => closeAddtaskForm(val)"
      v-if="isEditFormOpen"
      :task="task"
    />
  </div>
  <div v-if="isDeleteDialogOpen">
    <div class="w-[450px] h-[200px] border-[1px] bg-white rounded-md px-4 py-2 fixed z-[100]">
      <div class="flex items-center">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="currentColor"
              d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 1a8 8 0 100 16 8 8 0 000-16zm.5 6a.5.5 0 01.5.5V15h1a.5.5 0 110 1h-3a.5.5 0 110-1h1v-4h-1a.5.5 0 110-1h1.5zm-.16-2.68a.84.84 0 110 1.68.84.84 0 010-1.68z"
            ></path>
          </svg>
        </span>
        <button class="hover:bg-[#e5e5e5] p-1 rounded-md ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="currentColor"
              d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"
            ></path>
          </svg>
        </button>
      </div>
      <p class="py-5">
        Are you sure you want to delete <strong>{{ task.title }}</strong
        >!?
      </p>

      <div class="flex justify-end w-full mt-12 gap-3">
        <button
          @click="isDeleteDialogOpen = false"
          class="font-medium text-[14px] py-1.5 px-3 rounded-md bg-[#f5f5f5] hover:bg-[#e5e5e5]"
        >
          Cancel
        </button>
        <button
          @click="deleteTask(task.id)"
          class="font-medium text-[14px] text-white py-1.5 px-3 rounded-md bg-[#dc4c36] hover:bg-[#B03D32]"
        >
          Delete
        </button>
      </div>
    </div>
    <div
      @click="isDeleteDialogOpen = false"
      class="h-screen w-screen bg-slate-300 opacity-60 fixed top-0 left-0 z-[99]"
    ></div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import TheAddtaskForm from '../Form-addTask/TheAddtaskForm.vue'
const target = ref(null)
onClickOutside(target, () => (isActionControlOpen.value = false))

const isActionControlOpen = ref(false)
const isEditFormOpen = ref(false)
const props = defineProps(['task'])
const task = props.task
const isDeleteDialogOpen = ref(false)
const priorityBorder = {
  1: 'border-[#D1453B] ',
  2: 'border-[#EB8909] ',
  3: 'border-[#246FE0] ',
  4: 'border-[#000000] '
}
const priorityText = {
  1: ' text-[#D1453B]',
  2: ' text-[#EB8909]',
  3: ' text-[#246FE0]',
  4: ' text-[#000000]'
}

const setPriorityEmit = defineEmits(['changePriority', 'deleteTask'])

const setPriority = (priority, taskId) => {
  console.log('Here')
  isActionControlOpen.value = false
  console.log(priority, taskId)
  // const zone = task.project_id ? 'project' : 'section'

  axios
    .put('http://localhost:3000/api/setPriority', { priority, taskId })
    .then((res) => {
      console.log(res.data)
      const result = res.data.result?.project_id
        ? 'project'
        : `section_${res.data.result?.section_id}`
      setPriorityEmit('changePriority', { priority, taskId, result })
    })
    .catch((e) => console.log(e))
}
const openEditForm = () => {
  isEditFormOpen.value = true
  isActionControlOpen.value = false
}

const closeAddtaskForm = (data) => {
  // if (data.taskAddFrom === 'project') taskInProject.value = false
  // else {
  //   listSection.value[index].isOpenAddTask = false
  // }
  isEditFormOpen.value = data.isAddFormOpen
  console.log('isEditFormOpen: ', isEditFormOpen.value)
}

const deleteTask = (id) => {
  setPriorityEmit('deleteTask', { id: id })
  isDeleteDialogOpen.value = false
}
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
