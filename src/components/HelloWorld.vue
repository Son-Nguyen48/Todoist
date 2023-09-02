<script setup>
import { useMenuStore } from '../stores/menu'
import { computed } from 'vue'
const menuStore = useMenuStore()
const selectedMenu = computed(() => menuStore.selectedMenu)
const changTabMenu = menuStore.changeTab

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="flex gap-2">
    <RouterLink
      class="px-4 py-2 border-[1px] border-blue-300 rounded-xl"
      @click="changTabMenu('/page1')"
      :class="selectedMenu === '/page1' ? 'bg-blue-300' : ''"
      to="/page1"
      >Page1</RouterLink
    >
    <RouterLink
      class="px-4 py-2 border-[1px] border-blue-300 rounded-xl"
      @click="changTabMenu('/page2')"
      :class="selectedMenu === '/page2' ? 'bg-blue-300' : ''"
      to="/page2"
      >Page2</RouterLink
    >
  </nav>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
