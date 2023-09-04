<template>
  <div class="bg-[#DE483A] h-[44px] px-[18px] flex justify-between fixed z-20 w-full">
    <div class="flex h-full items-center">
      <button class="hover:bg-[#b9453b] p-1 rounded-md">
        <svg class="menu_icon" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M4.5 5h15a.5.5 0 110 1h-15a.5.5 0 010-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1z"
            class="filter brightness-0 invert-[1]"
          ></path>
        </svg>
      </button>
      <RouterLink :to="{ name: 'app-today' }" class="hover:bg-[#b9453b] p-1 rounded-md">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="filter brightness-0 invert-[1]"
        >
          <path
            fill="currentColor"
            d="M12.527 3.075c.35.104.64.263 1.27.876L19.1 9.123c.374.364.49.505.601.678.11.174.185.351.232.552.042.178.062.34.066.742L20 17.718c0 .446-.046.607-.134.77a.906.906 0 01-.378.378c-.163.088-.324.134-.77.134H14v-4.718c0-.446-.046-.607-.134-.77a.906.906 0 00-.378-.378c-.142-.077-.284-.122-.616-.132L12.718 13h-1.436c-.446 0-.607.046-.77.134a.906.906 0 00-.378.378c-.077.142-.122.284-.132.616l-.002.154V19H5.282c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.088-.163-.134-.324-.134-.77v-6.462c0-.522.02-.703.067-.903.047-.2.121-.378.232-.552l.077-.113c.098-.134.233-.282.524-.565l5.304-5.172c.629-.613.92-.772 1.269-.876a1.82 1.82 0 011.054 0zm-.286.958a.825.825 0 00-.482 0c-.18.054-.326.139-.63.418l-.227.216L5.598 9.84c-.3.293-.385.39-.456.5a.76.76 0 00-.102.242c-.026.112-.037.224-.04.531l.002 6.807.005.073.074.006L8.999 18 9 14.268l.003-.17c.013-.448.083-.749.249-1.058a1.9 1.9 0 01.788-.788c.306-.164.6-.234 1.043-.249l.199-.003h1.45l.17.003c.448.013.749.083 1.058.249.337.18.608.45.788.788.164.306.234.6.249 1.043l.003.199L14.999 18l3.92-.002.073-.006.006-.073.002-.2v-6.615l-.005-.218a1.494 1.494 0 00-.035-.305.747.747 0 00-.102-.242l-.059-.084a3.571 3.571 0 00-.294-.315l-5.407-5.273c-.425-.414-.604-.545-.798-.615l-.06-.019z"
          ></path>
        </svg>
      </RouterLink>
      <div class="ml-1">
        <form class="relative" action="">
          <input
            class="bg-[#E37065] placeholder:text-white placeholder:text-[13px] py-1 pl-9 rounded-md hover:bg-white hover:placeholder:text-black transition ease-in duration-300 focus:w-[450px] focus-visible:outline-none focus:placeholder:text-black focus:bg-white"
            type="text"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#000000"
            viewBox="0 0 256 256"
            class="search_icon absolute top-[5px] left-[6.8px] filter brightness-0 invert-[1] transition ease-in duration-300"
          >
            <path
              d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            ></path>
          </svg>
          <span
            class="search_icon_2 absolute right-2 top-2 w-4 h-4 bg-[#F5F5F5] text-[12px] hidden justify-center rounded-sm transition ease-in duration-300"
            >/</span
          >
          <div
            class="result_search hidden w-[450px] absolute bg-white top-[130%] border-[1px] rounded-md max-h-48 overflow-y-scroll"
          >
            <ul>
              <li class="pt-5">
                <span class="pl-5 font-semibold" for="">Recently viewed</span>
                <RouterLink
                  to="/app"
                  class="flex mt-2 items-center gap-2 hover:bg-gray-200 pl-5 py-2 w-full transition ease-in duration-300 font-extralight"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"
                    ></path>
                  </svg>
                  Today</RouterLink
                >
              </li>
              <hr />

              <li class="pt-5">
                <span class="pl-5 font-semibold" for="">Recently viewed</span>
                <RouterLink
                  to="/app"
                  class="flex mt-2 items-center gap-2 hover:bg-gray-200 pl-5 py-2 w-full transition ease-in duration-300 font-extralight"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"
                    ></path>
                  </svg>
                  Project</RouterLink
                >
              </li>

              <li class="pt-5">
                <span class="pl-5 font-semibold" for="">Recently viewed</span>
                <RouterLink
                  to="/app"
                  class="flex mt-2 items-center gap-2 hover:bg-gray-200 pl-5 py-2 w-full transition ease-in duration-300 font-extralight"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"
                    ></path>
                  </svg>
                  New Project</RouterLink
                >
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <button
        class="upgrade_pro relative flex gap-1 hover:bg-[#B03D32] bg-[#E37065] py-1 px-2 rounded-md text-[13px] text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" fill-rule="evenodd">
            <path
              stroke="#FFD093"
              fill="#FFD093"
              stroke-linejoin="bevel"
              d="M8.2 18.6l3.8-2.3 3.8 2.3a.8.8 0 0 0 1-.9l-.9-4.2 3.3-2.8a.8.8 0 0 0-.4-1.3L14.4 9l-1.7-4a.8.8 0 0 0-1.4 0L9.6 9l-4.4.4a.8.8 0 0 0-.4 1.3l3.3 2.8-1 4.2a.8.8 0 0 0 1.1.9z"
            ></path>
          </g>
        </svg>
        Upgrade to Pro
      </button>

      <button class="p-1 hover:bg-[#B03D32] rounded-md">
        <svg width="24" height="24" viewBox="0 0 24 24" class="filter brightness-0 invert-[1]">
          <g fill="none" fill-rule="evenodd" transform="translate(4 3)">
            <mask id="jd4FBg" fill="#fff">
              <path
                d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"
              ></path>
            </mask>
            <g mask="url(#jd4FBg)"><path fill="currentColor" d="M-4-3h24v24H-4z"></path></g>
          </g>
        </svg>
      </button>

      <button class="flex gap-1 hover:bg-[#B03D32] py-1 px-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="filter brightness-0 invert-[1]"
        >
          <g fill="none" fill-rule="evenodd">
            <g fill="currentColor" fill-rule="nonzero">
              <g>
                <g>
                  <path
                    d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                    transform="translate(-564 -480) translate(528 444) translate(36 36)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span class="text-white text-[13px]">0/5</span>
      </button>

      <button class="hover:bg-[#B03D32] p-1 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="filter brightness-0 invert-[1]"
        >
          <path
            d="M12 3a9 9 0 11-.001 18.001A9 9 0 0112 3zm0 1a8 8 0 100 16 8 8 0 000-16zm-.093 10.794c.47 0 .802.355.802.856 0 .495-.331.85-.802.85-.471 0-.808-.355-.808-.85 0-.501.337-.856.808-.856zm.128-7.294c1.465 0 2.465.954 2.465 2.213 0 .96-.47 1.639-1.215 2.11-.738.458-.948.8-.948 1.443v.397H11.32v-.562c-.006-.808.366-1.358 1.163-1.86.674-.433.936-.818.936-1.473 0-.758-.559-1.314-1.425-1.314-.878 0-1.436.544-1.5 1.418H9.5c.064-1.32.901-2.372 2.535-2.372z"
            fill="currentColor"
            fill-rule="nonzero"
          ></path>
        </svg>
      </button>

      <button class="hover:bg-[#B03D32] p-1 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="filter brightness-0 invert-[1]"
        >
          <path
            d="M12 3a5.75 5.75 0 015.75 5.75c0 3.24.682 5.875 2.03 7.927A1.5 1.5 0 0118.525 19H14.5a2.5 2.5 0 01-5 0H5.475a1.501 1.501 0 01-1.254-2.323C5.568 14.625 6.25 11.989 6.25 8.75A5.75 5.75 0 0112 3zm1.5 16h-3a1.5 1.5 0 003 0zM12 4a4.75 4.75 0 00-4.75 4.75c0 3.423-.731 6.248-2.193 8.476a.5.5 0 00.418.774h13.05a.5.5 0 00.418-.774c-1.462-2.227-2.193-5.053-2.193-8.476A4.75 4.75 0 0012 4z"
            fill="currentColor"
            fill-rule="nonzero"
          ></path>
        </svg>
      </button>

      <button>
        <img class="w-7 h-7 rounded-full" src="https://f4.bcbits.com/img/a3724985569_65" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
input:hover + .search_icon {
  filter: none;
}

input:focus + .search_icon {
  filter: none;
}

input:hover ~ .search_icon_2 {
  display: flex;
}
input:focus:hover + .search_icon_2 {
  display: none;
}

input:focus ~ .result_search {
  display: block;
}
</style>
