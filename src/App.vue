<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter'
import { useMenuStore } from './stores/menu'
import { computed } from 'vue'
const store = useCounterStore()
const menuStore = useMenuStore()
const count = computed(() => store.count)
const selectedMenu = computed(() => menuStore.selectedMenu)
const doubleCount = computed(() => store.doubleCount)
const increment = store.increment
const changTabMenu = menuStore.changeTab

console.log('count: ', count, 'doubleCount: ', doubleCount, 'increment: ', increment)
</script>

<template>
  <nav class="mt-4 flex gap-2">
    <RouterLink
      class="px-4 py-2 border-[1px] border-blue-300 rounded-xl"
      @click="changTabMenu('/')"
      :class="selectedMenu === '/' ? 'bg-blue-300' : ''"
      to="/"
      >Home</RouterLink
    >
    <RouterLink
      class="px-4 py-2 border-[1px] border-blue-300 rounded-xl"
      @click="changTabMenu('/about')"
      :class="selectedMenu === '/about' ? 'bg-blue-300' : ''"
      to="/about"
      >About</RouterLink
    >
  </nav>
  {{ count }}
  <button class="px-4 py-2 rounded-xl border-[1px] border-blue-300 my-4" @click="increment">
    Increment
  </button>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav class="flex gap-2">
        <RouterLink
          class="px-4 py-2 border-[1px] border-blue-300 rounded-xl"
          @click="changTabMenu('/')"
          :class="selectedMenu === '/' ? 'bg-blue-300' : ''"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="px-4 py-2 border-[1px] border-blue-300 rounded-xl"
          @click="changTabMenu('/about')"
          :class="selectedMenu === '/about' ? 'bg-blue-300' : ''"
          to="/about"
          >About</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>
