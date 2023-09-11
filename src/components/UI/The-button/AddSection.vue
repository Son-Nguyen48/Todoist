<template>
  <button
    class="add_section_btn before:hidden after:hidden before:content-[''] relative w-full before:w-full before:h-[1px] before:bg-[#DE483A] before:absolute before:top-3 before:left-0 after:h-6 after:w-[100px] after:content-['Add_section'] after:text-[#DE483A] after:font-semibold after:bg-white after:absolute rounded-sm after:transform after:-translate-x-1/2 py-6 after:-translate-y-full"
  ></button>
</template>

<script setup></script>

<style scoped>
button.add_section_btn:hover::before,
button.add_section_btn:hover::after {
  display: inline;
}
</style>
