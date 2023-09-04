<template>
  <div
    class="h-screen w-[305px] fixed z-10 bg-[#FAFAFA] px-[18px] pt-[30px] overflow-y-auto flex flex-col gap-4"
  >
    <ul>
      <li class="w-full flex hover:bg-[#EEEEEE] rounded-md cursor-pointer">
        <RouterLink
          class="text-[14px] active:bg-[#EEEEEE] w-full flex flex-1 p-[5px] gap-[5px]"
          :to="{ name: 'app-inbox', params: { id: '123' } }"
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="Dd3PmF2g5h93YIf1bCDdiA== text-[#3278E2]"
            >
              <g fill="currentColor" fill-rule="nonzero">
                <path
                  d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                  opacity="0.1"
                ></path>
                <path
                  d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"
                ></path>
              </g>
            </svg>
          </span>
          <span>Inbox</span>
        </RouterLink>
        <span class="text-gray-300 w-6 flex justify-center items-center text-[13px]">1</span>
      </li>
      <li class="w-full flex hover:bg-[#EEEEEE] rounded-md cursor-pointer">
        <RouterLink
          class="flex flex-1 gap-[5px] text-[14px] p-[5px] active:bg-[#EEEEEE] w-full"
          :to="{ name: 'app-today' }"
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="ONBJEQtK++jnfUWJ3V90Dw== text-[#4B9244]"
            >
              <g fill="currentColor" fill-rule="evenodd">
                <path
                  fill-rule="nonzero"
                  d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                  opacity=".1"
                ></path>
                <path
                  fill-rule="nonzero"
                  d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                ></path>
                <text
                  font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                  font-size="9"
                  transform="translate(4 2)"
                  font-weight="500"
                >
                  <tspan x="8" y="15" text-anchor="middle">02</tspan>
                </text>
              </g>
            </svg>
          </span>
          <span>Today</span>
        </RouterLink>
        <span class="text-gray-300 w-6 flex justify-center items-center text-[13px]">1</span>
      </li>
      <li class="w-full flex hover:bg-[#EEEEEE] rounded-md cursor-pointer">
        <RouterLink
          class="flex flex-1 gap-[5px] p-[5px] text-[14px] active:bg-[#EEEEEE] w-full"
          :to="{ name: 'app-upcoming' }"
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="SWWJ2mDmoJ5jpYGsCY5nBA== text-[#8C61CE]"
            >
              <g fill="currentColor" fill-rule="nonzero">
                <path
                  d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
                  opacity="0.1"
                ></path>
                <path
                  d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"
                ></path>
              </g>
            </svg>
          </span>
          <span>Upcoming</span>
        </RouterLink>
      </li>
      <li class="w-full flex hover:bg-[#EEEEEE] rounded-md cursor-pointer">
        <RouterLink
          class="flex flex-1 gap-[5px] text-[14px] p-[5px] active:bg-[#EEEEEE] w-full"
          :to="{ name: 'app-filters-labels' }"
        >
          <span>
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="yeJ7DFSh0CB61w0UHm64kQ== text-[#C97508]"
            >
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span>Filters & Labels</span>
        </RouterLink>
      </li>
    </ul>
    <ul class="favorite_panel">
      <li class="flex hover:bg-[#EEEEEE] items-center gap-1 rounded-md">
        <RouterLink class="p-[5px] w-full font-medium" to="/favorite">Favorites</RouterLink>
        <button
          class="favorite_control hidden p-2 items-center justify-center w-7 h-7 rounded-md hover:bg-[#f5f5f5]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" class="aqv2kvH">
            <path
              d="M14 5.758L13.156 5 7.992 9.506l-.55-.48.002.002-4.588-4.003L2 5.77 7.992 11 14 5.758"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </li>
      <li class="favorite flex hover:bg-[#EEEEEE] items-center gap-1 rounded-md">
        <RouterLink class="p-[5px] w-full flex gap-2 items-center" to="/project-1">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 19a5 5 0 005-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 00-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 005 5z"
              ></path>
            </svg>
          </span>
          <span>Great Goal</span>
        </RouterLink>
        <button
          class="favorite_control_detail text-[#dadada] hidden items-center justify-center w-7 h-7 rounded-md hover:text-black"
        >
          <svg width="15" height="3">
            <path
              d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
    <ul class="project_panel">
      <li class="flex hover:bg-[#EEEEEE] items-center gap-1 rounded-md">
        <RouterLink class="p-[5px] w-full font-medium" to="/project">Project</RouterLink>
        <button
          class="project_control hidden p-2 items-center justify-center w-7 h-7 rounded-md hover:bg-[#f5f5f5]"
        >
          <svg width="13" height="13">
            <path
              d="M6 6V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          class="project_control hidden p-2 items-center justify-center w-7 h-7 rounded-md hover:bg-[#f5f5f5]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" class="aqv2kvH">
            <path
              d="M14 5.758L13.156 5 7.992 9.506l-.55-.48.002.002-4.588-4.003L2 5.77 7.992 11 14 5.758"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </li>
      <li class="project flex hover:bg-[#EEEEEE] items-center gap-1 rounded-md">
        <RouterLink class="p-[5px] w-full flex gap-2 items-center" to="/project-1">
          <span class="w-2 h-2 bg-[#14AAF5] rounded-full"></span>
          <span>Great Goal</span>
        </RouterLink>
        <button
          class="project_control_detail text-[#dadada] hidden items-center justify-center w-7 h-7 rounded-md hover:text-black"
        >
          <svg width="15" height="3">
            <path
              d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
      <li class="project flex hover:bg-[#EEEEEE] items-center gap-1 rounded-md">
        <RouterLink class="p-[5px] w-full flex gap-2 items-center" to="/project-2">
          <span class="w-2 h-2 bg-[#6ACCBC] rounded-full"></span>
          <span>Second Plan</span>
        </RouterLink>
        <button
          class="project_control_detail text-[#dadada] hidden items-center justify-center w-7 h-7 rounded-md hover:text-black"
        >
          <svg width="15" height="3">
            <path
              d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.project_panel:hover .project_control {
  display: flex;
}

.project:hover button.project_control_detail {
  display: flex;
}
.favorite_panel:hover .favorite_control {
  display: flex;
}

.favorite:hover button.favorite_control_detail {
  display: flex;
}
</style>
