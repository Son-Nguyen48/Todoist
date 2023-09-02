<template>
  <div class="flex items-center">
    <ul class="flex items-center">
      <li class="py-[9px] px-[14px]">
        <a class="text-[15.5px] font-medium tracking-wide" href="#">Features</a>
      </li>
      <li class="py-2 px-4">
        <a class="text-[15.5px] font-medium tracking-wide" href="#">Models</a>
      </li>
      <li class="py-2 px-4">
        <a class="text-[15.5px] font-medium tracking-wide" href="#">Business</a>
      </li>
      <li class="py-2 px-4 flex items-center gap-2">
        <a class="text-[15.5px] font-medium tracking-wide" href="#">Resources</a>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path
              d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"
            ></path>
          </svg>
        </div>
      </li>
      <li class="py-2 px-4">
        <a class="text-[15.5px] font-medium tracking-wide" href="#">Prices</a>
      </li>
    </ul>
    <div class="w-[1px] mx-2 bg-gray-300 h-[40%]"></div>
    <ul class="flex gap-2">
      <li class="py-2 px-4">
        <RouterLink class="text-[15.5px] font-medium tracking-wide" to="/login">Login</RouterLink>
      </li>
      <li class="py-2 px-4 bg-[#DE483A] rounded-lg">
        <RouterLink to="/register" class="text-[15.5px] font-medium tracking-wide text-white"
          >Register</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup></script>
